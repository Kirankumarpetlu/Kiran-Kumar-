import { createFileRoute } from "@tanstack/react-router";
import { NeuralBackground } from "@/components/portfolio/neural-bg";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kiran Kumar — Data / ML / AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Kiran Kumar — Data, ML, and AI Engineer specializing in intelligent automation frameworks, optimization pipelines, agentic AI systems, and LLM orchestration.",
      },
      { property: "og:title", content: "Kiran Kumar — Data / ML / AI Engineer" },
      {
        property: "og:description",
        content:
          "Cinematic modern portfolio: autonomous agent systems, fine-tuning infrastructure, data analytics pipelines, and secure AI deployments.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <NeuralBackground />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
