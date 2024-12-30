"use client";
import React from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  onUploadSuccess: (fileUrl: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUploadSuccess }) => {
  return (
    <div className="mt-6 border-dashed border-2 rounded-xl bg-gray-50 py-8 flex justify-center items-center flex-col hover:shadow-md transition-shadow duration-300 ease-in-out">
      <UploadDropzone<OurFileRouter>
        endpoint="pdfUploader"
        onClientUploadComplete={(res) => {
          const fileKey = res[0]?.fileKey || "";
          const fileUrl = `https://utfs.io/f/${fileKey}`;
          console.log("Uploaded file URL:", fileUrl);
          onUploadSuccess(fileUrl);
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
