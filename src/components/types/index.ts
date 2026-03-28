import type { ReactNode } from "react";

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  status?: string;
  highlight?: string;
  link?: string;
  image?: string;
  bullets?: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: ReactNode;
};

export type ProfileCard = {
  iconKey: "server" | "database" | "code" | "briefcase";
  title: string;
  text: string;
};