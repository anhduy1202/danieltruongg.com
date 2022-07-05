import { StaticImageData } from "next/image";

export interface navLink {
  title: string;
  href: string;
}

export type languageType = {
  name: string;
  icon: string;
};

export interface projectType {
  id: number;
  thumbnail: string;
  link: string;
  title: string;
  languages: languageType[];
  description: string;
}
