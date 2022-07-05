
export interface navLink {
  title: string;
  href: string;
}

export type languageType = {
  key: string,
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
