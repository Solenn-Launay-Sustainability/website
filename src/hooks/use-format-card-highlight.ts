"use client";

import { useEffect } from "react";

const HIGHLIGHT_DURATION_MS = 2200;

const highlightTimeouts = new WeakMap<HTMLElement, number>();

function getVisibleFormatCard(formatId: string) {
  const selector = `[data-format-card="${formatId}"]`;
  const cards = Array.from(document.querySelectorAll<HTMLElement>(selector));

  return cards.find((card) => card.offsetParent !== null) ?? cards[0];
}

function clearHighlight(card: HTMLElement) {
  const existingTimeout = highlightTimeouts.get(card);
  if (existingTimeout) {
    window.clearTimeout(existingTimeout);
  }

  card.dataset.highlighted = "false";
}

function highlightFormatCard(formatId: string) {
  const card = getVisibleFormatCard(formatId);
  if (!card) {
    return;
  }

  card.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  clearHighlight(card);
  card.dataset.highlighted = "true";

  const timeoutId = window.setTimeout(() => {
    card.dataset.highlighted = "false";
    highlightTimeouts.delete(card);
  }, HIGHLIGHT_DURATION_MS);

  highlightTimeouts.set(card, timeoutId);
}

function getFormatIdFromHash(hash: string) {
  if (!hash.startsWith("#format-")) {
    return null;
  }

  return hash.replace("#format-", "");
}

function useFormatCardHighlight() {
  useEffect(() => {
    const handleHashHighlight = () => {
      const formatId = getFormatIdFromHash(window.location.hash);
      if (!formatId) {
        return;
      }

      highlightFormatCard(formatId);
    };

    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLElement>("[data-format-link]");
      if (!link) {
        return;
      }

      const formatId = link.dataset.formatLink;
      if (!formatId) {
        return;
      }

      event.preventDefault();

      const hash = `#format-${formatId}`;
      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }

      highlightFormatCard(formatId);
    };

    handleHashHighlight();

    window.addEventListener("hashchange", handleHashHighlight);
    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("hashchange", handleHashHighlight);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);
}

export { useFormatCardHighlight };
