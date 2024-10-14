import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SubmitDemo } from "../components/SubmitForm";
import axios from "axios";
import AccessDenied from "../components/AccessDenied";
import SpotlightPreview from "../components/SpotlightPreview";

const Main = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get("https://backend-express-uploader.vercel.app/")
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
      {error ? (
        <div className="flex h-screen items-center justify-center">
          <AccessDenied />
        </div>
      ) : (
        <SpotlightPreview>
          <Toaster />
          <div className="flex h-screen items-center justify-center">
            <SubmitDemo />
          </div>
        </SpotlightPreview>
      )}
    </>
  );
};

export default Main;
