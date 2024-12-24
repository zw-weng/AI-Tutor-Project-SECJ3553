import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Disable built-in bodyParser to handle file uploads
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "uploads");

    // Ensure the uploads directory exists
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }

    const fileChunks = [];

    // Collect file chunks
    req.on("data", (chunk) => {
      fileChunks.push(chunk);
    });

    req.on("end", async () => {
      const fileBuffer = Buffer.concat(fileChunks);
      const filename = req.headers["file-name"];

      // Save the file to the uploads directory
      const fullPath = path.join(filePath, filename);

      try {
        fs.writeFileSync(fullPath, fileBuffer);
        // Simulate sending the file to OpenAI
        console.log(`File sent to OpenAI: ${filename}`);

        res.status(200).json({ message: "File uploaded successfully", filename });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "File upload failed" });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
