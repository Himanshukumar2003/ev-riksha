"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Send, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

// Schema
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
  message: z.string().optional(),
});

export default function EnquiryFormData({ productId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      vehicle_id: productId,
      quantity: 1,
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    form.reset();
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://hjv2pvkv-3001.inc1.devtunnels.ms/v1/enquiries",
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
      handleClose();
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

  return (
    <>
      <Button className="btn" onClick={() => setIsOpen(true)}>
        Make an Enquiry
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 bg-white border border-gray-200">
          <div className="bg-slate-800 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl font-semibold">
                    Professional Vehicle Enquiry
                  </DialogTitle>
                  <DialogDescription className="text-slate-300 mt-1">
                    Trusted by thousands of customers worldwide
                  </DialogDescription>
                </div>
              </div>
              <Badge className="bg-green-600 text-white">Secure</Badge>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
              <div className="flex items-center gap-2 text-blue-800">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Why choose us?</span>
              </div>
              <p className="text-blue-700 mt-1 text-sm">
                24/7 support • Best prices guaranteed • Instant response
              </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <input type="hidden" {...form.register("vehicle_id")} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-gray-700 font-semibold text-sm uppercase tracking-wide"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    {...form.register("name")}
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                    placeholder="Enter your full name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-semibold text-sm uppercase tracking-wide"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                    placeholder="your.email@company.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-gray-700 font-semibold text-sm uppercase tracking-wide"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                    placeholder="+1 (555) 123-4567"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="quantity"
                    className="text-gray-700 font-semibold text-sm uppercase tracking-wide"
                  >
                    Quantity Required *
                  </label>
                  <Input
                    id="quantity"
                    type="number"
                    min={1}
                    {...form.register("quantity")}
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                  />
                  {form.formState.errors.quantity && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {form.formState.errors.quantity.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-gray-700 font-semibold text-sm uppercase tracking-wide"
                >
                  Additional Requirements
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  {...form.register("message")}
                  className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md resize-none"
                  placeholder="Please provide any specific requirements, preferred delivery date, or additional information..."
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between pt-4">
                <div className="text-sm text-gray-600">
                  <p>* Required fields</p>
                  <p className="mt-1">
                    We respect your privacy and will never share your
                    information.
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 rounded-md text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing Request...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Professional Enquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
