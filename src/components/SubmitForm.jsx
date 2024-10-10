import React from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../utils/motion";
import toast from "react-hot-toast";

export function SubmitDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const form = document.getElementById('form-submit');
    const file = form.file.files[0]; // Retrieve the uploaded file
    
    if (!file) {
      console.error("No file selected");
      return;
    }
  
    const url =
      "https://script.google.com/macros/s/AKfycby_dDBZAlviHnr4ATbL7qrqdLZG94tHL0RTQyTMYcGa6axV53nL-M5cAbMyHGDl9DAx/exec";
    
    const qs = new URLSearchParams({
      filename: form.filename.value || file.name, // Filename from input or the file name
      mimeType: file.type, // File MIME type
    });
  
    const reader = new FileReader();
    
    reader.onload = (f) => {
      fetch(`${url}?${qs}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...new Int8Array(f.target.result)]), // Upload file data as byte array
      }
      ,form.reset()
    )
        .then((res) => res.json()) // Properly call .json()
        .then((data) => {
          toast.success('File Successfully Uploaded!')
        })
        .catch((error) => toast.error(error));
    };
  
    reader.readAsArrayBuffer(file); // Read file as array buffer
  };
  

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Ryan's Drive Uploader Express
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Drop file here to upload it to Google Drive
      </p>
      <form className="my-6" onSubmit={handleSubmit} id="form-submit">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Filename</Label>
          <Input
            id="email"
            placeholder="Name for your file"
            type="text"
            name="filename"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">File</Label>
          <Input placeholder="File goes here" type="file" name="file" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Upload &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
