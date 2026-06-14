import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker,
  FaBrain,
  FaGitAlt,
  FaRobot,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiVercel,
  SiR,
  SiLangchain,
  SiOpenai,
  SiFlutter,
  SiKotlin,
  SiTensorflow,
  SiAmazondynamodb,
  SiRender,
} from "react-icons/si";

import p2pImg from "../assets/projects/p2p-rescuenet2.png";
import aranyamImg from "../assets/projects/aranyam.png";
import audioConverterImg from "../assets/projects/audio-converter.png";
import graceAiImg from "../assets/projects/grace-ai.png";
import snakeGameImg from "../assets/projects/snake-game.png";
import portfolioImg from "../assets/projects/portfolio.png";

export const Bio = {
  name: "Laxman Sunkari",
  roles: [
    "AI Engineer",
    "AI Application Developer ",
    " JAVA Devloper ",
    "AI Enthusiast",
  ],
  description:
    "I am a B.Tech Data Science student passionate about building modern web applications, AI-driven solutions, and immersive digital experiences. I enjoy solving real-world problems using clean, scalable, and user-focused software.",
  github: "https://github.com/LAXMANSHELBY",
  resume:"/RenderCV_EngineeringResumes_Theme (6).pdf",

  linkedin: "https://www.linkedin.com/in/laxmansunkari-2702eren",
  twitter: "https://x.com/Sakiji89897",
  insta: "https://www.instagram.com/laxman.balu_7?igsh=MXR1ejlycnl2bnkyMg==",
};
export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: SiMysql },
      { name: "JavaScript", icon: SiJavascript },
      { name: "R", icon: SiR },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "AI / Data Science",
    skills: [
      { name: "Machine Learning", icon: FaBrain },
      { name: "Generative AI", icon: SiOpenai },
      { name: "LangChain", icon: SiLangchain },
      { name: "CrewAI", icon: FaRobot },
    ],
  },
  {
    title: "Mobile / Cloud",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Kotlin", icon: SiKotlin },
      { name: "TensorFlow Lite", icon: SiTensorflow },
      { name: "AWS DynamoDB", icon: SiAmazondynamodb },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "VS Code", icon: FaCode },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];
export const experiences = [
  {
    id: 0,
    img: "",
    role: "Freelance Web Developer",
    company: "Aranyam Restaurant (Client Engagement)",
    date: "May 2026 – Present",
    location: "Telangana, India",
    bullets: [
      "Designed and deployed the official live website for Aranyam, a 3-location restaurant chain, using React, Vite, and Tailwind CSS; the build was successfully adopted as their primary digital site.",
      "Delivered a high-performance, mobile-responsive UI that significantly increased brand visibility, resulting in a direct offer from the client to architect their official Android catering and food-ordering application (negotiations and technical pipeline discussions ongoing).",
    ],
    skills: ["React", "Vite", "Tailwind CSS", "Responsive UI", "Client Delivery"],
  },
  {
    id: 1,
    img: "",
    role: "AI Intern",
    company: "Summer of AI – Government of India & Swecha.org",
    date: "2024",
    desc: "Worked on AI-driven problem solving, data analysis, and open-source initiatives under a government-backed AI internship program.",
    skills: ["Python", "AI", "Data Analysis", "Open Source"],
  },
];
export const education = [
  {
    id: 0,
    img: "",
    school: "Vignana Bharathi Institute of Technology, Hyderabad",
    date: "2023 – 2027",
    grade: "CGPA: 7.7",
    desc: "B.Tech in Data Science with focus on software development, machine learning, and data analytics.",
    degree: "Bachelor of Technology – Data Science",
  },
  {
    id: 1,
    img: "",
    school: "Narayana IIT Academy, Koheda",
    date: "2021 – 2023",
    grade: "Grade: 9.0",
    desc: "Intermediate education with strong foundation in mathematics and science.",
    degree: "Intermediate",
  },
  {
    id: 2,
    img: "",
    school: "Vani Secondary School",
    date: "2021",
    grade: "Grade: 9.8",
    desc: "Secondary School education.",
    degree: "SSC",
  },
];
export const projects = [
  {
    id: 0,
    title: "P2PRescueNet – AI Driven Disaster Communication App",
    date: "2026",
    description:
      "Decentralized disaster communication app using Wi-Fi Direct mesh networking, reinforcement learning routing, and AWS DynamoDB for SOS persistence.",
    image: p2pImg,
    imageLayout: "vertical",
    tags: ["Flutter", "Kotlin", "Reinforcement Learning", "Mesh", "AWS DynamoDB"],
    category: "android app",
    downloadUrl:
      "https://drive.google.com/file/d/1RkmpTbfZ0PYetVKWzZfIxAjxUAIlftDd/view?usp=share_link",
    downloadLabel: "Download App",
    github: "https://github.com/LAXMANSHELBY/P2PRESCUENET",
  },
  {
    id: 1,
    title: "Aranyam",
    date: "2025",
    description:
      "A premium, highly immersive website built for a luxury jungle-themed restaurant, featuring elegant visual components, interactive menus, and seamless reservation booking.",
    image: aranyamImg,
    imageLayout: "wide",
    tags: ["React", "Vite", "Tailwind CSS", "Responsive UI"],
    category: "web app",
    webapp: "https://project1-aranyam.vercel.app/",
    webappLabel: "Live Preview",
   
  },
  {
    id: 2,
    title: "Audio Format Converter",
    date: "2024",
    description:
      "Python-based audio format converter using PyDub and FFmpeg with a clean web interface for fast file conversion.",
    image: audioConverterImg,
    imageLayout: "standard",
    tags: ["Python", "PyDub", "FFmpeg", "HTML", "CSS", "JavaScript"],
    category: "web app",
    webapp: "https://grace-audio.vercel.app/",
    webappLabel: "Live Demo",
    github: "https://github.com/LAXMANSHELBY/grace-audio-converter",
  },
  {
    id: 3,
    title: "Grace – Offline AI Voice Assistant",
    date: "2025",
    description:
      "Offline AI voice assistant with wake-word detection, local LLM integration, and multi-agent desktop automation via LangChain, Ollama, and CrewAI.",
    image: graceAiImg,
    imageLayout: "standard",
    tags: ["Python", "Vosk", "LangChain", "Ollama", "CrewAI", "Automation"],
    category: "machine learning",
    github: "https://github.com/LAXMANSHELBY/grace-audio-converter",
  },
  {
    id: 4,
    title: "Snake Game",
    date: "2024",
    description:
      "Classic Snake Game in Java with Swing GUI — smooth controls, score tracking, and dynamic gameplay.",
    image: snakeGameImg,
    imageLayout: "standard",
    tags: ["Java", "Swing", "OOP"],
    category: "web app",
    github: "https://github.com/LAXMANSHELBY/snake-game-java",
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    date: "2025",
    description:
      "Modern 3D portfolio built with React.js and styled-components, showcasing projects, skills, and certifications with smooth animations.",
    image: portfolioImg,
    imageLayout: "wide",
    tags: ["React.js", "Styled Components", "Three.js", "EmailJS"],
    category: "web app",
    webapp: "https://laxmans-portfolio-l7s7.vercel.app",
    webappLabel: "Live Demo",
    github: "https://github.com/LAXMANSHELBY/Myportfolio",
  },
];
