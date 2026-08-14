"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";

type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pathway: "academy" | "engaging-room" | "network";
};

export default function ApplicationModal({ isOpen, onClose, pathway }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    socialMedia: "",
    status: "",
    interestedArm: [] as string[],
    businessSkill: "",
    income: "",
    building: "",
    goals: "",
    declaration: false,
  });

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          firstName: "", lastName: "", phone: "", email: "", location: "",
          socialMedia: "", status: "", interestedArm: [], businessSkill: "",
          income: "", building: "", goals: "", declaration: false,
        });
      }, 300);
    }
  }, [isOpen]);

  const handleCheckbox = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interestedArm: prev.interestedArm.includes(value)
        ? prev.interestedArm.filter(item => item !== value)
        : [...prev.interestedArm, value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert("Please check the declaration box to proceed.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, pathway }),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const title = "Join Light Bearers Network";
  const brandColor = pathway === "academy" ? "#107C41" : "#F2994A";
  const bgColor = pathway === "engaging-room" ? "bg-[#2A2A2A] text-white" : "bg-white text-gray-900";
  const inputBg = pathway === "engaging-room" ? "bg-[#363535] border-[#555] focus:border-[#F2994A] text-white" : "bg-gray-50 border-gray-200 focus:border-[#F2994A]";
  const labelColor = pathway === "engaging-room" ? "text-gray-300" : "text-gray-700";
  const sectionTitleColor = pathway === "engaging-room" ? "text-[#F2994A]" : "text-[#F2994A]";

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
              className={`w-full max-w-2xl rounded-2xl shadow-2xl pointer-events-auto flex flex-col max-h-[90vh] ${bgColor}`}
            >
              {isSuccess ? (
                <div className="p-12 text-center flex flex-col items-center justify-center h-[500px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 className="w-24 h-24 mx-auto mb-6" style={{ color: brandColor }} />
                  </motion.div>
                  <h3 className="text-3xl font-bold font-display mb-4">Application Received!</h3>
                  <p className="text-lg opacity-80 max-w-md mx-auto">
                    Welcome to the journey. We will review your details and you will be directed to join the community shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between p-6 border-b border-gray-500/20 shrink-0">
                    <h2 className="text-2xl font-bold font-display tracking-tight">{title}</h2>
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full hover:bg-gray-500/10 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="overflow-y-auto p-6 scroll-smooth">
                    <div className="mb-8 space-y-4">
                      <p className={`text-sm leading-relaxed ${pathway === 'engaging-room' ? 'text-gray-300' : 'text-gray-600'}`}>
                        Light Bearers Network is a community for young christian builders (entrepreneurs/ professionals) building first-class brands rooted in Kingdom culture. Whether you're just starting out or already building something, this is where you'll find the community, structure, and accountability to grow with evidence to show for it.
                      </p>
                      <p className="text-sm font-bold text-[#F2994A]">
                        Fill out the form below to get started. You will be directed to join the community once you fill your form.
                      </p>
                      <p className={`text-xs ${pathway === 'engaging-room' ? 'text-gray-400' : 'text-gray-500'}`}>
                        Kindly ensure to fill it intentionally as this would help guide you in making the most of your time in this community.
                      </p>
                    </div>

                    <form id="application-form" onSubmit={handleSubmit} className="space-y-10">
                      
                      {/* SECTION 1 */}
                      <div className="space-y-5">
                        <h3 className={`text-lg font-bold uppercase tracking-wider font-mono border-b pb-2 border-gray-500/20 ${sectionTitleColor}`}>
                          Section 1: About You
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className={`text-sm font-medium ${labelColor}`}>First Name</label>
                            <input
                              type="text" required value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className={`text-sm font-medium ${labelColor}`}>Last Name</label>
                            <input
                              type="text" required value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className={`text-sm font-medium ${labelColor}`}>Phone Number (WhatsApp)</label>
                            <input
                              type="tel" required value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                              placeholder="+234..."
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className={`text-sm font-medium ${labelColor}`}>Email Address</label>
                            <input
                              type="email" required value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className={`text-sm font-medium ${labelColor}`}>Location (State)</label>
                            <input
                              type="text" required value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                              className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className={`text-sm font-medium ${labelColor}`}>Social Media Handle (Main)</label>
                            <input
                              type="text" required value={formData.socialMedia}
                              onChange={(e) => setFormData({ ...formData, socialMedia: e.target.value })}
                              className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                              placeholder="@username"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className={`text-sm font-medium ${labelColor}`}>Status</label>
                          <select 
                            required value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors appearance-none ${inputBg}`}
                          >
                            <option value="" disabled>Select your status...</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Recent Graduate / NYSC">Recent Graduate / NYSC</option>
                            <option value="Working Professional">Working Professional</option>
                            <option value="Established Business Owner">Established Business Owner</option>
                          </select>
                        </div>
                      </div>

                      {/* SECTION 2 */}
                      <div className="space-y-5">
                        <h3 className={`text-lg font-bold uppercase tracking-wider font-mono border-b pb-2 border-gray-500/20 ${sectionTitleColor}`}>
                          Section 2: Where You Fit
                        </h3>
                        
                        <div className="space-y-2">
                          <label className={`text-sm font-medium ${labelColor}`}>Which arm of the community are you interested in?</label>
                          <div className="space-y-2 pt-2">
                            {["Open Community", "Engaging Room", "Light Bearers Academy"].map((arm) => (
                              <label key={arm} className="flex items-center gap-3 cursor-pointer">
                                <input 
                                  type="checkbox" 
                                  checked={formData.interestedArm.includes(arm)}
                                  onChange={() => handleCheckbox(arm)}
                                  className="w-5 h-5 rounded border-gray-300 text-[#F2994A] focus:ring-[#F2994A]"
                                />
                                <span className={labelColor}>{arm}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className={`text-sm font-medium ${labelColor}`}>What business/brand/skill do you have? (optional, add "N/A if none")</label>
                          <input
                            type="text" value={formData.businessSkill}
                            onChange={(e) => setFormData({ ...formData, businessSkill: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${inputBg}`}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className={`text-sm font-medium ${labelColor}`}>What is your current monthly income strength?</label>
                          <select 
                            required value={formData.income}
                            onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors appearance-none ${inputBg}`}
                          >
                            <option value="" disabled>Select income range...</option>
                            <option value="10k to 50k">10k to 50k</option>
                            <option value="50k to 100k">50k to 100k</option>
                            <option value="100k to 500k">100k to 500k</option>
                            <option value="500k and above">500k and above</option>
                          </select>
                        </div>
                      </div>

                      {/* SECTION 3 */}
                      <div className="space-y-5">
                        <h3 className={`text-lg font-bold uppercase tracking-wider font-mono border-b pb-2 border-gray-500/20 ${sectionTitleColor}`}>
                          Section 3: Your Why
                        </h3>
                        
                        <div className="space-y-1.5">
                          <label className={`text-sm font-medium ${labelColor}`}>What are you currently building that's tied to achieving your bigger vision?</label>
                          <textarea
                            required rows={3} value={formData.building}
                            onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors resize-none ${inputBg}`}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className={`text-sm font-medium ${labelColor}`}>What do you want to get out of joining this community?</label>
                          <textarea
                            required rows={4} value={formData.goals}
                            onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors resize-none ${inputBg}`}
                          />
                        </div>
                      </div>

                      {/* SECTION 4 */}
                      <div className="space-y-5">
                        <h3 className={`text-lg font-bold uppercase tracking-wider font-mono border-b pb-2 border-gray-500/20 ${sectionTitleColor}`}>
                          Section 4: Declaration
                        </h3>
                        
                        <label className="flex items-start gap-3 cursor-pointer bg-gray-500/5 p-4 rounded-xl border border-gray-500/10 hover:bg-gray-500/10 transition-colors">
                          <input 
                            type="checkbox" required
                            checked={formData.declaration}
                            onChange={(e) => setFormData({ ...formData, declaration: e.target.checked })}
                            className="w-5 h-5 rounded border-gray-300 text-[#F2994A] focus:ring-[#F2994A] mt-0.5"
                          />
                          <span className={`text-sm font-medium leading-relaxed ${labelColor}`}>
                            "I declare that I'm a young believer interested in building a first-class brand with kingdom culture."
                          </span>
                        </label>
                      </div>

                    </form>
                  </div>
                  
                  {/* FOOTER ACTION */}
                  <div className="p-6 border-t border-gray-500/20 shrink-0 bg-black/5">
                    <button
                      form="application-form"
                      type="submit"
                      disabled={isSubmitting}
                      style={{ backgroundColor: brandColor }}
                      className="w-full py-4 rounded-lg font-bold text-white shadow-md hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
