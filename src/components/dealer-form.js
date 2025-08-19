"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const enquiryFormSchema = z.object({
  vehicle_id: z.string().min(1, { message: "Vehicle ID is required." }),
  quantity: z.preprocess(
    (val) => Number(val),
    z.number().min(1, { message: "Quantity must be at least 1." })
  ),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  company: z.string().min(2, { message: "Company name is required." }),
  state: z.string().min(1, { message: "State is required." }),
  city: z.string().min(1, { message: "City is required." }),
  become: z.string().min(1, { message: "Selection is required." }),
  showroom: z.string().min(1, { message: "Please select an option." }),
  investment: z
    .string()
    .min(1, { message: "Please select your investment capacity." }),
  message: z.string().optional(),
});

export default function DealerForm({ productId = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      vehicle_id: productId,
      quantity: 1,
      name: "",
      email: "",
      phone: "",
      company: "",
      state: "",
      city: "",
      become: "",
      showroom: "",
      investment: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://api.macautoindia.com/v1/enquiries",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit enquiry.");
      }

      toast.success("Your enquiry has been submitted successfully.");
      form.reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Submission failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (field) =>
    form.formState.errors[field] && (
      <p className="text-sm text-red-600">
        {form.formState.errors[field]?.message}
      </p>
    );

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <input type="hidden" {...form.register("vehicle_id")} />

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name">Full Name *</label>
          <Input
            id="name"
            placeholder="Enter your full name"
            {...form.register("name")}
          />
          {renderError("name")}
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email Address *</label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@company.com"
            {...form.register("email")}
          />
          {renderError("email")}
        </div>
      </div>

      {/* Phone & Quantity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone">Phone Number *</label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 9876543210"
            {...form.register("phone")}
          />
          {renderError("phone")}
        </div>

        <div className="space-y-2">
          <label htmlFor="quantity">Quantity Required *</label>
          <Input
            id="quantity"
            type="number"
            min={1}
            {...form.register("quantity")}
          />
          {renderError("quantity")}
        </div>
      </div>

      {/* Company & Become */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company">Company Name *</label>
          <Input id="company" {...form.register("company")} />
          {renderError("company")}
        </div>

        <div className="space-y-2">
          <label htmlFor="become">Become a? *</label>
          <select
            {...form.register("become")}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">Select</option>
            <option value="Dealer">Dealer</option>
            <option value="Government Supply">Government Supply</option>
            <option value="Business Use">Business Use</option>
          </select>
          {renderError("become")}
        </div>
      </div>

      {/* State & City */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="state">Select State *</label>
          <Input id="state" {...form.register("state")} />
          {renderError("state")}
        </div>

        <div className="space-y-2">
          <label htmlFor="city">Select City *</label>
          <Input id="city" {...form.register("city")} />
          {renderError("city")}
        </div>
      </div>

      {/* Showroom & Investment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="showroom">Do you have showroom/space? *</label>
          <select
            {...form.register("showroom")}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {renderError("showroom")}
        </div>

        <div className="space-y-2">
          <label htmlFor="investment">Investment Capacity *</label>
          <select
            {...form.register("investment")}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">Select</option>
            <option value="₹5-10 lakh">₹5-10 lakh</option>
            <option value="₹10-15 lakh">₹10-15 lakh</option>
            <option value="Above ₹15 lakh">Above ₹15 lakh</option>
          </select>
          {renderError("investment")}
        </div>
      </div>

      {/* Product Enquiring For */}

      {/* Additional Message */}
      <div className="space-y-2">
        <label htmlFor="message">Additional Requirements</label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Any extra details..."
          {...form.register("message")}
        />
      </div>

      <Separator />

      <div className="text-sm text-gray-600">
        <p>* Required fields</p>
        <p className="mt-1">
          We respect your privacy and will never share your information.
        </p>
      </div>

      <Button type="submit" className="w-full  btn" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing
            Request...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" /> Submit Professional Enquiry
          </>
        )}
      </Button>
    </form>
  );
}
