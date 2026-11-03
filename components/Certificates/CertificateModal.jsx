
"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "../../lib/assetPath";


const CertificateModal = ({ cert, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && cert && (
        <div
          key={cert.id}
          className="fixed inset-0 z-[100010] flex items-center justify-center p-4 sm:p-6 lg:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-bg-alt border border-theme-border rounded-2xl shadow-2xl flex flex-col overflow-hidden text-fg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-theme-border bg-bg/50">
              <div className="flex items-center gap-3 pr-4 min-w-0">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-semibold uppercase tracking-wider shrink-0">
                  {cert.category}
                </span>

                <h3
                  id="certificate-modal-title"
                  className="font-semibold text-sm sm:text-base text-fg truncate"
                >
                  {cert.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate preview"
                className="w-8 h-8 rounded-full bg-fg/10 hover:bg-fg/20 flex items-center justify-center text-fg transition-colors shrink-0 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Certificate Image */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-black/10 min-h-[300px]">
              <img
                src={assetPath(cert.image)}
                alt={cert.title}
                className="max-h-[64vh] w-auto max-w-full object-contain rounded-lg shadow-lg border border-fg/10"
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-theme-border bg-bg/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-fg">
                  {cert.issuer}
                </span>

                <span className="text-fg-muted text-xs">
                  {cert.date}
                  {cert.credentialId
                    ? ` • ID: ${cert.credentialId}`
                    : ""}
                </span>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#0016EC] text-white font-medium text-xs tracking-wider uppercase hover:bg-[#0016EC]/90 transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Verify Credential</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {/* <a
                  href={assetPath(cert.image)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-theme-border text-fg font-medium text-xs tracking-wider uppercase hover:bg-fg/5 transition-colors"
                >
                  Open Full Asset
                </a> */}
                <a
                  href={assetPath(cert.image)}
                  download={cert.image.split("/").pop() || "certificate.png"}
                  className="px-4 py-2 rounded-full border border-theme-border text-fg font-medium text-xs tracking-wider uppercase hover:bg-fg/5 transition-colors inline-flex items-center gap-2"
                  title="Open Full Asset"
                >
                  <span>Open Full Asset</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
