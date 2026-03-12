import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Movie Website",
    image: "./IMDB.png",
    images: ["./IMDB.png", "./IMDB.png", "./IMDB.png"], // Added multiple images
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "This website provides information about popular , top-rated and upcoming movies.",
    detailedDescription: "This comprehensive movie website offers detailed information on popular, top-rated, and upcoming movies. Users can browse through extensive movie databases, view trailers, read reviews, and get recommendations based on their preferences. Built with React for a dynamic user interface and integrated with The Movie Database API for real-time data.",
    github: "https://github.com/upstackpilot0710/IMDB",
    demo: "https://imdb-rho.vercel.app",
  },
  {
    id: "2",
    name: "Ecommerce Website",
    image: "./ecom.png",
    images: ["./ecom.png", "./ecom.png", "./ecom.png"], // Added multiple images
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "This website provides users with all the basic kinds of shopping items.",
    detailedDescription: "An intuitive ecommerce platform where users can explore and purchase a wide variety of shopping items. Features include product search, filtering, shopping cart, secure checkout, and user accounts. Developed using React for frontend interactivity, Tailwind CSS for styling, and connected to APIs for product data and database management.",
    github: "https://github.com/upstackpilot0710/Ecommerce-Demo",
    demo: "https://imdb-rho.vercel.app",
  },
  {
    id: "3",
    name: "Chat Application",
    image: "./chatapp.png",
    images: ["./chatapp.png", "./chatapp.png", "./chatapp.png"], // Added multiple images
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "This chat application provides an interface to the users to interact with their friends.",
    detailedDescription: "A real-time chat application enabling users to connect and communicate with friends seamlessly. Supports private messaging, group chats, and media sharing. Built with React for the frontend, Tailwind CSS for responsive design, and Firebase for backend services including authentication and real-time database.",
    github: "https://github.com/upstackpilot0710/Chat-App",
    demo: "https://vchat4whisperchat.vercel.app",
  },
  {
    id: "4",
    name: "Expense Tracker",
    image: "./expense-tracker.png",
    images: ["./expense-tracker.png", "./expense-tracker.png", "./expense-tracke3.png"], // Added multiple images
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "This application provides an interface for users to track their expenses .",
    detailedDescription: "A powerful expense tracking application that helps users monitor and manage their finances. Users can add, categorize, and analyze expenses with visual charts and reports. Tech stack includes MongoDB for data storage, Express.js for backend API, React for frontend, Redux for state management, and Tailwind CSS for styling.",
    github: "https://github.com/upstackpilot0710/Expense-Tracker",
    demo: "https://vtrack-expense.vercel.app",
  },
  {
    id: "5",
    name: "Car Rental Website",
    image: "./car-rental-app.png",
    images: ["./car-rental-app.png", "./car-rental-app.png", "./car-rental-app.png"], // Added multiple images
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "This is an online platform that allows users to rent cars for personal or business use.",
    detailedDescription: "An online car rental platform designed for easy booking and management of vehicle rentals. Users can search for available cars, make reservations, and manage bookings. Developed with Next.js for server-side rendering, TypeScript for type safety, Tailwind CSS for design, and integrated APIs for car data and booking systems.",
    github: "https://github.com/upstackpilot0710/nextjs-car-rental-app",
    demo: "https://car-rental-application.vercel.app",
  },
  {
    id: "8",
    name: "Blog Application",
    image: "./blog-app.png",
    images: ["./blog-app.png", "./blog-app.png", "./blog-app.png"], // Added multiple images
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
    description: "This application allows users to express their thoughts and experiences through blogs.",
    detailedDescription: "A full-featured blog application where users can create, edit, and share their thoughts and experiences. Includes user authentication, rich text editing, commenting, and social sharing. Built with Next.js for performance, Tailwind CSS for styling, MongoDB for database, and Prisma for ORM.",
    github: "https://github.com/upstackpilot0710/Blog-Application",
    demo: "https://write-ur-blog.vercel.app",
  },
];

export default ProjectsData;
