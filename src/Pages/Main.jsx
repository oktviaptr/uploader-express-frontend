import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SubmitDemo } from "../components/SubmitForm";
import axios from "axios";
import AccessDenied from "../components/AccessDenied";

const Main = () => {
  const [error, setError] = useState(false); // Error state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get("https://drive-express-uploader-backend.vercel.app/")
      .then((response) => {
        console.log(response.data);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Toaster />
      <div className="flex h-screen items-center justify-center">
        {error ? <AccessDenied /> : <SubmitDemo />}
      </div>
    </>
  );
};

export default Main;
