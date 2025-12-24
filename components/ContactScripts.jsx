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

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("sent") === "1") {
      openModal();
      urlParams.delete("sent");
      const newQuery = urlParams.toString();
      const newUrl =
        window.location.pathname +
        (newQuery ? `?${newQuery}` : "") +
        window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
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
