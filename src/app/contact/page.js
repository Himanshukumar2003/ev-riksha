"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import ServicesSection from "./addresh";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    message: "",
    firstName: "",
    lastName: "",
    phone: "",
    subject: "",
    saveInfo: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, saveInfo: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <>
      <ServicesSection></ServicesSection>
      <section className="section bg-gray-100">
        <div className="  container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Content */}
            <div className="space-y-6  sticky top-5">
              <div className="flex items-center gap-2 text-[var(--color-primary-light)] text-sm font-medium tracking-wide">
                <div className="w-8 h-px bg-[var(--color-primary-light)]"></div>
                CONTACT US
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Happy to answer all your questions
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-md">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Right side - Form */}
            <div className="bg-white shadow-md p-10 rounded-4xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    className="min-h-[120px] border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)]"
                  />
                </div>

                {/* Name fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)]"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)]"
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="saveInfo"
                    checked={formData.saveInfo}
                    onCheckedChange={handleCheckboxChange}
                    className="border-gray-300 data-[state=checked]:bg-[var(--color-primary-light)] data-[state=checked]:border-[var(--color-primary-light)]"
                  />
                  <label htmlFor="saveInfo" className="text-sm text-gray-600">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[var(--color-primary-light)] hover:bg-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2"
                >
                  Submit Now
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
