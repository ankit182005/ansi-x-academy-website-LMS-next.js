"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { mockApi } from "@/lib/mockDb";
import Link from "next/link";

export default function MyCourses() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (user) {
      const enrolled = mockApi.getEnrolledCourses(user.email);
      setCourses(enrolled);
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">
        My Courses
      </h1>

     {courses.length === 0 && (
  <div className="text-center py-20">
    <h3 className="text-xl font-semibold mb-4">
      No Courses Yet
    </h3>
    <p className="text-gray-400 mb-6">
      Explore programs and start learning today.
    </p>
    <Link
      href="/programs"
      className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
    >
      Browse Programs
    </Link>
  </div>
)}


      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4">
              {course.title}
            </h3>

            <Link
              href={`/dashboard/my-courses/${course.slug}`}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Continue Learning
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
