"use client";

import { useEffect } from "react";

export default function DevToolsBlocker() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
      ) {
        e.preventDefault();
      }
    };

    const contextMenuHandler = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("keydown", handler);
    document.addEventListener("contextmenu", contextMenuHandler);
    return () => {
      document.removeEventListener("keydown", handler);
      document.removeEventListener("contextmenu", contextMenuHandler);
    };
  }, []);

  return null;
}
