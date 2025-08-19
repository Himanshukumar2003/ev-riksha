"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Loader2,
  Send,
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Store,
  DollarSign,
  X,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const enquiryFormSchema = z.object({
  vehicle_id: z.string().min(1, { message: "Vehicle ID is required." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  company: z.string().min(2, { message: "Company name is required." }),
  state: z.string().min(1, { message: "State is required." }),
  city: z.string().min(1, { message: "City is required." }),
  showroom: z.string().min(1, { message: "Please select an option." }),
  investment: z
    .string()
    .min(1, { message: "Please select your investment capacity." }),
});

export default function DealerForm({ productId = "", onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      vehicle_id: productId,
      name: "",
      email: "",
      phone: "",
      company: "",
      state: "",
      city: "",
      showroom: "",
      investment: "",
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
      <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
        {form.formState.errors[field]?.message}
      </p>
    );

  return (
    <div className="">
      <div className="">
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div className=" ">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <input type="hidden" {...form.register("vehicle_id")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-green-600" />
                Full Name *
              </label>
              <Input
                id="name"
                placeholder="Enter your full name"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("name")}
              />
              {renderError("name")}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-green-600" />
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("email")}
              />
              {renderError("email")}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-green-600" />
                Phone Number *
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 9876543210"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("phone")}
              />
              {renderError("phone")}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-green-600" />
                Company Name *
              </label>
              <Input
                id="company"
                placeholder="Your company name"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("company")}
              />
              {renderError("company")}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="state"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-green-600" />
                Select State *
              </label>
              <Input
                id="state"
                placeholder="Enter your state"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("state")}
              />
              {renderError("state")}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-green-600" />
                Select City *
              </label>
              <Input
                id="city"
                placeholder="Enter your city"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("city")}
              />
              {renderError("city")}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="showroom"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Store className="w-4 h-4 text-green-600" />
                Do you have showroom/space? *
              </label>
              <select
                {...form.register("showroom")}
                className="w-full h-12 border border-gray-200 rounded-md px-4 py-3 focus:border-green-500 focus:ring-green-500 focus:outline-none transition-colors bg-white"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes, I have a showroom/space</option>
                <option value="No">No, I need assistance finding space</option>
              </select>
              {renderError("showroom")}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="investment"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <DollarSign className="w-4 h-4 text-green-600" />
                Investment Capacity *
              </label>
              <select
                {...form.register("investment")}
                className="w-full h-12 border border-gray-200 rounded-md px-4 py-3 focus:border-green-500 focus:ring-green-500 focus:outline-none transition-colors bg-white"
              >
                <option value="">Select investment range</option>
                <option value="₹5-10 lakh">₹5-10 lakh</option>
                <option value="₹10-15 lakh">₹10-15 lakh</option>
                <option value="Above ₹15 lakh">Above ₹15 lakh</option>
              </select>
              {renderError("investment")}
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="btn">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                Processing Your Request...
              </>
            ) : (
              <>
                {/* <Send className="mr-3 h-6 w-6" /> */}
                Submit Dealer Application
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
