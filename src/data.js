// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
// import firebaseLogo from "./assets/tech_logo/firebase.png";

import numpyLogo from "./assets/tech_logo/numpy.png";
import pandasLogo from "./assets/tech_logo/pandas.png";
import matplotlibLogo from "./assets/tech_logo/matplotlib.png";
import seabornLogo from "./assets/tech_logo/seaborn.png";
import scikitLogo from "./assets/tech_logo/sklearn.png";

import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import jupyternootbookLogo from "./assets/tech_logo/jupyterNotebook.png";
import googlecolabLogo from "./assets/tech_logo/colb.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import edunetLogo from './assets/Experience/edunet-foundation.png';
import internshipLogo from './assets/Experience/366pi_logo.jpg';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import sbuLogo from "./assets/Education_logo/sbu.png";
import guruNanakLogo from "./assets/Education_logo/guruNanak.jpg";
import BishopLogo from "./assets/Education_logo/Bishop.png";

// Project Section Logo's
import codeCrafter from "./assets/Work_image/codeCrafter.png";
import weatherApp from "./assets/Work_image/weatherApp.png";
import TreeCount from "./assets/Work_image/TreeCount.png"
import EpicEscape from "./assets/Work_image/EpicEscape.jpg";
import notesapp from "./assets/Work_image/NotesApp.png";
import netflix from "./assets/Work_image/Netflix.png";
import housePrice from "./assets/Work_image/HousePricePrediction.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      
    ],
  },
 
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "NumPy", logo: numpyLogo },
      { name: "Pandas", logo: pandasLogo },
      { name: "Matplotlib", logo: matplotlibLogo },
      { name: "Seaborn", logo: seabornLogo },
      { name: "Scikit-learn", logo: scikitLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Jupyter Notebook", logo: jupyternootbookLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Google Colab", logo: googlecolabLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: internshipLogo,
    role: "Artificial Intelligence Intern",
    company: "366Pi Technologies",
    date: "July 2025 - August 2025",
    desc: "During this internship, I developed an AI-powered tree counting system using object detection on drone and aerial video frames, achieving 90% detection accuracy.",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Pytorch",
      "OpenCV",
      

    ],
  },
  // {
  //   id: 1,
  //   img: edunetLogo,
  //   role: "Artificial Intelligence Intern",
  //   company: "Edunet Foundation",
  //   date: "May 2025 - June 2025",
  //   desc: "During this internship, I developed an AI assistant aimed at improving user interaction and automating repetitive tasks. I worked extensively with Python and its core libraries, including NumPy, Pandas, and scikit-learn, to implement machine learning logic and handle data processing. I also integrated basic natural language processing using libraries like NLTK and spaCy to enable smarter user communication.",
  //   skills: [
  //     "Python",
  //     "NumPy",
  //     "Pandas",
  //     "Matplotlib",
  //     "Seaborn",
  //     "Scikit-learn",
  //   ],
  // },
];

export const education = [
  {
    id: 0,
    img: sbuLogo,
    school: "Sarala Birla University, Ranchi",
    date: "Aug 2022 - Expected(May 2026)",
    grade: "7.43 CGPA(upto 6th sem)",
    desc: "I am pursuing a Bachelor of Technology in Computer Science and Engineering at Sarala Birla University, Ranchi. My four-year program covers core computer science fundamentals with advanced studies in AI and ML, building expertise in programming, algorithms, neural networks, and deep learning. Alongside academics, I have gained hands-on experience in full-stack web development using the MERN stack, strengthening my skills in intelligent systems and scalable software development.",
    degree:
      "Bachelor of Technology in Computer Science and Engineering (Specialization in Artificial Intelligence & Machine Learning)",
  },
  {
    id: 1,
    img: guruNanakLogo,
    school: "Gurunanak Higher Secondary School, Ranchi",
    date: "Apr 2018 - March 2020",
    grade: "71%",
    desc: "I completed Higher Secondary education from Gurunanak Higher Secondary School, Ranchi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "Higher Secondary Education - PCM ",
  },
  {
    id: 2,
    img: BishopLogo,
    school: "Bishop Hartmann Academy, Ranchi",
    date: "Apr 2006 - March 2018",
    grade: "70%",
    desc: "I completed Secondary education from Bishop Hartmann Academy, Ranchi, under the ICSE board, where I studied Science.",
    degree: "Secondary Education, Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Weather Application",
    description:
      "A responsive web app built with HTML, CSS, and JavaScript that provides real-time weather updates using the OpenWeatherMap API. Features include dynamic backgrounds, weather icons, and detailed metrics like temperature, humidity, pressure, and wind speed.",

    image: weatherApp,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/Quraishiraza/Weather-App",
    webapp:
      "https://weather-app-five-omega-21.vercel.app/"
  },
  {
    id: 1,
    title: "Epic Escape",
    description:
      "Epic Escape is a visually rich, responsive travel website designed to inspire wanderlust and streamline trip planning. Built using HTML, CSS, JavaScript, and PHP, it features dynamic destination showcases, real-time booking interactions, and an adaptive layout that delivers seamless user experiences across devices.",
    image: EpicEscape,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/sharmin-iffat/Epic-Escape-A-Travel-Website",
    // webapp:
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "Simple Notes lets you create, search, edit, and delete notes with ease. Just add a title and content, then quickly find notes by searching titles. Edit anytime or remove what you no longer need—simple and efficient.",
    image: notesapp,
    tags: ["React JS", "ReactDOM"],
    github: "https://github.com/sharmin-iffat/Notes-App",
    // webapp:
  },
  // {
  //   id: 4,
  //   title: "House Price Prediction",
  //   description:
  //     "This project uses the California Housing dataset and XGBRegressor to predict house prices based on features like location, income, and population. It highlights skills in data preprocessing, model building, and evaluation.",
  //   image: housePrice,
  //   tags: [
  //     "Python",
  //     "NumPy",
  //     "Pandas",
  //     "Matplotlib",
  //     "Seaborn",
  //     "Scikit-learn",
  //     "Jupyter Notebook",
  //   ],
  //   github: "https://github.com/sharmin-iffat/House-Price-Prediction",
  // },
];
