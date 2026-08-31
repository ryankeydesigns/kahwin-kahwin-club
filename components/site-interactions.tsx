"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteInteractions() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = document.querySelectorAll(
      "main > section:not(.hero):not(.pagehero), .infocards > div, .catgrid > *, .contactchoices > *, .timeline > *, .levels > *",
    );
    revealTargets.forEach((node) => node.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px" },
    );
    revealTargets.forEach((node) => observer.observe(node));

    const updateScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const value = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
      setShowTop(window.scrollY > 520);
      document.body.classList.toggle("page-scrolled", window.scrollY > 28);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const tapHeart = (event: PointerEvent) => {
      if (reduceMotion || event.pointerType === "mouse") return;
      const heart = document.createElement("span");
      heart.className = "tap-heart";
      heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
      heart.style.left = `${event.clientX}px`;
      heart.style.top = `${event.clientY}px`;
      document.body.appendChild(heart);
      window.setTimeout(() => heart.remove(), 850);
    };
    window.addEventListener("pointerdown", tapHeart, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointerdown", tapHeart);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <button
        className={showTop ? "back-to-top show" : "back-to-top"}
        type="button"
        aria-label="返回页面顶部"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
