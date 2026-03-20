import {
  BiLogoPython,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTypescript,
} from "react-icons/bi";

import {
  SiOpenai,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

import { TbApi, TbDatabase, TbCloud } from "react-icons/tb";

const ProjectsData = [
  {
    id: "1",
    name: "AI Influencer Marketing Platform – Stormy",
    image: "./stormy.png",
    images: ["./stormy.png", "./stormy-2.png", "./stormy-3.png", "./stormy-4.png"],
    icons: [BiLogoReact, BiLogoNodejs, SiOpenai, TbApi, TbCloud],
    description:
      "End-to-end AI platform for influencer discovery, outreach automation, and deal execution.",
    detailedDescription: "Stormy is a fully automated AI-driven influencer marketing platform designed to streamline the entire growth pipeline. It leverages machine learning to identify high-impact influencers with exceptional accuracy, automates personalized outreach campaigns at scale, and intelligently negotiates and finalizes deals. The system eliminates manual marketing workflows, enabling businesses to focus entirely on product growth while AI handles distribution, engagement, and conversion optimization.",
    github: "",
    demo: "https://stormy.ai/",
  },
  {
    id: "2",
    name: "AI Data Analytics & Insight Engine – Kater",
    image: "./kater.png",
    images: ["./kater.png", "./kater-2.png", "./kater-3.png"],
    icons: [
      BiLogoPython,
      SiPostgresql,
      TbDatabase,
      TbApi,
      SiDocker,
    ],
    description:
      "Transforms business questions into automated data analysis and actionable insights.",
    detailedDescription: "Stormy is a fully automated AI-driven influencer marketing platform designed to streamline the entire growth pipeline. It leverages machine learning to identify high-impact influencers with exceptional accuracy, automates personalized outreach campaigns at scale, and intelligently negotiates and finalizes deals. The system eliminates manual marketing workflows, enabling businesses to focus entirely on product growth while AI handles distribution, engagement, and conversion optimization.",
    github: "",
    demo: "https://www.kater.ai/",
  },
  {
    id: "3",
    name: "AI Video Generation & Editing Platform – Magic Hour",
    image: "./magichour.png",
    images: ["./magichour.png", "./magichour-2.png"],
    icons: [BiLogoReact, BiLogoNodejs, SiOpenai, TbApi],
    description:
      "Unified AI workflow for creating high-quality videos with minimal effort.",
    detailedDescription: "Magic Hour is a professional-grade AI video creation platform that integrates multiple state-of-the-art generative video models into a single streamlined workflow. It enables users to generate, edit, and customize videos through intuitive templates and automated processes. By simplifying complex video production tasks, the platform significantly reduces time and technical barriers, allowing creators and businesses to produce high-quality visual content efficiently.",
    github: "",
    demo: "https://magichour.ai/",
  },
  {
    id: "4",
    name: "AI Audio Generation Platform – Planet",
    image: "./planet.png",
    images: ["./planet.png", "./planet-2.png", "./planet-3.png", "./planet-4.png"],
    icons: [BiLogoPython, SiOpenai, TbApi],
    description:
      "Text-to-sound AI system for music production and sound design.",
    detailedDescription: "Magic Hour is a professional-grade AI video creation platform that integrates multiple state-of-the-art generative video models into a single streamlined workflow. It enables users to generate, edit, and customize videos through intuitive templates and automated processes. By simplifying complex video production tasks, the platform significantly reduces time and technical barriers, allowing creators and businesses to produce high-quality visual content efficiently.",
    github: "",
    demo: "https://www.sampleplanet.fm/",
  },
  {
    id: "5",
    name: "Autonomous SEO & Growth Engine – RankAI",
    image: "./rankai.png",
    images: ["./rankai.png", "./rankai-2.png", "./rankai-3.png", "./rankai-4.png", "./rankai-5.png"],
    icons: [BiLogoPython, SiOpenai, TbApi, TbCloud],
    description:
      "AI system that generates, optimizes, and scales SEO content automatically.",
    detailedDescription: "RankAI is a fully autonomous SEO platform designed to drive large-scale organic traffic growth. It identifies high-value search queries, generates optimized content tailored for both traditional search engines and AI-driven search platforms, and continuously refines its strategy through iterative performance analysis. Acting as a self-improving digital growth engine, RankAI eliminates the need for manual SEO efforts while delivering sustained traffic and visibility.",
    github: "",
    demo: "https://rankai.ai/",
  },
  {
    id: "6",
    name: "AI Research Assistant Platform – OpenPaper",
    image: "./openpaper.png",
    images: ["./openpaper.png", "./openpaper-2.png", "./openpaper-3.png"],
    icons: [BiLogoReact, SiOpenai, TbApi],
    description:
      "AI-powered tool for reading, analyzing, and understanding research papers.",
    detailedDescription: "OpenPaper is an AI-powered research assistant that streamlines the process of reading, analyzing, and understanding academic papers. It provides instant summaries, key insights, and relevant citations, making it easier for researchers and professionals to stay updated with the latest findings in their field.",
    github: "",
    demo: "https://openpaper.ai/home",
  },
  {
    id: "7",
    name: "Personalized AI Writing Engine – Vaero",
    image: "./vaero.png",
    images: ["./vaero.png"],
    icons: [BiLogoPython, SiOpenai, TbApi],
    description:
      "AI platform that replicates individual writing styles across content generation.",
    detailedDescription: "Vaero is a personalized AI writing engine that learns and replicates an individual's unique writing style to generate content that feels authentically theirs. By analyzing a user's existing writing samples, Vaero creates a custom language model that can produce articles, emails, social media posts, and more, all while maintaining the user's distinct voice and tone.",
    github: "",
    demo: "https://vaero.ai/",
  },
  {
    id: "8",
    name: "AI Long-Form Content Editor – Type",
    image: "./typeai.png",
    images: ["./typeai.png", "./typeai-2.png", "./typeai-3.png", "./typeai-4.png"],
    icons: [SiNextdotjs, BiLogoTypescript, SiOpenai],
    description:
      "AI-native editor for structured long-form writing and storytelling.",
    detailedDescription: "Type is an AI-native long-form content editor designed to enhance structured writing and storytelling. It provides intelligent suggestions for improving narrative flow, coherence, and style while allowing writers to maintain creative control. With features like real-time feedback, content organization tools, and seamless integration of research materials, Type empowers writers to craft compelling stories and articles efficiently.",
    github: "",
    demo: "https://type.ai/",
  },
  {
    id: "9",
    name: "AI Medical Search Engine – MediSearch",
    image: "./medisearch.png",
    images: ["./medisearch.png"],
    icons: [BiLogoPython, SiOpenai, TbApi],
    description:
      "Delivers accurate, science-based medical answers using AI.",
    detailedDescription: "MediSearch is an AI-powered medical search engine that delivers accurate, science-based answers to healthcare professionals and patients. By leveraging advanced natural language processing and medical knowledge graphs, MediSearch provides reliable information on symptoms, conditions, treatments, and medications, ensuring users receive the most up-to-date and evidence-based insights.",
    github: "",
    demo: "https://medisearch.io/",
  },
  {
    id: "10",
    name: "Dynamic Data Integration Tool – Insyncr",
    image: "./insyncr.png",
    images: ["./insyncr.png", "./insyncr-2.png", "./insyncr-3.png", "./insyncr-4.png"],
    icons: [BiLogoNodejs, TbApi, TbDatabase],
    description:
      "Automates real-time data integration into PowerPoint presentations.",
    detailedDescription: "Insyncr is a dynamic data integration tool that automates the process of incorporating real-time data into PowerPoint presentations. It seamlessly connects to various data sources, extracts relevant information, and formats it into visually appealing slides, saving time and effort for presenters.",
    github: "",
    demo: "https://insyncr.com/",
  },
  {
    id: "11",
    name: "AI Collaborative Data Workspace – LiveDocs",
    image: "./livedocs.png",
    images: ["./livedocs.png", "./livedocs-2.png"],
    icons: [
      BiLogoPython,
      SiPostgresql,
      TbDatabase,
      TbApi,
      SiDocker,
    ],
    description:
      "Collaborative AI environment for data analysis and documentation.",
    detailedDescription: "...",
    github: "",
    demo: "https://livedocs.com/",
  },
];

export default ProjectsData;