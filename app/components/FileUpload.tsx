"use client"; // Mark this component as a client component
import React, { useState } from "react";
import { Inbox } from "lucide-react";
import { UploadDropzone } from "@/lib/uploadthing";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

const FileUpload: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  return (
    <div className="mt-6 border-dashed border-2 rounded-xl bg-gray-50 py-8 flex justify-center items-center flex-col hover:shadow-md transition-shadow duration-300 ease-in-out">
        <UploadDropzone<OurFileRouter>
          endpoint="pdfUploader" // Match the routeSlug for your PDF uploads
          onClientUploadComplete={(res) => {
            setPdfUrl(res[0]?.fileUrl || null); // Set the uploaded PDF URL
            console.log("Uploaded files:", res);
            alert("Upload Completed");
          }}
          onUploadError={(error) => {
            console.error("Upload error:", error);
            alert(`ERROR! ${error.message}`);
          }}
        />
    </div>
  );
};

export default FileUpload;
