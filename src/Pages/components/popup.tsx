import { useState, useEffect } from "react";
import { X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function BusinessPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenBusinessPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenBusinessPopup", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl p-6 w-80 shadow-2xl text-center">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-black"
          onClick={handleClose}
        >
          <X size={18} />
        </button>

        <img src={logo} alt="Logo" width={60} className="mx-auto mb-4" />

        <h2 className="font-semibold text-xl text-black mb-2 font-graffiti">
          Explore & Learn
        </h2>

        <p className="text-sm text-gray-500 mb-5">
          Want to style better or shop smarter? Visit our{" "}
          <span className="text-green-500 font-bold">Blog</span> for fashion tips,
          or check our{" "}
          <span className="text-black font-medium">Size Guide</span> to find your
          perfect fit!
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/blog"
            className="bg-green-800 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
          >
            Visit Blog
          </Link>

          <button
            className="mt-2 text-sm text-gray-500 hover:text-gray-700 underline"
            onClick={handleClose}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}