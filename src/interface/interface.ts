import { StaticImageData } from "next/image";

export interface navLink {
  title: string;
  href: string;
}

type languageType = {
  name: string;
  icon: StaticImageData;
};

export interface projectType {
  id: number;
  thumbnail: StaticImageData;
  title: string;
  languages: languageType[];
  description: string;
}
