"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Loader2,
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
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, {
    message:
      "Phone number must be a valid 10-digit Indian number starting with 6-9",
  }),
  companyName: z.string().min(1, "Company name is required"),
  cfDoYouHaveShowroomSpace: z.enum(["Yes", "No"], {
    message: "Do You Have Showroom Space is required, select 'Yes' OR 'No'",
  }),
  cfInvestmentCapacity: z.string().min(1),
  email: z.string().email("Invalid email address"),
});

export default function DealerForm({
  productId = "",
  onClose,
  callback = null,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log("first");
  const form = useForm({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: { vehicle_id: productId },
  });
  console.log(form.formState.errors);

  const onSubmit = async (data) => {
    console.log("first");
    setIsSubmitting(true);
    try {
      // API call
      const response = await fetch(
        "https://api.macautoindia.com/v1/kylas/leads",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            state: data.state,
            city: data.city,
            phoneNumber: data.phoneNumber,
            companyName: data.companyName,
            email: data.email,
            cfDoYouHaveShowroomSpace: data.cfDoYouHaveShowroomSpace,
            cfInvestmentCapacity: data.cfInvestmentCapacity,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit enquiry.");
      }

      toast.success("Your enquiry has been submitted successfully.");
      form.reset();
      typeof callback === "function" && callback();
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
    <div>
      <div>
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* <input type="hidden" {...form.register("vehicle_id")} /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-green-600" />
                First Name *
              </label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("firstName")}
              />
              {renderError("firstName")}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-green-600" />
                Last Name *
              </label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("lastName")}
              />
              {renderError("lastName")}
            </div>

            {/* Email */}
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

            {/* Phone & Company */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-green-600" />
                Phone Number *
              </label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="+91 9999999999"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("phoneNumber")}
              />
              {renderError("phoneNumber")}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="companyName"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-green-600" />
                Company Name *
              </label>
              <Input
                id="companyName"
                placeholder="Your company name"
                className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                {...form.register("companyName")}
              />
              {renderError("companyName")}
            </div>

            {/* State & City */}
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

            <div className="space-y-2">
              <label
                htmlFor="cfDoYouHaveShowroomSpace"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Store className="w-4 h-4 text-green-600" />
                Do you have showroom/space? *
              </label>
              <select
                {...form.register("cfDoYouHaveShowroomSpace")}
                className="w-full h-12 border border-gray-200 rounded-md px-4 py-3 focus:border-green-500 focus:ring-green-500 focus:outline-none transition-colors bg-white"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {renderError("cfDoYouHaveShowroomSpace")}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="cfInvestmentCapacity"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <DollarSign className="w-4 h-4 text-green-600" />
                Investment Capacity *
              </label>
              <select
                {...form.register("cfInvestmentCapacity")}
                className="w-full h-12 border border-gray-200 rounded-md px-4 py-3 focus:border-green-500 focus:ring-green-500 focus:outline-none transition-colors bg-white"
              >
                <option value="">Select investment range</option>
                <option value="₹5-10 lakh">₹5-10 lakh</option>
                <option value="₹10-15 lakh">₹10-15 lakh</option>
                <option value="Above ₹15 lakh">Above ₹15 lakh</option>
              </select>
              {renderError("cfInvestmentCapacity")}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Processing Your Request...
              </>
            ) : (
              "Submit Dealer Application"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
