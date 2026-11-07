
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
     const year = await getCurrentYear();
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm flex items-center gap-1">
          © {year} {personalInfo.name}. Built with
          <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js
        </p>
        <div className="flex gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}