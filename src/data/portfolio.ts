export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  status: string;
  description: string;
  image: string;
  problem: string;
  myRole: string;
  technologies: string[];
  architecture: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  number: string;
  category: string;
  skills: string[];
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  cgpa?: string;
  description: string;
  coursework: string[];
  academicHighlights: string[];
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  events: string[];
  verifiedOutcomes: string[];
  link?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
  badgeText: string;
  verificationUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    department: string;
    institution: string;
    location: string;
    subLocation: string;
    heroHeadline: string;
    heroDescription: string;
    roleTagline: string;
    portraitPath: string;
    portraitObjectPosition: string;
    portraitScale: number;
    signature: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    resumePdfPath: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  heroTags: string[];
  highlightsStrip: {
    numeral: string;
    title: string;
    subtitle: string;
  }[];
  about: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    coreValues: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  skills: SkillCategory[];
  education: Education;
  experience: ExperienceItem[];
  achievements: AchievementItem[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Keerthiga M",
    firstName: "Keerthiga",
    lastName: "M",
    title: "Software Engineering Student & Full Stack Developer",
    department: "M.Sc. Software Systems",
    institution: "Coimbatore Institute of Technology, Coimbatore",
    location: "Coimbatore, India",
    subLocation: "CIT Campus • Coimbatore, Tamil Nadu",
    heroHeadline: "Turning ideas into meaningful digital experiences.",
    heroDescription:
      "Enthusiastic and results-driven Software Engineering student with a strong foundation in software development, programming, database management, and modern web technologies. Skilled in designing and developing responsive, user-focused web applications and real-time software solutions, with hands-on experience transforming ideas into functional applications.",
    roleTagline: "FULL STACK DEVELOPER • PROBLEM SOLVER • DATA STRUCTURES & ALGORITHM",
    portraitPath: "/assets/portrait-cutout.png",
    portraitObjectPosition: "center top",
    portraitScale: 1.0,
    signature: "Keerthiga M",
    email: "keerthigamurali3116@gmail.com",
    phone: "+91 9025463116",
    github: "https://github.com/keerthiga0905",
    linkedin: "https://www.linkedin.com/in/keerthiga-m-52a81b339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    resumePdfPath: "/assets/resume/Keerthiga_M_Resume.pdf",
  },
  navigation: [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ],
  heroTags: ["DESIGNING", "BUILDING", "INNOVATING"],
  highlightsStrip: [
    {
      numeral: "01",
      title: "M.Sc. Software Systems",
      subtitle: "CIT Coimbatore (2024 - Present)",
    },
    {
      numeral: "02",
      title: "TS Innovation",
      subtitle: "Full Stack Developer Experience",
    },
    {
      numeral: "03",
      title: "Google Developer Groups (GDG)",
      subtitle: "Event Management Lead",
    },
    {
      numeral: "04",
      title: "Melinia & Datalytics Finalist",
      subtitle: "CIT Hackathon Honors & EDC Ideasprint",
    },
  ],
  about: {
    heading: "WHAT I DO",
    subheading: "Transforming ideas into functional, human-centric software.",
    paragraphs: [
      "I am an enthusiastic and results-driven Software Engineering student pursuing M.Sc Software Systems at Coimbatore Institute of Technology (CIT), Coimbatore. I combine a strong foundation in software development, programming, and database management with hands-on full-stack and AI project experience.",
      "My technical journey bridges reactive web development (React, Angular, Flask), machine learning & data science (Scikit-learn, XGBoost, Pandas, NumPy), and intelligent computer vision applications (YOLO, OpenCV, OCR).",
      "Beyond engineering code, I serve as Event Management Lead for Google Developer Groups (GDG), orchestrating technical outreach and peer collaboration, while actively testing my skills in top competitive collegiate hackathons.",
    ],
    coreValues: [
      {
        number: "01",
        title: "Full-Stack Web Engineering",
        description:
          "Developing user-centric applications across React, Angular, Flask, Vite, and modern relational/NoSQL databases.",
      },
      {
        number: "02",
        title: "Machine Learning & AI",
        description:
          "Designing intelligent models with Scikit-learn, XGBoost, Cosine Similarity, and YOLO computer vision.",
      },
      {
        number: "03",
        title: "Problem Solving & DSA",
        description:
          "Grounded in core C and Python algorithmic principles, building scalable and maintainable solutions.",
      },
      {
        number: "04",
        title: "Community & Leadership",
        description:
          "Leading developer event initiatives with Google Developer Groups and driving campus technical impact.",
      },
    ],
  },
  skills: [
    {
      number: "01",
      category: "PROGRAMMING LANGUAGES",
      icon: "Code2",
      skills: ["C", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      number: "02",
      category: "MACHINE LEARNING & DATA SCIENCE",
      icon: "Sparkles",
      skills: [
        "Scikit-learn",
        "XGBoost",
        "Pandas",
        "NumPy",
        "Cosine Similarity",
        "Association Rule",
      ],
    },
    {
      number: "03",
      category: "WEB DEVELOPMENT",
      icon: "Layout",
      skills: [
        "React.js",
        "Angular",
        "Flask",
        "Vite",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      number: "04",
      category: "DATABASES & STORAGE",
      icon: "Database",
      skills: ["MySQL", "MongoDB", "SQLite", "Database Schema Design"],
    },
    {
      number: "05",
      category: "AI, VISION & APIS",
      icon: "Server",
      skills: [
        "FastAPI",
        "OpenCV",
        "YOLO / YOLO-World",
        "EasyOCR",
        "Tesseract",
        "REST API",
        "STT & TTS",
      ],
    },
    {
      number: "06",
      category: "TOOLS & INTERESTS",
      icon: "Terminal",
      skills: [
        "Git",
        "GitHub",
        "Full Stack Development",
        "Problem Solving",
        "Data Structures & Algorithm",
      ],
    },
  ],
  education: {
    institution: "Coimbatore Institute of Technology, Coimbatore",
    degree: "M.Sc Software Systems",
    location: "Coimbatore, India",
    period: "2024 - Present",
    cgpa: "CGPA: 7.34 (Till 4th sem)",
    description:
      "Pursuing a rigorous Software Systems degree with comprehensive coursework spanning modern programming, database systems, web frameworks, distributed architectures, and machine learning applications.",
    coursework: [
      "Data Structures & Algorithm",
      "Software Development & Architecture",
      "Database Management Systems (MySQL / MongoDB)",
      "Machine Learning & Predictive Analytics",
      "Web Development (React / Angular / Flask)",
      "Computer Networks & Operating Systems",
    ],
    academicHighlights: [
      "Academic performance with 7.34 CGPA till 4th semester at Coimbatore Institute of Technology.",
      "Engineered multiple deployed prototypes across AI accessibility, document validation, and navigation.",
      "Active participant in department technical events, hackathons, and student leadership boards.",
    ],
  },
  experience: [
    {
      organization: "TS Innovation",
      role: "Full Stack Developer",
      period: "Internship & Experience",
      type: "Industry Experience",
      description:
        "Worked as a Full Stack Developer, contributing to the development and maintenance of web applications using frontend and backend technologies. Collaborated with the team to build responsive, user-friendly, and functional solutions.",
      responsibilities: [
        "Contributed to the development and maintenance of responsive, high-performance web applications.",
        "Built and integrated robust frontend interfaces with backend services and databases.",
        "Collaborated with the engineering team to deliver user-friendly, functional, and maintainable software solutions.",
      ],
      events: [
        "Agile Feature Sprints",
        "Client UI/UX Iterations",
        "Code Reviews & Testing",
      ],
      verifiedOutcomes: [
        "Developed scalable web application components with clean frontend-backend cohesion.",
        "Ensured responsive design and cross-device compatibility.",
      ],
    },
    {
      organization: "Google Developer Groups (GDG)",
      role: "Event Management Lead",
      period: "2024 - Present",
      type: "Developer Community Leadership",
      description:
        "Serving as Event Management Lead for Google Developer Groups, coordinating campus technology events, workshops, hackathons, and community outreach.",
      responsibilities: [
        "Leading event logistics, scheduling, and publicity for developer community initiatives.",
        "Organizing technical workshops and hackathons for aspiring student software engineers.",
        "Facilitating collaborative peer learning and engagement across academic departments.",
      ],
      events: [
        "Technical Workshops & Study Jams",
        "Hackathon Briefings & Mentorship",
        "Campus Developer Outreach Programs",
      ],
      verifiedOutcomes: [
        "Coordinated impactful developer events fostering hands-on tech learning.",
        "Expanded student participation in open developer communities.",
      ],
      link: "https://gdg.community.dev/",
    },
  ],
  achievements: [
    {
      id: "melinia-hackathon-2026",
      title: "Top 10 Finalist in CIT-Melinia Hackathon",
      organization: "CIT-Melinia Hackathon",
      date: "2026",
      category: "Technical Hackathon",
      description:
        "Selected as a Top 10 Finalist among competitive engineering teams in the prestigious CIT-Melinia Hackathon 2026 for building high-impact software solutions.",
      badgeText: "TOP 10 FINALIST",
    },
    {
      id: "datalytics-hackathon-2025",
      title: "Special Mention in CIT-Datalytics Hackathon",
      organization: "CIT-Datalytics Hackathon",
      date: "2025",
      category: "Data & AI Hackathon",
      description:
        "Awarded Special Mention recognition for innovative data analysis, machine learning application, and functional solution delivery.",
      badgeText: "SPECIAL MENTION",
    },
    {
      id: "ideasprint-edc-2025",
      title: "Second Runner-Up in Ideasprint by EDC",
      organization: "Entrepreneurship Development Cell (EDC)",
      date: "2025",
      category: "Innovation & Ideation",
      description:
        "Secured Second Runner-Up position in the competitive Ideasprint hackathon conducted by the Entrepreneurship Development Cell (EDC).",
      badgeText: "2ND RUNNER-UP",
    },
    {
      id: "fullstack-leadership",
      title: "Full Stack Developer & GDG Leadership",
      organization: "TS Innovation & Google Developer Groups",
      date: "2024 - Present",
      category: "Professional & Community",
      description:
        "Combined hands-on industry full stack engineering with student leadership as Event Management Lead for Google Developer Groups.",
      badgeText: "LEADERSHIP & INDUSTRY",
    },
  ],
  projects: [
    {
      id: "formguard",
      title: "FORMGUARD",
      tagline: "AI Application Rejection Prevention System",
      category: "AI & ML / FULL STACK APPLICATION",
      year: "2025 - 2026",
      status: "Production Ready Architecture",
      description:
        "AI-powered application verification system that detects missing documents, incorrect information, expired certificates, and file-format errors. Supports scholarships, admissions, jobs, and government schemes with OCR-based document validation and readiness scoring.",
      image: "/assets/projects/formguard.jpg",
      problem:
        "Applicants frequently face costly application rejections due to missed attachments, mismatched data, expired validity dates, and incompatible file formats.",
      myRole:
        "System Architect & Full-Stack Developer. Designed the multi-step verification pipeline, automated OCR scanning, and interactive React/Tailwind correction checklist.",
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "Machine Learning",
        "OCR",
        "NLP",
        "SQLite",
      ],
      architecture:
        "Decoupled React/Vite web application communicating via REST APIs with a high-performance Python FastAPI service. Integrated OCR and NLP models extract and validate textual metadata from uploaded credentials against applicant submission criteria.",
      features: [
        "Automated detection of missing mandatory documents and certificates",
        "OCR analysis identifying expiration dates, names, and certificate authenticity",
        "File format, resolution, and dimension compliance auditing",
        "Real-time correction checklist with guided instructions prior to submission",
      ],
      challenges: [
        "Accurately parsing varied institutional certificate templates and low-resolution document scans without high latency.",
      ],
      solutions: [
        "Implemented targeted pre-processing filters and dual-pass heuristic validation rules with cached client-side feedback.",
      ],
      githubUrl: "https://github.com/keerthiga0905/FORMGUARD",
      liveUrl: "https://formguard-demo.keerthigam.dev",
    },
    {
      id: "visionassist",
      title: "VISIONASSIST AI",
      tagline: "Voice-First Indoor Navigation Companion for Visually Impaired",
      category: "COMPUTER VISION / ACCESSIBILITY AI",
      year: "2025",
      status: "Active Research Prototype",
      description:
        "AI-powered voice-first accessibility companion for visually impaired individuals, providing real-time voice-based object detection, OCR signage reading, hazard awareness, contextual memory, and spatial audio guidance.",
      image: "/assets/projects/visionassist.jpg",
      problem:
        "Visually impaired individuals face perilous navigation challenges in unfamiliar indoor spaces, often colliding with obstacles or unable to read room signs and exit indicators.",
      myRole:
        "Computer Vision & AI Lead. Developed the real-time YOLO object detection loop, OCR text-extraction modules, and conversational voice guidance.",
      technologies: [
        "Python",
        "FastAPI",
        "JavaScript",
        "YOLO / YOLO-World",
        "OpenCV",
        "EasyOCR",
        "Tesseract",
        "STT & TTS",
      ],
      architecture:
        "Camera stream feeding real-time frames into YOLO-World and OpenCV for hazard detection, complemented by EasyOCR/Tesseract for doorway signage and room numbers, communicating instant spatial audio warnings via Text-to-Speech.",
      features: [
        "Real-time voice-based obstacle, doorway, and stairway detection",
        "OCR text extraction for room numbers, hazard signs, and emergency exits",
        "Contextual memory retaining indoor pathway landmarks",
        "Two-way voice interaction with hands-free speech recognition (STT/TTS)",
      ],
      challenges: [
        "Minimizing processing latency to deliver audio alerts before the user encounters physical hazards.",
      ],
      solutions: [
        "Optimized frame-skipping heuristics and quantized YOLO models for efficient CPU/edge inference.",
      ],
      githubUrl: "https://github.com/keerthiga0905/visionassist-ai",
      liveUrl: "https://visionassist-demo.keerthigam.dev",
    },
    {
      id: "youroute",
      title: "YOUROUTE / SAFEROUTE",
      tagline: "Smart Travel Risk Comparison & Safety-First Navigation Platform",
      category: "GEOSPATIAL AI / SAFETY PLATFORM",
      year: "2025",
      status: "Active Prototype",
      description:
        "Smart navigation platform for Tamil Nadu comparing 4 candidate routes based on distance, travel time, and safety risk levels using Leaflet maps, routing algorithms, and real-world datasets on streetlights, accidents, and hazards.",
      image: "/assets/projects/routemap.jpg",
      problem:
        "Traditional GPS navigation calculates solely for the fastest travel time, frequently directing pedestrians and solo travelers through unlit, isolated, or hazardous routes.",
      myRole:
        "Full-Stack & Geospatial Developer. Integrated Leaflet.js with OpenStreetMap, algorithmic route weighting, and safety scoring metrics.",
      technologies: [
        "TypeScript",
        "React",
        "Leaflet.js",
        "OpenStreetMap",
        "Routing Algorithms",
        "Geospatial Data",
        "Python",
      ],
      architecture:
        "Geospatial routing engine built on OpenStreetMap & Leaflet.js, connecting to a Python backend analyzing contextual safety indices, lighting levels, and route distances to deliver multi-route comparative safety analytics.",
      features: [
        "Comparative route analysis: Fastest vs. Highest Safety Score route",
        "Contextual safety heatmap overlays and risk index scoring",
        "Color-coded risk indicators for streetlights, road hazards, and density",
        "Voice-guided navigation cues for turning points and safe zones",
      ],
      challenges: [
        "Synthesizing multiple heterogeneous risk metrics into a reliable single numerical safety score.",
      ],
      solutions: [
        "Developed a weighted normalization algorithm factoring ambient street lighting, distance, and density.",
      ],
      githubUrl: "https://github.com/keerthiga0905/Youroute-",
      liveUrl: "https://safetypredictor-demo.keerthigam.dev",
    },
    {
      id: "identix",
      title: "IDENTIX",
      tagline: "Facial Recognition & Real-Time Attendance Monitoring Platform",
      category: "AI & COMPUTER VISION / SECURITY",
      year: "2025",
      status: "Production Ready Architecture",
      description:
        "Intelligent facial recognition and monitoring system for schools, colleges, and offices. Identifies registered individuals, automates attendance tracking, detects unknown faces via live camera feeds, with admin verification dashboard.",
      image: "/assets/projects/identix.jpg",
      problem:
        "Manual attendance tracking causes long lines, proxy marking, and poor security visibility regarding unrecognized visitors in academic and corporate facilities.",
      myRole:
        "AI Lead & Frontend Developer. Engineered the face recognition pipeline, camera feed interface, and real-time attendance dashboard.",
      technologies: [
        "TypeScript",
        "React",
        "Python",
        "OpenCV",
        "FaceNet / DeepFace",
        "FastAPI",
        "Tailwind CSS",
      ],
      architecture:
        "Real-time video ingestion pipeline processing entrance camera streams, running face alignment and feature vector embeddings to match registered user profiles, logging attendance timestamps directly to a centralized SQL store.",
      features: [
        "Real-time multi-face detection with 99%+ biometric match confidence",
        "Automated attendance logging with entry/exit timestamps",
        "Unknown intruder / visitor detection with instant admin alerts",
        "Comprehensive exportable daily and monthly attendance analytics",
      ],
      challenges: [
        "Maintaining high accuracy under variable indoor lighting and angled faces.",
      ],
      solutions: [
        "Applied histogram equalization and multi-angle facial landmark alignment.",
      ],
      githubUrl: "https://github.com/keerthiga0905/Identix",
      liveUrl: "https://identix-demo.keerthigam.dev",
    },
    {
      id: "tablebite",
      title: "TABLEBITE",
      tagline: "Smart QR Digital Cafe Ordering & Kitchen Management Platform",
      category: "FULL STACK WEB / COMMERCE",
      year: "2025",
      status: "Deployed Web Platform",
      description:
        "Smart digital cafe ordering platform allowing customers to scan a table QR code, browse interactive menus, customize items, place instant orders, and track preparation status with real-time kitchen display.",
      image: "/assets/projects/tablebite.jpg",
      problem:
        "Diners experience long wait times to catch waiters' attention, while cafe kitchens struggle with disorganized paper slips and order confusion during peak hours.",
      myRole:
        "Full Stack Developer & UI Designer. Designed the customer mobile-responsive QR menu, live cart, and the kitchen order management view.",
      technologies: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Node.js / Express",
        "WebSockets",
        "MongoDB",
      ],
      architecture:
        "Event-driven SPA with real-time WebSocket communication between customer table orders and kitchen status displays, maintaining optimistic UI updates for instant feedback.",
      features: [
        "Zero-app-install QR code access from customer smartphone browsers",
        "Real-time kitchen order dispatch and live food preparation tracking",
        "Table call assistance button and item customization modifiers",
        "Manager analytics for revenue, top-selling dishes, and average table turnaround",
      ],
      challenges: [
        "Keeping table sessions synchronized when multiple guests at the same table add items.",
      ],
      solutions: [
        "Implemented shared table-room WebSocket state with conflict-free order merging.",
      ],
      githubUrl: "https://github.com/keerthiga0905/TableBite",
      liveUrl: "https://tablebite-demo.keerthigam.dev",
    },
    {
      id: "timetable-generator",
      title: "TIMETABLE GENERATOR",
      tagline: "Automated Academic Scheduling & Faculty Allocation System",
      category: "FULL STACK WEB / AUTOMATION",
      year: "2024 - 2025",
      status: "Deployed Web Application",
      description:
        "Automatic timetable generator for faculty and students. Implements constraint-based scheduling logic, manages instructor workloads and subjects via relational database, with simple clean UI for input and display.",
      image: "/assets/projects/timetable.jpg",
      problem:
        "Academic departments spend days resolving complex scheduling clashes between teacher availabilities, room sizes, and curriculum weekly hour constraints.",
      myRole:
        "Full Stack Developer. Architected the relational database schema, constraint solver logic, and responsive Flask web interface.",
      technologies: [
        "Python (Flask)",
        "MySQL",
        "SQLite",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      architecture:
        "Python Flask MVC web application backed by MySQL/SQLite database storing faculty availability, subjects, and batch constraints, generating conflict-free timetable grids automatically.",
      features: [
        "Automated clash-free schedule creation across faculty and batches",
        "Faculty availability, subject credit hours, and room constraint management",
        "Intuitive web interface for inputting curriculum rules and viewing weekly grids",
        "Printable and exportable timetable views",
      ],
      challenges: [
        "Preventing scheduling deadlocks when faculty constraints overlap.",
      ],
      solutions: [
        "Implemented backtracking constraint-satisfaction heuristics to optimize timetable allocation.",
      ],
      githubUrl: "https://github.com/keerthiga0905/TIME-TABLE-GENERATION-NEW",
      liveUrl: "https://timetable-demo.keerthigam.dev",
    },
    {
      id: "skyport",
      title: "SKYPORT",
      tagline: "Interactive Airport Management System with 8086 Assembly Logic",
      category: "SYSTEMS & FULL STACK / FLASK",
      year: "2024",
      status: "Completed System",
      description:
        "Interactive airport management system built with Python Flask, HTML, CSS, and JavaScript, featuring 8086 Assembly-inspired algorithms for passenger registration, boarding pass generation, baggage calculation, and seat allocation.",
      image: "/assets/projects/skyport.jpg",
      problem:
        "Airport operational software requires deterministic, low-level data validation and high-reliability booking calculation models.",
      myRole:
        "Lead Developer. Programmed the flight scheduling engine, seat mapping matrix, and passenger check-in routines.",
      technologies: [
        "Python (Flask)",
        "8086 Assembly Logic",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      architecture:
        "Flask web service coordinating passenger manifest records, invoking optimized register-level algorithms for baggage allowance check and seat reservation validation.",
      features: [
        "Real-time flight status and departure board simulation",
        "Interactive graphical seat allocation grid (Available, Selected, Crew)",
        "Automatic boarding pass generation with formatted ticket layout",
        "Deterministic baggage weight fee calculation routines",
      ],
      challenges: [
        "Simulating low-level assembly calculation constraints accurately in a modern web environment.",
      ],
      solutions: [
        "Designed clean modular interfaces translating register arithmetic into efficient Python business logic.",
      ],
      githubUrl: "https://github.com/keerthiga0905/SkyPort",
      liveUrl: "https://skyport-demo.keerthigam.dev",
    },
    {
      id: "hybrid-transfer",
      title: "HYBRID PROTOCOL CHAT & FILE SYSTEM",
      tagline: "Dual TCP/UDP Client-Server Architecture for File Transfer & Chat",
      category: "COMPUTER NETWORKS / DISTRIBUTED SYSTEMS",
      year: "2024",
      status: "Published System",
      description:
        "Client-server application utilizing both transport layer protocols (TCP and UDP) in a single unified architecture. Uses TCP for ordered, error-free file transfer and UDP for low-latency live messaging.",
      image: "/assets/projects/hybrid_transfer.jpg",
      problem:
        "Network applications have conflicting transport requirements: file transfers require strict zero packet loss (TCP), while live chat and streaming demand minimal latency without blocking on retransmissions (UDP).",
      myRole:
        "Systems & Network Programmer. Designed socket threading architecture, protocol handshakes, and packet verification telemetry.",
      technologies: [
        "Python",
        "Socket Programming",
        "TCP / IP",
        "UDP Protocol",
        "Multithreading",
      ],
      architecture:
        "Concurrent multithreaded daemon running simultaneous TCP listener for chunked binary file verification and UDP datagram listener for rapid real-time peer messaging.",
      features: [
        "Simultaneous high-speed TCP binary file transmission with checksum verification",
        "Low-latency UDP datagram live chat with instant broadcast",
        "Real-time packet loss, jitter, and throughput telemetry monitoring",
        "Multi-client concurrent session handling without thread starvation",
      ],
      challenges: [
        "Managing socket port bindings and preventing packet collision across concurrent TCP/UDP streams.",
      ],
      solutions: [
        "Employed decoupled worker threads and asynchronous non-blocking socket selectors.",
      ],
      githubUrl: "https://github.com/keerthiga0905/HYBRID-FILE-TRANSFER-AND-LIVE-CHAT-SYSTEM",
      liveUrl: "https://github.com/keerthiga0905/HYBRID-FILE-TRANSFER-AND-LIVE-CHAT-SYSTEM",
    },
    {
      id: "college-rag",
      title: "COLLEGE KNOWLEDGE RAG",
      tagline: "Retrieval-Augmented Academic Knowledge Assistant for Colleges",
      category: "AI / KNOWLEDGE RETRIEVAL",
      year: "2024",
      status: "Active Prototype",
      description:
        "Retrieval-Augmented Generation (RAG) academic knowledge system designed for college institutions, retrieving contextual answers and regulation citations using Python embeddings and vector storage.",
      image: "/assets/projects/cit_knowledge.jpg",
      problem:
        "Students and faculty must manually search hundreds of syllabus PDFs and regulation circulars to find official course policies.",
      myRole:
        "AI & Prompt Engineer. Implemented document chunking, semantic vector index, and contextual question-answering pipeline.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "Vector Embeddings",
        "ChromaDB",
        "React",
      ],
      architecture:
        "Document ingestion engine converting academic regulations into vector embeddings stored in a vector index, retrieving nearest chunks to generate verifiable grounded citations.",
      features: [
        "Grounded academic query answering with highlighted source citations",
        "Semantic similarity search over fragmented syllabus handbooks",
        "Conversational memory for follow-up procedural academic questions",
        "Confidence thresholds preventing hallucinations on unstated regulations",
      ],
      challenges: [
        "Parsing complex tabular course grading schemas from unstructured PDFs.",
      ],
      solutions: [
        "Applied structural table-extraction parsers before semantic chunking.",
      ],
      githubUrl: "https://github.com/keerthiga0905/College-Knowledge-RAG-",
      liveUrl: "https://github.com/keerthiga0905/College-Knowledge-RAG-",
    },
    {
      id: "blood-bank",
      title: "BLOOD BANK JAVA PORTAL",
      tagline: "Desktop Management Application with MySQL, Hibernate & OTP Auth",
      category: "DESKTOP SOFTWARE / ENTERPRISE JAVA",
      year: "2024",
      status: "Completed System",
      description:
        "Java Swing-based desktop application for managing blood bank operations, split into distinct Donor and Hospital portals. Utilizes MySQL database configured via Hibernate and email OTP verification for secure authentication.",
      image: "/assets/projects/editflow.jpg",
      problem:
        "Emergency blood banks require reliable, offline-capable database inventory records and tamper-resistant donor identity verification.",
      myRole:
        "Java Developer. Built the Swing graphical user interface, Hibernate ORM entity mappings, and email OTP verification service.",
      technologies: [
        "Java",
        "Java Swing",
        "Hibernate ORM",
        "MySQL",
        "JavaMail API (OTP)",
      ],
      architecture:
        "Layered desktop architecture with Java Swing UI controllers connecting through Hibernate DAO layers to a MySQL database, with integrated SMTP service for two-factor OTP generation.",
      features: [
        "Dual portal architecture: Hospital Blood Request & Donor Registry",
        "Automated email OTP verification for secure credential management",
        "Blood group stock level tracking with critical shortage alerts",
        "Hibernate ORM transactional persistence ensuring ACID compliance",
      ],
      challenges: [
        "Ensuring thread safety when triggering background email OTP requests from the Swing UI thread.",
      ],
      solutions: [
        "Utilized SwingWorker threads to keep the interface smooth and responsive during SMTP communication.",
      ],
      githubUrl: "https://github.com/keerthiga0905/Blood-Bank-JAVA",
      liveUrl: "https://github.com/keerthiga0905/Blood-Bank-JAVA",
    },
  ],
};
