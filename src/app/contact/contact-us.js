"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ServicesSection from "./cards";
import Breadcrumb from "@/components/breadcrumb";
import Container from "@mui/material/Container";

/* ===============================
   BACKEND-MATCHED ZOD SCHEMA
================================ */
const contactFormSchema = z.object({
  name: z.string({ required_error: "required*" }).min(1, "Name is required"),

  email: z
    .string({ required_error: "required*" })
    .email("Invalid email address"),

  phone: z
    .string({ required_error: "required*" })
    .regex(/^(?:\+91|91)?[6-9]\d{9}$/, "Enter a valid Indian mobile number"),

  subject: z
    .string({ required_error: "required*" })
    .min(1, "Subject is required"),

  source: z.string().optional(),

  message: z
    .string({ required_error: "required*" })
    .min(1, "Message is required"),
});

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      source: "",
      message: "",
    },
  });

  async function onSubmit(formData) {
    try {
      const response = await fetch(
        "https://n84j51mp-3001.inc1.devtunnels.ms/v1/queries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <Breadcrumb title="Contact us" />

      <ServicesSection />

      <section className="section bg-gray-100">
        <Container maxWidth="xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6 lg:sticky top-20">
              <div className="flex items-center gap-2 text-[var(--color-primary-light)] text-sm font-medium tracking-wide">
                <div className="w-8 h-px bg-[var(--color-primary-light)]"></div>
                Get in Touch with MACK EV Pvt. Ltd.
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Have questions about our products, services, or need support?
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                We’re here to help you every step of the way.
              </p>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Whether you’re looking for detailed information, a business
                inquiry, or technical support — our team is just a message away.
                Fill out the form, and we’ll get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <div className="bg-white shadow-md p-10 rounded-4xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      {...register("name")}
                      className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                        errors.name ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      {...register("email")}
                      className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                        errors.email ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <Input
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

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
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

                {/* Submit */}
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
        </Container>
      </section>

      <div className="w-full h-[450px] overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224393.60584039075!2d77.17756708324724!3d28.505131673756303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7ef32e76bb7%3A0xa7a6ee1e11ce522c!2sMac%20Auto%20India%2C%20a%20leading%20manufacturer%20%26%20Supplier%20of%20Electric%20Rickshaws%2C%20E-Loaders%2C%20and%20E-Scooters!5e0!3m2!1sen!2sin!4v1768193852218!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
