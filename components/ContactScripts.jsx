"use client";

import { useEffect } from "react";

export default function ContactScripts() {
  useEffect(() => {
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalOk = document.getElementById("modalOk");
    const modalClose = document.getElementById("modalClose");
    const progressBar = document.getElementById("modalProgressBar");

    if (!modalBackdrop || !modalOk || !modalClose || !progressBar) return;

    const AUTO_CLOSE_TIME = 4000;
    let autoCloseTimer = null;

    const openModal = () => {
      modalBackdrop.style.display = "flex";
      progressBar.style.transition = "none";
      progressBar.style.width = "0%";

      requestAnimationFrame(() => {
        progressBar.style.transition = `width ${AUTO_CLOSE_TIME}ms linear`;
        progressBar.style.width = "100%";
      });

      if (autoCloseTimer) clearTimeout(autoCloseTimer);
      autoCloseTimer = setTimeout(closeModal, AUTO_CLOSE_TIME);
    };

    const closeModal = () => {
      modalBackdrop.style.display = "none";
      if (autoCloseTimer) clearTimeout(autoCloseTimer);
      autoCloseTimer = null;
    };

    // Record when the form became available so the API can reject submissions
    // that complete implausibly fast. Set from script on purpose: the contact
    // page is statically generated, so a value rendered server-side would be
    // stuck at build time.
    const openedAt = document.getElementById("form_opened_at");
    if (openedAt) openedAt.value = String(Date.now());

    const stripParam = (params, key) => {
      params.delete(key);
      const query = params.toString();
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname + (query ? `?${query}` : "") + window.location.hash
      );
    };

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("sent") === "1") {
      openModal();
      stripParam(urlParams, "sent");
    }

    // /api/contact signals every failure by redirecting back with ?error=...
    // Without this branch those redirects were completely silent: the page just
    // reloaded, so the visitor assumed the estimate request went through.
    const error = urlParams.get("error");
    if (error) {
      const banner = document.getElementById("formError");
      if (banner) {
        const messages = {
          missing: "Please fill in every field so we can get back to you.",
          email: "That email address does not look right - please check it and try again.",
          captcha: "We could not verify the “I am not a robot” check. Please try again.",
          send: "Something went wrong on our end and your message was not sent."
        };
        const detail = document.getElementById("formErrorDetail");
        if (detail) detail.textContent = messages[error] || messages.send;
        banner.hidden = false;
        banner.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      stripParam(urlParams, "error");
    }

    const handleBackdropClick = (event) => {
      if (event.target === modalBackdrop) closeModal();
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    modalOk.addEventListener("click", closeModal);
    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      modalOk.removeEventListener("click", closeModal);
      modalClose.removeEventListener("click", closeModal);
      modalBackdrop.removeEventListener("click", handleBackdropClick);
      document.removeEventListener("keydown", handleKeyDown);
      if (autoCloseTimer) clearTimeout(autoCloseTimer);
    };
  }, []);

  return null;
}
