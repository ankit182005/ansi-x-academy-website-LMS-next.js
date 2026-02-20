"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Student Name");
  const [email, setEmail] = useState(user?.email || "student@email.com");

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="relative">
        {/* Glow */}
        <div className="absolute w-80 h-80 bg-blue-600 blur-3xl opacity-10 -top-10 left-20"></div>

        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl max-w-3xl">

          {/* Avatar */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
              {name.charAt(0)}
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                {name}
              </h2>
              <p className="text-gray-400 text-sm">
                {email}
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="space-y-6">

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Full Name
              </label>

              <input
                type="text"
                disabled={!isEditing}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-3 rounded-lg bg-gray-800 border border-gray-700 ${
                  !isEditing && "opacity-70"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>

              <input
                type="email"
                disabled
                value={email}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 opacity-70"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition"
                >
                  Save Changes
                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
