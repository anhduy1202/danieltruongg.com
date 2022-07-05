import { projectType } from "../../../interface/interface";

export const projects: projectType[] = [
  {
    id: 1,
    thumbnail: "/spotify.png",
    link: "https://github.com/anhduy1202/Spotify-Recommendation-Systems",
    title: "Songs Recommendation System",
    languages: [
      {
        name: "Python",
        icon: "/python.svg",
      },
      {
        name: "Pandas",
        icon: "/pandas.svg",
      },
    ],
    description:
      "A Data Science and Machine Learning project for my Summer 2022 research to analyze Spotify hot songs from 2017 to 2022, and a recommendation system that suggest songs based on personal playlist",
  },
  {
    id: 2,
    thumbnail: "/devwork.png",
    link: "",
    title: "DevWork",
    languages: [
      {
        name: "MySQL",
        icon: "/mysql.svg",
      },
    ],
    description:
      "A MySQL Database for a job freelancing website that helps freelancing developers finding the appropriate client and get paid for their services",
  },
];
