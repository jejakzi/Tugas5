import React, { useState } from "react";
import { toast } from "react-toastify";

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Login Berhasil!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#293647] p-6 rounded-2xl shadow-lg w-full max-w-sm relative">
        <h2 className="mt-6 mb-2 text-3xl font-bold text-center">Login</h2>
        <p className="mb-8 text-sm font-light tracking-wide text-center">
          Silakan masukan email dan password anda!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 bg-transparent border rounded-lg outline-none border-white/20"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 bg-transparent border rounded-lg outline-none border-white/20"
          />
          <button className="py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </form>
        <button
          className="absolute text-2xl text-red-500 top-4 right-5"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;
