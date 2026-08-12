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
}

export const projects: Project[] = [
  {
    title: "Selene Shop",
    href: "https://seleneshop.my.id",
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
    href: "https://discord.gg/invite-code",
    title: "Discord",
    subtitle: "Bocah Ronda",
    color: "hover:border-indigo-600",
  },
  {
    href: "https://github.com/Bardan1172",
    title: "Github",
    subtitle: "Repositories",
    color: "hover:border-white",
  },
  {
    href: "https://youtube.com/@bardan1172",
    title: "Youtube",
    subtitle: "Video Content",
    color: "hover:border-red-600",
  },
  {
    href: "https://www.instagram.com/bardan_1172/",
    title: "Instagram",
    subtitle: "Daily Life",
    color: "hover:border-pink-600",
  },
  {
    href: "https://trakteer.id/bardan1172/tip",
    title: "Trakteer",
    subtitle: "Support Me",
    color: "hover:border-yellow-600",
  },
  {
    href: "#",
    title: "Heppy Cloud",
    subtitle: "Cloud Service",
    color: "hover:border-cyan-600",
  },
];
