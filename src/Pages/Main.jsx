import React from "react";
import { Toaster } from "react-hot-toast";
import { SubmitDemo } from "../components/SubmitForm";
const Main = () => {
  return (
    <>
      <Toaster />
      <div className="flex h-screen items-center justify-center">
        <SubmitDemo />
      </div>
    </>
  );
};

export default Main;
