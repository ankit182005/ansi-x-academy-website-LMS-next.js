"use client";

import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramCard from "@/components/programs/ProgramCard";
import { programs } from "@/data/programsData";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      <ProgramsHero />

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}

        </div>
      </section>

    </div>
  );
}
