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
      class: "Machine Learning",
    },
    {
      class: "Artificial Intelligence",
    },
    { 
      class: "Database Management Systems",
    },
    {
      class: "Data Structures & Algorithms",
    },
    {
      class: "Algorithm Engineering",
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
      name: "Python",
    },
    {
      name: "Java",
    },
    {
      name: "SQL",
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "AWS",
    },
    {
      name: "MongoDB",
    },
    {
      name: "Firebase",
    },
    {
      name: "Supabase",
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
        "Improved image load time by 20% by utilizing MongoDB with Firebase to store and manage user-uploaded images.",
        "Implemented comment section and posts scrolling to enhance user interaction, utilizing efficient data management.",
        "Created RESTful API to manage user data for efficient data handling by utilizing Express.js and MongoDB.",
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
      name: "Omnis Gallery",
      description:
        "An art portfolio that showcases drawings.",
      points: [
        "Hosted with AWS Amplify, tailored IAM and bucket policies for admin and users to ensure data security.",
        "Set up login with Amplify Auth powered by Cognito.",
        "Utilized S3 bucket storage to upload and display of media files.",
      ],
      tags: [
        "AWS", 
        "NextJS", 
        "TypeScript", 
        "HTML", 
        "CSS",
      ],
    },
    {
      name: "DripTec",
      description: "An e-commerce website that sells clothing.",
      points: [
        "Implemented filtering and sorting, improving clothing access by utilizing Supabase’s PostgreSQL database and APIs.",
        "Developed eye-catching category page to enhance user engagement by following proper design practices.",
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
      name: "MotionMint",
      description: "An expense tracker mobile application",
      points: [
        "Implemented a user-friendly interface for efficient understanding of financial information and expense managing.",
        "Created bar graph and expense list for visual and read learners, utilizing data visualization skills and clear formatting.",
      ],
      tags: [
        "Flutter", 
        "Dart",
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