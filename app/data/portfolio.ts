export const profile = {
  name: "Altra Caeltharion",
  intro:
    "Every idea is an opportunity to create something great. I focus on building scalable, fast, and impactful web applications.",
};

export const skills = ["Next.js", "React.js", "Tailwind", "Node.js"];

export interface Project {
  title: string;
  href: string;
  description: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Selene Shop",
    href: "https://seleneshop.my.id",
    image: "/foto/seleneshop.png",
    description:
      "Platform belanja online dengan pengalaman pengguna modern dan cepat. Jelajahi koleksi produk terbaru.",
  },
];

export interface SocialLink {
  href: string;
  title: string;
  subtitle: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "#",
    title: "Send Transmission",
    subtitle: "Contact",
    color: "hover:border-violet-600",
  },
  {
    href: "#",
    title: "Public Log / Comments",
    subtitle: "Feedback",
    color: "hover:border-emerald-600",
  },
  {
    href: "https://discord.gg/invite-code",
    title: "Social Connection",
    subtitle: "Discord",
    color: "hover:border-indigo-600",
  },
];
