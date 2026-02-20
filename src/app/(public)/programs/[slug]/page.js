"use client";

import { useParams } from "next/navigation";
import { programs } from "@/data/programsData";
import ProgramDetailHero from "@/components/programs/ProgramDetailHero";
import CurriculumSection from "@/components/programs/CurriculumSection";

export default function ProgramDetailPage() {
  const params = useParams();
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Program not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <ProgramDetailHero program={program} />

      <CurriculumSection program={program} />

      {/* Enrollment CTA */}
      <section className="py-24 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Journey Today
        </h2>

        <p className="text-gray-400 mb-8">
          Join ANSI-X and build real-world SaaS applications.
        </p>

        <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Enroll Now
        </button>
      </section>

    </div>
  );
}
