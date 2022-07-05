import Spotify from "../../../images/spotify.png";
import Python from "../../../images/icon/python.svg";
import Pandas from "../../../images/icon/pandas.svg";
import { projectType } from "../../../interface/interface";

export const projects: projectType[] = [
  {
    id: 1,
    thumbnail: Spotify,
    title: "Songs Recommendation System",
    languages: [
      {
        name: "Python",
        icon: Python
      },
      {
        name: "Pandas",
        icon: Pandas
      }
    ],
    description:
      "A Data Science and Machine Learning project for my Summer 2022 research to analyze Spotify hot songs from 2017 to 2022, and a recommendation system that suggest songs based on personal playlist",
  },
];
