"use client";

import { useAuth } from "@/context/AuthContext";
import { mockApi } from "@/lib/mockDb";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function CoursePlayer() {
  const { slug } = useParams();
  const { user } = useAuth();

  if (!slug) return null;

  const modules = [
    "Introduction",
    "Project Setup",
    "Frontend",
    "Backend",
    "Deployment"
  ];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (user) {
      const saved = mockApi.getProgress(user.email, slug);
      setProgress(saved);
    }
  }, [user, slug]);

  const completeModule = () => {
    const newProgress = Math.min(progress + 20, 100);
    setProgress(newProgress);
    mockApi.updateProgress(user.email, slug, newProgress);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 capitalize">
        {slug.replaceAll("-", " ")}
      </h1>

      <div className="w-full bg-gray-800 h-3 rounded mb-6">
        <div
          className="bg-blue-600 h-3 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mb-6 text-gray-400">
        Progress: {progress}%
      </p>

      <button
        onClick={completeModule}
        className="bg-green-600 px-6 py-3 rounded hover:bg-green-700"
      >
        Complete Next Module
      </button>
    </div>
  );
}
