"use client";

import { useEffect } from "react";

export default function ServicesScripts() {
  useEffect(() => {
    const tabs = Array.from(document.querySelectorAll(".services-tab"));
    const panels = Array.from(document.querySelectorAll(".services-panel"));
    const masonryShowcase = document.getElementById("masonry-showcase");

    const hashMap = {
      "power-washing": "wash",
      powerwashing: "wash",
      "pressure-washing": "wash",
      wash: "wash"
    };

    const activateTab = (target) => {
      if (!target) return;
      const key = target.replace(/^tab-/, "");
      const mapped = hashMap[key] || key;
      const tabEl = document.querySelector(
        `.services-tab[data-tab="${mapped}"]`
      );
      const panelEl = document.getElementById(`tab-${mapped}`);
      if (!tabEl || !panelEl) return;

      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      tabEl.classList.add("active");
      panelEl.classList.add("active");

      if (masonryShowcase) {
        masonryShowcase.classList.toggle("hidden", mapped !== "masonry");
      }
    };

    const handleTabClick = (event) => {
      const target = event.currentTarget.getAttribute("data-tab");
      activateTab(target);
    };

    tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));

    const params = new URLSearchParams(window.location.search);
    const initialTab = params.get("tab");

    if (initialTab) {
      activateTab(initialTab);
    } else {
      const initialHash = window.location.hash.replace("#", "");
      if (initialHash) {
        activateTab(initialHash);
      } else {
        const initialActive = document.querySelector(".services-tab.active");
        if (initialActive) {
          activateTab(initialActive.getAttribute("data-tab"));
        }
      }
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) activateTab(hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    const sliders = document.querySelectorAll(".ba-slider");
    const sliderHandlers = [];

    sliders.forEach((slider) => {
      const range = slider.querySelector(".ba-range");
      const afterImg = slider.querySelector(".ba-img-after");
      const handle = slider.querySelector(".ba-handle");

      let divider = slider.querySelector(".ba-divider");
      if (!divider) {
        divider = document.createElement("div");
        divider.className = "ba-divider";
        slider.appendChild(divider);
      }

      const updateSlider = (value) => {
        const percentage = `${value}%`;
        if (afterImg) afterImg.style.clipPath = `inset(0 0 0 ${percentage})`;
        if (handle) handle.style.left = percentage;
        divider.style.left = percentage;
      };

      const handleInput = (event) => {
        updateSlider(event.target.value);
      };

      if (range) {
        range.addEventListener("input", handleInput);
        updateSlider(range.value);
      }

      sliderHandlers.push({ range, handleInput });
    });

    return () => {
      tabs.forEach((tab) => tab.removeEventListener("click", handleTabClick));
      window.removeEventListener("hashchange", handleHashChange);
      sliderHandlers.forEach(({ range, handleInput }) => {
        if (range) range.removeEventListener("input", handleInput);
      });
    };
  }, []);

  return null;
}
