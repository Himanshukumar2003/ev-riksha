"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import ServicesSection from "./cards";

// Zod validation schema
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[1-9][\d]{9,14}$/, "Please enter a valid phone number"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
  saveInfo: z.boolean().optional(),
});

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      subject: "",
      message: "",
      saveInfo: false,
    },
  });

  const saveInfo = watch("saveInfo");

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <>
      <ServicesSection />

      <section className="section bg-gray-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6 sticky top-5">
              <div className="flex items-center gap-2 text-[var(--color-primary-light)] text-sm font-medium tracking-wide">
                <div className="w-8 h-px bg-[var(--color-primary-light)]"></div>
                CONTACT US
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Happy to answer all your questions
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>

            {/* Form */}
            <div className="bg-white shadow-md p-10 rounded-4xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                        errors.firstName
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                        errors.lastName
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                        errors.phone ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
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
                      {...register("subject")}
                      className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Your message..."
                    className={`min-h-[120px] border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                      errors.message ? "border-red-500 focus:ring-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Save Info Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="saveInfo"
                    checked={saveInfo}
                    onCheckedChange={(checked) =>
                      setValue("saveInfo", !!checked)
                    }
                    className="border-gray-300 data-[state=checked]:bg-[var(--color-primary-light)] data-[state=checked]:border-[var(--color-primary-light)]"
                  />
                  <label htmlFor="saveInfo" className="text-sm text-gray-600">
                    Save my name and phone in this browser for the next time.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[var(--color-primary-light)] hover:bg-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? "Sending..." : "Submit Now"}
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
