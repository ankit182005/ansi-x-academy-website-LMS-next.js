"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockApi } from "@/lib/mockDb";

export default function Register() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    mockApi.register({ email });
    alert("Registered Successfully!");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-8">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Student Registration
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 p-3 rounded bg-gray-800 border border-gray-700"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}
