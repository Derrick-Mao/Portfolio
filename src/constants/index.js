import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const courses = [
    {
      class: "Data Structures & Algorithms",
    },
    {
      class: "Software Construction",
    },
    {
      class: "Web Development",
    },
  ];

  const languages = [
    {
      name: "C++",
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Dart",
    },
  ];

  const fwAndLib = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS", 
    },
    {
      name: "Express JS", 
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Flask",
    },
    {
      name: "Qt",
    },
  ];

  const technologies = [
    {
      name: "Supabase",
    },
    {
      name: "Firebase",
    },
    {
      name: "MongoDB",
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Flutter"
    },
  ];
  
  const experiences = [
    {
      title: "Programming Instructor",
      company_name: "Coding Mind Academy",
      date: "Jan 2024 - Present",
      points: [
        "Hosted classes on the fundamentals of programming in C++ and Java.",
        "Instructed students on object-oriented programming, enhancing their ability to design modular and reusable code.",
        "Improved student comprehension by adjusting corporate curriculum to fit individual learning preference.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ACM@UCR",
      date: "April 2024 - Present",
      points: [
        "Developed websites using React, Next.js, Tailwind CSS, and TypeScript with teams of 8+ developers.",
        "Implemented features such as the calendar modal and event card, and ensured full page responsiveness.",
        "Leveraged Cypress and browser console tools to identify and resolve code issues.",
      ],
    },
  ];

  const projects = [
    {
      name: "SnapScene",
      description:
        "A social media website with image posts.",
      points: [
        "Utilized Firebase to store and manage user-uploaded images, improving post load time.",
        "Implemented comment section and posts scrolling and managed post data and user interactions.",
        "Handled routing and navigation enabling seamless transitions between pages and dynamic rendering of posts.",
      ],
      tags: [
        "MongoDB", 
        "Firebase", 
        "React", 
        "Javascript", 
        "HTML", 
        "CSS",
      ],
    },
    {
      name: "DripTec",
      description: "An e-commerce website that sells clothing.",
      points: [
        "Integrated Supabase for robust and scalable backend data management.",
        "Implemented sorting functionality to improve user experience by allowing customized product views.",
        "Developed aesthetically pleasing category page and product cards to enhance user engagement and satisfaction.",
      ],
      tags: [
        "Supabase", 
        "React", 
        "Javascript", 
        "HTML", 
        "CSS",
      ],
    },
    {
      name: "Bookshelf",
      description: "A personal library website that maintains a list of books information.",
      points: [
        "Created a RESTful API that follows the CRUD functions model.",
        "Implemented asynchronous data fetching and dynamic DOM updates.",
        "Developed modal pop-ups for book editing and deletion with real-time updates to the book list.",
      ],
      tags: [
        "Javascript", 
        "HTML", 
        "CSS"
      ]
    },
    {
      name: "Big News Web",
      description: "A news website displaying top trending articles.",
      points: [
        "Integrated NYTimes API to fetch and display the latest trending articles.",
        "Developed user interaction features to handle sorting preferences.",
      ],
      tags: [
        "Javascript", 
        "HTML", 
        "CSS",
      ],
    },
    {
      name: "To-do List",
      description:
        "A to-do list application that helps users manage and organize tasks.",
      points: [
        "Led a team of peers in sprint meetings, creating a kanban board for user story and managing assignments.",
        "Implemented task lists sorted by upcoming due dates and priority, following the CRUD functions model.",
        "Updated the graphical user interface and employed with Qt framework.",
      ],
      tags: [
        "Qt",
        "C++"
      ],
    },
    {
      name: "Stella",
      description:
        "An AI chatbot that responds to the user's queries.",
      points: [
        "Integrated the Discord.js library with OpenAI API to enable communication between the chatbot and users.",
        "Engineered a conversation management system to maintain context and facilitate dialogue flow.",
        "Implemented error-handling mechanisms and fallback responses in unexpected scenarios.",
      ],
      tags: [
        "JavaScript",
      ],
    },
  ];
  
  export { courses, languages, fwAndLib, technologies, experiences, projects };