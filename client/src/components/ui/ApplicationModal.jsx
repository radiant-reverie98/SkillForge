import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ApplicationModal({ open, onOpenChange }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [dateApplied, setDateApplied] = useState("");
  const [notes, setNotes] = useState("");

  const resetForm = () => {
    setCompany("");
    setRole("");
    setStatus("Applied");
    setDateApplied("");
    setNotes("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company.trim() || !role.trim()) {
      alert("Company and Role are required");
      return;
    }

    const application = {
      company,
      role,
      status,
      dateApplied,
      notes,
      createdAt: new Date().toISOString(),
    };

    console.log("New Application:", application);

    resetForm();
    onOpenChange(false);
  };

  const handleCancel = () => {
    resetForm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#111] border-gray-800 text-gray-100 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Add New Application
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Track a new job application to your dashboard
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            {/* Company */}
            <div className="space-y-2">
              <Label className="text-gray-300">
                Company Name <span className="text-red-500">*</span>
              </Label>
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Google, Amazon"
                className="bg-[#0a0a0a] border-gray-800 text-gray-100"
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label className="text-gray-300">
                Role <span className="text-red-500">*</span>
              </Label>
              <Input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Software Engineer"
                className="bg-[#0a0a0a] border-gray-800 text-gray-100"
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label className="text-gray-300">Application Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="bg-[#0a0a0a] border-gray-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#111] border-gray-800">
                  <SelectItem value="Applied">Applied</SelectItem>
                  <SelectItem value="OA Pending">OA Pending</SelectItem>
                  <SelectItem value="Interview">Interview</SelectItem>
                  <SelectItem value="Offer">Offer</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label className="text-gray-300">Date Applied</Label>
              <Input
                type="date"
                value={dateApplied}
                onChange={(e) => setDateApplied(e.target.value)}
                className="bg-[#0a0a0a] border-gray-800 text-gray-100"
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label className="text-gray-300">Notes (Optional)</Label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional notes..."
                className="bg-[#0a0a0a] border-gray-800 text-gray-100 min-h-[100px]"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="border-gray-700 text-gray-300 bg-transparent hover:bg-gray-900"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
              Add Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
