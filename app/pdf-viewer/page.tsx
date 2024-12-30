// app/pdf-viewer/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function PdfViewer() {
  const searchParams = useSearchParams();
  const fileUrl = searchParams.get("fileUrl");

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">PDF Viewer</h1>
      {fileUrl ? (
        <p className="text-center">File URL: {fileUrl}</p>
      ) : (
        <p className="text-center text-red-500">Error: No file URL provided</p>
      )}
    </div>
  );
}
