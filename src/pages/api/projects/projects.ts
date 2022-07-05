import { projectType } from "../../../interface/interface";

export const projects: projectType[] = [
  {
    id: 1,
    thumbnail: "/spotify.png",
    link: "https://github.com/anhduy1202/Spotify-Recommendation-Systems",
    title: "Songs Recommendation System",
    languages: [
      {
        key: "11",
        name: "Python",
        icon: "/python.svg",
      },
      {
        key: "12",
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
        key: "21",
        name: "MySQL",
        icon: "/mysql.svg",
      },
    ],
    description:
      "A MySQL Database for a job freelancing website that helps freelancing developers finding the appropriate client and get paid for their services",
  },
  {
    id: 3,
    thumbnail: "/tuffyfood.png",
    link: "https://github.com/anhduy1202/TuffyFood",
    title: "Tuffy Food",
    languages: [
      {
        key: "31",
        name: "Swift",
        icon: "/swift.svg",
      },
    ],
    description:
      "An IOS food view app built with Swift, Swift Storyboard that helps CSUF students check out and submit reviews for food places at CSUF",
  },
  {
    id: 4,
    thumbnail: "/reddat.png",
    link: "https://github.com/anhduy1202/Not-Reddit",
    title: "Reddat",
    languages: [
      {
        key: "41",
        name: "React",
        icon: "/react.svg",
      },
      {
        key: "42",
        name: "NodeJS",
        icon: "/nodejs.svg",
      },
      {
        key: "43",
        name: "Socket.io",
        icon: "/socketio.svg",
      },
      {
        key: "44",
        name: "MongoDB",
        icon: "/mongodb.svg",
      },
    ],
    description:
      "A mobile web social media inspired by Reddit with features such as feeds, news, upload posts, upvote, downvote, comment, chat, follow, ranking,...",
  },
  {
    id: 5,
    thumbnail: "/gitreadme.png",
    link: "https://github.com/anhduy1202/Git-Readme",
    title: "Git Readme",
    languages: [
      {
        key: "51",
        name: "React",
        icon: "/react.svg",
      },
    ],
    description:
      "A website that helps Github user customize their Readme easier by copy-pasting codes from website to embedd badges, stats, ..f",
  },
  {
    id: 6,
    thumbnail: "/betterttt.png",
    link: "https://github.com/anhduy1202/better-tic-tac-toe-client",
    title: "Better Tic-Tac-Toe",
    languages: [
      {
        key: "61",
        name: "React",
        icon: "/react.svg",
      },
      {
        key: "62",
        name: "NodeJS",
        icon: "/nodejs.svg",
      },
      {
        key: "63",
        name: "Socket.io",
        icon: "/socketio.svg",
      },
      {
        key: "64",
        name: "Firebase",
        icon: "/firebase.svg",
      },
    ],
    description:
      "A tic-tac-toe multiplayer website that allows users to create their personal room, join other rooms and compete with each other",
  },
];
