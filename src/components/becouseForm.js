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
  company: z.string().min(2, { message: "Company name is required." }),
  state: z.string().min(1, { message: "State is required." }),
  city: z.string().min(1, { message: "City is required." }),
  enquiryFor: z.string().min(1, { message: "Product is required." }),
  become: z.string().min(1, { message: "Selection is required." }),
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
      company: "",
      state: "",
      city: "",
      enquiryFor: "",
      become: "",
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
        "https://macapi.brandingwaale.com/v1/enquiries",
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
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] text-white px-6 py-2 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105"
      >
        Become a Dealer
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 bg-white border border-gray-200 max-h-[90vh] overflow-y-auto">
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

          {/* Scrollable Form Body */}
          <div className="p-8">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <input type="hidden" {...form.register("vehicle_id")} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name">Full Name *</label>
                  <Input
                    id="name"
                    {...form.register("name")}
                    placeholder="Enter your full name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email">Email Address *</label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="your.email@company.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone">Phone Number *</label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    placeholder="+91 9876543210"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="quantity">Quantity Required *</label>
                  <Input
                    id="quantity"
                    type="number"
                    min={1}
                    {...form.register("quantity")}
                  />
                  {form.formState.errors.quantity && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.quantity.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company">Company Name *</label>
                  <Input id="company" {...form.register("company")} />
                  {form.formState.errors.company && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.company.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="become">Become a? *</label>
                  <select
                    {...form.register("become")}
                    className="w-full border border-gray-300 rounded-md"
                  >
                    <option value="">Select</option>
                    <option value="Dealer">Dealer</option>
                    <option value="Government Supply">Government Supply</option>
                    <option value="Business Use">Business Use</option>
                  </select>
                  {form.formState.errors.become && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.become.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="state">Select State *</label>
                  <Input id="state" {...form.register("state")} />
                  {form.formState.errors.state && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.state.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="city">Select City *</label>
                  <Input id="city" {...form.register("city")} />
                  {form.formState.errors.city && (
                    <p className="text-sm text-red-600">
                      {form.formState.errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="enquiryFor">Product Enquiring For *</label>
                <select
                  {...form.register("enquiryFor")}
                  className="w-full border border-gray-300 rounded-md"
                >
                  <option value="">Select</option>
                  <option value="E-Rickshaw">E-Rickshaw</option>
                  <option value="E-Vending-Cart">E-Vending-Cart</option>
                  <option value="E-Loader">E-Loader</option>
                  <option value="E-Cart For Garbage">E-Cart For Garbage</option>
                </select>
                {form.formState.errors.enquiryFor && (
                  <p className="text-sm text-red-600">
                    {form.formState.errors.enquiryFor.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message">Additional Requirements</label>
                <Textarea
                  id="message"
                  rows={4}
                  {...form.register("message")}
                  placeholder="Any extra details..."
                />
              </div>

              <Separator />

              <div className="text-sm text-gray-600">
                <p>* Required fields</p>
                <p className="mt-1">
                  We respect your privacy and will never share your information.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 rounded-md text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing
                    Request...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" /> Submit Professional
                    Enquiry
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
