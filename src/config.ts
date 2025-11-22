export const siteConfig = {
  name: "Venkata Vidya Vandana",
  title: "Full Stack Web Developer | AI Enthusiast",
  description: "Portfolio website of Venkata Vidya Vandana",
  accentColor: "#22d3ee",
  social: {
    email: "vidyavandana1234@gmail.com",
    linkedin: "https://linkedin.com/in/venkata-vidya-vandana-72077527b/",
    github: "https://github.com/vidyavandana",
  },
  aboutMe:
    "I am a final-year B.Tech Computer Science student with hands-on experience in building full-stack applications using React, Node.js, and MongoDB. I have developed projects with REST APIs and payment integration, focusing on creating scalable and efficient software solutions. I also have a keen interest in AI/ML and am building my knowledge in this area to integrate intelligent features into future applications.",
  skills: ["JavaScript", "Html & CSS", "SQL", "Python", "MERN Stack", "Basics of AI & ML", "Tailwind CSS", "Java"],
  projects: [
    {
      name: "Hotel Management System",
      description:
        "During my internship at BookingList, I contributed to a SaaS-based hotel management system that streamlined guest bookings and room management. I worked on features like tap-based calendar selection for room availability, dynamic price calculations for multiple rooms and guests, and a user-friendly interface that enhanced the overall booking experience.",
      skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      name: "HireSync",
      description:
        "HireSync is an AI-powered resume analyzer that extracts skills, scores resumes, and matches candidates with job descriptions using NLP. It provides improvement suggestions and supports multi-resume shortlisting for recruiters. Built with React, FastAPI, and Node.js, it demonstrates practical AI integration in modern hiring workflows.",
      link: "https://github.com/vidyavandana/AI-Resume-Analyzer",
      skills: ["React", "FastAPI", "Node.js", "NLP", "Python", "MySQL"],
  },
  {
  name: "Fake News Detection",
  description:
    "Built an NLP-powered machine learning model that classifies news articles as Fake or Real using TF-IDF vectorization. Performed text preprocessing (cleaning, normalization, regex filtering) and compared multiple ML algorithms including Logistic Regression, Decision Tree, Gradient Boosting, and Random Forest. Achieved over 99% accuracy with detailed evaluation using Precision, Recall, and F1 Score. Added a manual prediction module to test custom news inputs.",
  link: "https://github.com/vidyavandana/Fakenewsdetection",
  skills: ["Python", "Scikit-Learn", "NLP", "Pandas", "NumPy", "Matplotlib"]
  },

  ],
  experience: [
    {
      company: "BookingList",
      title: "Full Stack Developer Intern",
      dateRange: "2025",
      bullets: [
        "Collaborated with the core team to design and enhance the hotel booking platform",
        "Delivered production-ready code improving room booking flow and payment reliability.",
        "Gained hands-on experience with agile development, Git workflows, and backend validation.",
      ],
    },
  ],
  education: [
    {
      school: "B.Tech, [RGUKT, RK Valley]",
      degree: "Bachelor of Technology in [CSE]",
      dateRange: "2022 - 2026",
       achievements: [
      "CGPA: 8.82 / 10",
      "Coursework: DSA, OS, DBMS, CN",
      "Coordinator, Helping Hands Organization – led student and community initiatives",
    ],
     
    },
  ],
};
