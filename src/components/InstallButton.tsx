import { useEffect, useState } from "react";

export const InstallButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener
      );
  }, []);

  const handleInstall = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("App installed!");
      } else {
        console.log("Installation dismissed");
      }
      setDeferredPrompt(null);
    });
  };

  if (!deferredPrompt) return null;

  return (
    <button
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: 5,
        cursor: "pointer",
        zIndex: 1000,
      }}
      onClick={handleInstall}
    >
      Install App
    </button>
  );
};

// TypeScript type for BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}
