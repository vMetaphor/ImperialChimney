"use client";

import { useEffect } from "react";

export default function HomeScripts() {
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service-card");
    let serviceObserver;

    if ("IntersectionObserver" in window) {
      serviceObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              serviceObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      serviceCards.forEach((card) => serviceObserver.observe(card));
    } else {
      serviceCards.forEach((card) => card.classList.add("is-visible"));
    }

    const track = document.querySelector(".testimonials-track");
    if (!track) {
      return () => {
        if (serviceObserver) serviceObserver.disconnect();
      };
    }

    const testimonialCards = track.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".testimonial-nav.prev");
    const nextBtn = document.querySelector(".testimonial-nav.next");

    const getScrollAmount = () => {
      if (!testimonialCards.length) return track.clientWidth;
      const card = testimonialCards[0];
      const style = window.getComputedStyle(card);
      const marginRight = parseFloat(style.marginRight) || 0;
      const gap = parseFloat(window.getComputedStyle(track).columnGap || 0);
      return card.offsetWidth + marginRight + gap;
    };

    const scrollByAmount = (direction) => {
      const amount = getScrollAmount();
      track.scrollBy({ left: direction * amount, behavior: "smooth" });
    };

    const handlePrev = () => scrollByAmount(-1);
    const handleNext = () => scrollByAmount(1);

    if (prevBtn) prevBtn.addEventListener("click", handlePrev);
    if (nextBtn) nextBtn.addEventListener("click", handleNext);

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    const handleMouseDown = (e) => {
      isDown = true;
      track.classList.add("dragging");
      startX = e.pageX - track.offsetLeft;
      startScrollLeft = track.scrollLeft;
    };

    const handleMouseUp = () => {
      isDown = false;
      track.classList.remove("dragging");
    };

    const handleMouseLeave = () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.2;
      track.scrollLeft = startScrollLeft - walk;
    };

    track.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    track.addEventListener("mouseleave", handleMouseLeave);
    track.addEventListener("mousemove", handleMouseMove);

    let touchStartX = 0;
    let touchScrollLeft = 0;

    const handleTouchStart = (e) => {
      const t = e.touches[0];
      touchStartX = t.pageX;
      touchScrollLeft = track.scrollLeft;
    };

    const handleTouchMove = (e) => {
      const t = e.touches[0];
      const walk = (t.pageX - touchStartX) * 1.2;
      track.scrollLeft = touchScrollLeft - walk;
    };

    track.addEventListener("touchstart", handleTouchStart, { passive: true });
    track.addEventListener("touchmove", handleTouchMove, { passive: true });

    let autoScrollInterval;
    let isUserInteracting = false;

    const startAutoScroll = () => {
      if (autoScrollInterval) return;

      autoScrollInterval = setInterval(() => {
        if (!isUserInteracting && track) {
          const maxScroll = track.scrollWidth - track.clientWidth;
          if (track.scrollLeft >= maxScroll) {
            track.scrollLeft = 0;
          } else {
            track.scrollLeft += 1;
          }
        }
      }, 30);
    };

    const stopAutoScroll = () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
      }
    };

    const handleMouseEnter = () => {
      isUserInteracting = true;
    };

    const handleMouseLeaveAuto = () => {
      isUserInteracting = false;
    };

    const handleTouchStartAuto = () => {
      isUserInteracting = true;
    };

    const handleTouchEndAuto = () => {
      setTimeout(() => {
        isUserInteracting = false;
      }, 2000);
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeaveAuto);
    track.addEventListener("touchstart", handleTouchStartAuto, { passive: true });
    track.addEventListener("touchend", handleTouchEndAuto, { passive: true });

    if (prevBtn) {
      prevBtn.addEventListener("mouseenter", handleMouseEnter);
      prevBtn.addEventListener("mouseleave", handleMouseLeaveAuto);
    }

    if (nextBtn) {
      nextBtn.addEventListener("mouseenter", handleMouseEnter);
      nextBtn.addEventListener("mouseleave", handleMouseLeaveAuto);
    }

    startAutoScroll();

    return () => {
      if (serviceObserver) serviceObserver.disconnect();
      if (prevBtn) prevBtn.removeEventListener("click", handlePrev);
      if (nextBtn) nextBtn.removeEventListener("click", handleNext);
      track.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      track.removeEventListener("mouseleave", handleMouseLeave);
      track.removeEventListener("mousemove", handleMouseMove);
      track.removeEventListener("touchstart", handleTouchStart);
      track.removeEventListener("touchmove", handleTouchMove);
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeaveAuto);
      track.removeEventListener("touchstart", handleTouchStartAuto);
      track.removeEventListener("touchend", handleTouchEndAuto);
      if (prevBtn) {
        prevBtn.removeEventListener("mouseenter", handleMouseEnter);
        prevBtn.removeEventListener("mouseleave", handleMouseLeaveAuto);
      }
      if (nextBtn) {
        nextBtn.removeEventListener("mouseenter", handleMouseEnter);
        nextBtn.removeEventListener("mouseleave", handleMouseLeaveAuto);
      }
      stopAutoScroll();
    };
  }, []);

  return null;
}
