"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";

type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pathway: "academy" | "engaging-room";
};

export default function ApplicationModal({ isOpen, onClose, pathway }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after a few seconds and close
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  const title = pathway === "academy" ? "Apply to Academy" : "Join Engaging Room";
  const brandColor = pathway === "academy" ? "#107C41" : "#F2994A";
  const bgColor = pathway === "academy" ? "bg-white text-gray-900" : "bg-[#2A2A2A] text-white";
  const inputBg = pathway === "academy" ? "bg-gray-50 border-gray-200 focus:border-[#107C41]" : "bg-[#363535] border-[#555] focus:border-[#F2994A] text-white";
  const labelColor = pathway === "academy" ? "text-gray-700" : "text-gray-300";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`w-full max-w-lg rounded-2xl shadow-2xl pointer-events-auto overflow-hidden ${bgColor}`}
            >
              {isSuccess ? (
                <div className="p-12 text-center flex flex-col items-center justify-center h-[500px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 className="w-20 h-20 mx-auto mb-6" style={{ color: brandColor }} />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-display mb-3">Application Received!</h3>
                  <p className="text-gray-500 max-w-[280px]">
                    We will review your details and get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between p-6 border-b border-gray-500/20">
                    <h2 className="text-2xl font-bold font-display tracking-tight">{title}</h2>
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full hover:bg-gray-500/10 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`text-sm font-medium ${labelColor}`}>First Name</label>
                        <input
                          type="text"
                          required
                          className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className={`text-sm font-medium ${labelColor}`}>Last Name</label>
                        <input
                          type="text"
                          required
                          className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={`text-sm font-medium ${labelColor}`}>Email Address</label>
                      <input
                        type="email"
                        required
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`text-sm font-medium ${labelColor}`}>
                        Why do you want to join?
                      </label>
                      <textarea
                        required
                        rows={3}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors resize-none ${inputBg}`}
                        placeholder="Tell us a bit about your goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{ backgroundColor: brandColor }}
                      className="w-full py-4 rounded-lg font-bold text-white shadow-md hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
