export const personalInfo = {
  name: "ARAVIND S",
  role: "AI/ML Engineer & Full-Stack Developer",
  tagline: "Bridging the gap between Machine Learning models and production-ready Full-Stack web applications.",
  email: "aravindgousikan1@gmail.com",
  phone: "6380227253",
  formattedPhone: "+91 63802 27253",
  location: "Dindigul, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/aravinds2002/",
  github: "https://github.com",
  resumePath: "/Aravind_S_Resume.pdf",
  bio: "MCA post-graduate with a strong foundation in Java, Data Structures and Algorithms, Full-Stack Development, and AI/ML. Skilled in React.js, Spring Boot, REST APIs, MySQL, Python, and machine learning. Experienced in developing full-stack applications and integrating ML models into web applications. Strong in problem-solving and eager to learn and contribute to real-world software projects.",
  stats: [
    { label: "MCA Academic Score", value: "82%", sub: "PSNA College (2024-26)" },
    { label: "Top ML Model Accuracy", value: "95%", sub: "Pancreatic Cancer AI" },
    { label: "Heart Risk Model Accuracy", value: "90%", sub: "Random Forest Classifier" },
    { label: "Hackathon & Honors", value: "3+", sub: "SIH '25 Finalist & State Prizes" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Skills" },
    { id: "aiml", name: "AI & Machine Learning" },
    { id: "backend", name: "Backend & Systems" },
    { id: "frontend", name: "Frontend Development" },
    { id: "database", name: "Databases & Tools" }
  ],
  skills: [
    // AI/ML
    { name: "Machine Learning", category: "aiml", level: 90, icon: "Brain", highlight: "Random Forest, XGBoost, Scikit-learn" },
    { name: "SHAP (Explainable AI)", category: "aiml", level: 85, icon: "Cpu", highlight: "Feature attribution & interpretability" },
    { name: "Python", category: "aiml", level: 92, icon: "Code", highlight: "Data Science, Pandas, NumPy" },
    { name: "LLM Fundamentals & RAG", category: "aiml", level: 80, icon: "Sparkles", highlight: "Retrieval-Augmented Generation basics" },
    
    // Backend
    { name: "Spring Boot", category: "backend", level: 88, icon: "Server", highlight: "RESTful APIs, MVC, Microservices" },
    { name: "Java", category: "backend", level: 90, icon: "Coffee", highlight: "Core Java, OOP, Data Structures & Algorithms" },
    { name: "Flask", category: "backend", level: 85, icon: "Layers", highlight: "Python ML API serving" },
    { name: "C Programming", category: "backend", level: 82, icon: "Terminal", highlight: "Procedural programming & memory basics" },
    
    // Frontend
    { name: "React.js", category: "frontend", level: 90, icon: "Atom", highlight: "Hooks, State management, Component architecture" },
    { name: "JavaScript (ES6+)", category: "frontend", level: 88, icon: "FileCode", highlight: "Async/Await, DOM, Modern syntax" },
    { name: "HTML5 & CSS3", category: "frontend", level: 95, icon: "Layout", highlight: "Responsive layouts, Flexbox, Grid, Animations" },
    
    // Database & Tools
    { name: "MySQL", category: "database", level: 86, icon: "Database", highlight: "Complex queries, Relational schema design" },
    { name: "JDBC Connection", category: "database", level: 85, icon: "Workflow", highlight: "Java database persistence & transactions" },
    { name: "Git & GitHub", category: "database", level: 88, icon: "GitBranch", highlight: "Version control, collaboration" },
    { name: "Antigravity & IDEs", category: "database", level: 90, icon: "Wrench", highlight: "VS Code, IntelliJ IDEA, PyCharm, MySQL Workbench" }
  ]
};

export const projectsData = [
  {
    id: "pancreatic-cancer",
    title: "Explainable XGBoost Early Pancreatic Cancer Prediction",
    subtitle: "Using Urinary Biomarkers & SHAP Interpretability",
    accuracy: "95% Accuracy",
    badge: "Featured AI/ML Capstone",
    category: "AI/ML Healthcare",
    banner: "/pancreatic-cancer-prediction.jpg",
    summary: "Developed an AI-based Pancreatic Cancer Risk Prediction System to identify potential cancer risk at an early stage using urinary biomarker data and clinical parameters. Implemented an XGBoost-based prediction model with SHAP Explainable AI to identify important risk factors and provide interpretable prediction results.",
    keyMetrics: [
      { label: "Accuracy", value: "95%" },
      { label: "Primary Model", value: "XGBoost + GridSearchCV" },
      { label: "Interpretability", value: "SHAP Explainable AI" },
      { label: "Data Modality", value: "Urinary Biomarkers" }
    ],
    highlights: [
      "Trained high-precision XGBoost classifier with GridSearchCV hyperparameter optimization.",
      "Integrated SHAP (SHapley Additive exPlanations) for transparent clinical reasoning, highlighting individual biomarker attributions.",
      "Engineered full-stack integration with Spring Boot, Flask ML inference microservice, and dynamic React frontend.",
      "Architected secure clinical pipeline with patient demographic and clinical parameter inputs."
    ],
    techStack: [
      "Python", "XGBoost Classifier", "SHAP (Ex-AI)", "Java", "Spring Boot", "React.js", "Flask", "MySQL", "JavaScript", "HTML/CSS"
    ],
    hasDemo: true,
    demoType: "pancreatic"
  },
  {
    id: "heart-disease",
    title: "Heart Disease Risk Prediction System",
    subtitle: "Full-Stack Clinical Assessment with Random Forest Classifier",
    accuracy: "90% Accuracy",
    badge: "Clinical Web Application",
    category: "Full-Stack ML",
    banner: "/heart-disease-prediction.jpg",
    summary: "Developed a full-stack heart disease risk prediction web application using React.js and machine learning. Integrated a Random Forest Classifier to analyze clinical inputs (Age, Gender, Chest Pain, Blood Pressure, Cholesterol, Blood Sugar, Resting ECG) and provide real-time predictions with approximately 90% accuracy.",
    keyMetrics: [
      { label: "Accuracy", value: "90%" },
      { label: "Algorithm", value: "Random Forest Classifier" },
      { label: "Latency", value: "< 250ms Real-time" },
      { label: "Security", value: "JWT Auth & History" }
    ],
    highlights: [
      "Engineered end-to-end clinical assessment workflow receiving diverse patient parameters.",
      "Integrated Random Forest ensemble classifier with Scikit-learn to handle non-linear risk correlations.",
      "Created sleek, accessible React.js dashboard delivering intuitive risk visualizer and lifestyle recommendations.",
      "Implemented Spring Boot & Flask hybrid backend with MySQL storage for patient records and historical assessment trends."
    ],
    techStack: [
      "Python", "Random Forest", "Scikit-Learn", "React.js", "Spring Boot", "Flask", "MySQL", "JavaScript", "HTML/CSS"
    ],
    hasDemo: true,
    demoType: "heart"
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    score: "82%",
    institution: "PSNA College of Engineering & Technology",
    location: "Dindigul, Tamil Nadu",
    period: "2024 – 2026 (July)",
    status: "Finalist / Ongoing Post-Graduation",
    description: "Specialized in Full-Stack Development, Advanced Data Structures, Database Architecture, Machine Learning Systems, and Cloud-Integrated Services. Consistently maintaining 82% academic standing.",
    highlights: ["Data Structures & Algorithms", "Full-Stack Web Development", "AI & Applied Machine Learning", "Distributed Enterprise Systems"]
  },
  {
    degree: "Bachelor of Science in Physics (B.Sc. Physics)",
    score: "73%",
    institution: "G.T.N. Arts College",
    location: "Dindigul, Tamil Nadu",
    period: "2021 – 2024 (April)",
    status: "Graduated",
    description: "Built rigorous analytical thinking, computational mathematics, statistical mechanics, and scientific problem-solving abilities that formed the foundation for complex algorithmic programming.",
    highlights: ["Mathematical Physics", "Statistical Analysis", "Logical Problem Solving", "Computational Modeling"]
  }
];

export const achievementsData = [
  {
    title: "College Level Finalist — Smart India Hackathon 2025",
    organization: "Smart India Hackathon (Ministry of Education / AICTE)",
    year: "2025",
    category: "National Hackathon",
    badge: "Finalist",
    icon: "Trophy",
    description: "Selected as college-level finalist for pioneering innovative tech solutions to real-world national problem statements."
  },
  {
    title: "Second Prize — Poster Presentation Event",
    organization: "GRI (Gandhigram Rural Institute) University, Dindigul",
    year: "2025",
    category: "Academic Research Presentation",
    badge: "2nd Prize",
    icon: "Award",
    description: "Awarded 2nd prize for articulating complex technical architectures, ML integrations, and healthcare impact in front of faculty and academic delegates."
  },
  {
    title: "First Prize — Technical Quizzes Competition",
    organization: "Jayaraj Annapackiam College",
    year: "2025",
    category: "Technical Competition",
    badge: "1st Prize",
    icon: "Medal",
    description: "Clinched 1st prize in an intensive inter-collegiate technical quiz testing computer science fundamentals, programming algorithms, and emerging technologies."
  }
];

export const certificationsData = [
  {
    title: "The Complete ReactJS Course for Beginners",
    issuer: "Udemy",
    icon: "Atom",
    topics: "React Components, Hooks (useState, useEffect, useContext), State Management, JSX, SPA Routing",
    badge: "React Mastery"
  },
  {
    title: "HTML, CSS, Java & JavaScript: Full Stack Programming Course",
    issuer: "Udemy",
    icon: "Layers",
    topics: "End-to-end full stack principles, Java OOP, modern JavaScript scripting, CSS responsive design",
    badge: "Full Stack"
  },
  {
    title: "C Training Certification",
    issuer: "Spoken Tutorial (IIT Bombay / National Mission on Education)",
    icon: "Terminal",
    topics: "Procedural logic, pointers, memory allocation, algorithms and foundational systems concepts",
    badge: "Core Systems"
  }
];

export const languagesData = [
  { name: "English", level: "Professional Working Proficiency", stars: 5, note: "Technical documentation, client communication, presentations" },
  { name: "Tamil", level: "Native / Bilingual Proficiency", stars: 5, note: "Native fluency, local team collaboration" }
];
