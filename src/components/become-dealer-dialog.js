"use client";

import { useState } from "react";
import { Shield } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import DealerForm from "./dealer-form";

// Schema

export default function BecomeDealerDialog({ isOpen, setIsOpen }) {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 bg-white border border-gray-200 max-h-[90vh] overflow-y-auto">
          <div className="nav-header p-6 text-white">
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
            </div>
          </div>

          {/* Scrollable Form Body */}
          <div className="p-8">
            <DealerForm />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
