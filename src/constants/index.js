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

  const technologies = [
    {
      name: "C++",
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    {
      title: "Programming Instructor",
      company_name: "Coding Mind Academy",
      date: "Jan 2024 - Present",
      points: [
        "Tutored students the fundamental basics in programming with C++.",
        "Adjusted and executed lesson plans to fit to individual student's learning preference.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ACM Club",
      date: "April 2024 - Present",
      points: [
        "Utilized React, Next.js, and Tailwind CSS.",
        "Collaborating with other students and held weekly meetings",
        "Designed the modal for the events.",
      ],
    },
  ];

  const projects = [
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
  
  export { courses, technologies, experiences, projects };