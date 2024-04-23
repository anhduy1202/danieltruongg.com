import { projectType } from "../../../interface/interface";

export const projects: projectType[] = [
  {
    id: 10,
    thumbnail: "/bunnyhacks.png",
    desktop: "/bunnyhacks_desktop.png",
    link: "https://github.com/anhduy1202/bunnyhacks",
    title: "BunnyHacks 2024",
    languages: [
      {
        key: "-1",
        name: "Next.js",
        icon: "/nextjs.svg",
      },
      {
        key: "-2",
        name: "TypeScript",
        icon: "/typescript.svg",
      },
      {
        key: "101",
        name: "TailwindCSS",
        icon: "/tailwind.svg",
      },
    ],
    description: "ACM at CSUF 1-week virtual website hackathon for Spring 2024, animation built using GSAP"
  },
  {
    id: 8,
    thumbnail: "/fullyhacks.png",
    desktop: "/fullyhacks_desktop.png",
    link: "https://github.com/anhduy1202/fullyhacks",
    title: "FullyHacks 2024",
    languages: [
      {
        key: "100",
        name: "Next.js",
        icon: "/nextjs.svg",
      },
      {
        key: "102",
        name: "TypeScript",
        icon: "/typescript.svg",
      },
      {
        key: "101",
        name: "TailwindCSS",
        icon: "/tailwind.svg",
      },
      {
        key: "103",
        name: "Prisma",
        icon: "/prisma.svg",
      },
      {
        key: "104",
        name: "MongoDB",
        icon: "/mongodb.svg",
      },

    ],
    description: "Fullstack hackathon website for CSUF, with application feature, authentication, user poral, user feed, admin portal,..."
  },
  {
    id: 999,
    thumbnail: "/yvcse.png",
    desktop: "/yvcse.png",
    link: "https://github.com/anhduy1202/YVCSE",
    title: "Youtube Video Comment Sentiment Explorer",
    languages: [
      {
        key: "1000",
        name: "Next.js",
        icon: "/nextjs.svg",
      },
      {
        key: "1020",
        name: "JavaScript",
        icon: "/javascript.svg",
      },
      {
        key: "1010",
        name: "TailwindCSS",
        icon: "/tailwind.svg",
      },
      {
        key: "1030",
        name: "Prisma",
        icon: "/prisma.svg",
      },
      {
        key: "1040",
        name: "Python",
        icon: "/python.svg",
      },
      {
        key: "1050",
        name: "FastAPI",
        icon: "/fastapi.svg",
      },

    ],
    description: "Paste a Youtube video URL and get the sentiment of the comments on the video using HumeAI model"
  },
  {
    id: 91,
    thumbnail: "/mcb.png",
    desktop: "/mcb_desktop.png",
    link: "https://github.com/anhduy1202/MyClubBoard",
    title: "MyClubBoard",
    languages: [
      {
        key: "10000",
        name: "Next.js",
        icon: "/nextjs.svg",
      },
      {
        key: "10002",
        name: "TypeScript",
        icon: "/typescript.svg",
      },
      {
        key: "10001",
        name: "TailwindCSS",
        icon: "/tailwind.svg",
      },
      {
        key: "10003",
        name: "Bun",
        icon: "/bun.svg",
      },
      {
        key: "10004",
        name: "PlanetScale",
        icon: "/planetscale.svg",
      },
    ],
    description: "MyClubBoard is a website that help students find and apply for club officer posisitions easily, it also allows club officers to post position and monitor the process smoothly"
  },
  {
    id: 9,
    thumbnail: "/wordcloud.png",
    desktop: "/wordcloud.png",
    link: "https://github.com/anhduy1202/wordcloud-vote",
    title: "WordCloud Vote",
    languages: [
      {
        key: "100",
        name: "Next.js",
        icon: "/nextjs.svg",
      },
      {
        key: "102",
        name: "TypeScript",
        icon: "/typescript.svg",
      },
      {
        key: "101",
        name: "TailwindCSS",
        icon: "/tailwind.svg",
      },
      {
        key: "103",
        name: "Prisma",
        icon: "/prisma.svg",
      },
      {
        key: "104",
        name: "MongoDB",
        icon: "/mongodb.svg",
      },

    ],
    description: "WordCloud Vote is a web-based application that provides a secure, anonymous, and transparent platform for online voting"
  },
  {
    id: 7,
    thumbnail: "/gameboy.png",
    desktop: "/gameboy.png",
    link: "https://github.com/anhduy1202/gameboySimulator",
    title: "Gameboy Simulator",
    languages: [
      {
        key: "99",
        name: "Python",
        icon: "/python.svg",
      },
    ],
    description: "A PyQT desktop application to convert image /webcam to gameboy style applying Computer Vision, image procesing"
  },
  {
    id: 1,
    thumbnail: "/spotify.png",
    desktop: "/spotify_desktop.jpg",
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
    id: 3,
    thumbnail: "/tuffyfood.png",
    desktop: "/tuffyfood_desktop.jpg",
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
    desktop: "/reddat_desktop.jpg",
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
  }
];
