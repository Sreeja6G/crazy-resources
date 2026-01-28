import React, { useState } from "react";

export default function FreeCourses({ setCurrentPage }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    // Web Development
    { id: 1, title: "The Complete JavaScript Course", platform: "freeCodeCamp", category: "Web Development", duration: "40 hours", level: "Beginner", certificate: true, rating: 4.8, students: "1.2M+", description: "Master modern JavaScript from basics to advanced concepts with practical projects.", link: "https://www.freecodecamp.org/learn/javascript/", skills: ["JavaScript", "Web APIs", "DOM", "ES6+"], projects: ["Todo App", "Weather App", "Game Development"] },
    { id: 2, title: "React for Beginners", platform: "Scrimba", category: "Web Development", duration: "30 hours", level: "Beginner", certificate: true, rating: 4.7, students: "500K+", description: "Learn React through interactive lessons and real-world projects.", link: "https://scrimba.com/learn/learnreact", skills: ["React", "JSX", "Hooks", "State Management"], projects: ["Quiz App", "E-commerce Site", "Social Feed"] },
    { id: 3, title: "The Complete Web Development Bootcamp", platform: "freeCodeCamp", category: "Web Development", duration: "60 hours", level: "Beginner to Intermediate", certificate: true, rating: 4.8, students: "1.5M+", description: "Full-stack web development course covering frontend and backend.", link: "https://www.freecodecamp.org/learn/web-development/", skills: ["HTML/CSS", "JavaScript", "Node.js", "Databases"], projects: ["Personal Website", "Full Stack App"] },
    { id: 4, title: "HTML & CSS Crash Course", platform: "Traversy Media (YouTube)", category: "Web Development", duration: "25 hours", level: "Beginner", certificate: true, rating: 4.9, students: "2M+", description: "Learn HTML and CSS fundamentals with practical examples.", link: "https://www.youtube.com/@traversymedia", skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox"], projects: ["Portfolio Website", "Landing Page"] },
    { id: 5, title: "Vue.js 3 Fundamentals", platform: "Scrimba", category: "Web Development", duration: "28 hours", level: "Beginner", certificate: true, rating: 4.6, students: "300K+", description: "Master Vue.js 3 with composition API and reactive systems.", link: "https://scrimba.com/learn/vuejs", skills: ["Vue 3", "Composition API", "Vue Router", "Pinia"], projects: ["Dashboard App", "E-commerce"] },
    { id: 6, title: "Angular for Beginners", platform: "freeCodeCamp", category: "Web Development", duration: "35 hours", level: "Beginner", certificate: true, rating: 4.7, students: "600K+", description: "Complete guide to building modern applications with Angular.", link: "https://www.freecodecamp.org/learn/angular/", skills: ["Angular", "TypeScript", "RxJS", "Components"], projects: ["Todo App", "Task Manager"] },
    { id: 7, title: "Responsive Web Design", platform: "freeCodeCamp", category: "Web Development", duration: "20 hours", level: "Beginner", certificate: true, rating: 4.8, students: "1.8M+", description: "Create responsive websites that work on all devices.", link: "https://www.freecodecamp.org/learn/responsive-web-design/", skills: ["CSS Grid", "Flexbox", "Media Queries", "Mobile First"], projects: ["Responsive Portfolio", "Mobile App UI"] },
    { id: 8, title: "Bootstrap 5 Course", platform: "Scrimba", category: "Web Development", duration: "15 hours", level: "Beginner", certificate: true, rating: 4.5, students: "400K+", description: "Learn Bootstrap 5 for rapid web development.", link: "https://scrimba.com/learn/bootstrap5", skills: ["Bootstrap 5", "Grid System", "Components", "Utilities"], projects: ["Multi-page Website", "Dashboard"] },
    { id: 9, title: "Tailwind CSS Mastery", platform: "Scrimba", category: "Web Development", duration: "20 hours", level: "Beginner", certificate: true, rating: 4.7, students: "350K+", description: "Build beautiful UIs with Tailwind CSS utility-first approach.", link: "https://scrimba.com/learn/tailwind", skills: ["Tailwind CSS", "Responsive Design", "Custom Config", "Plugins"], projects: ["Modern Website", "SaaS Landing"] },
    { id: 10, title: "SASS & CSS Preprocessing", platform: "freeCodeCamp", category: "Web Development", duration: "18 hours", level: "Beginner", certificate: true, rating: 4.6, students: "280K+", description: "Master SASS to write powerful, maintainable stylesheets.", link: "https://www.freecodecamp.org/learn/front-end-development-libraries/", skills: ["SASS/SCSS", "Mixins", "Variables", "Nesting"], projects: ["Design System", "Component Library"] },

    // Programming
    { id: 11, title: "Python for Everybody", platform: "freeCodeCamp", category: "Programming", duration: "35 hours", level: "Beginner", certificate: true, rating: 4.9, students: "2M+", description: "Comprehensive Python course from scratch with real-world applications.", link: "https://www.freecodecamp.org/learn/python-for-everybody/", skills: ["Python Basics", "Functions", "Data Structures", "File Handling"], projects: ["Web Scraper", "Database App"] },
    { id: 12, title: "Java Programming Basics", platform: "GUVI", category: "Programming", duration: "40 hours", level: "Beginner", certificate: true, rating: 4.7, students: "800K+", description: "Learn Java fundamentals with real projects and certifications.", link: "https://www.guvi.in/courses/java/", skills: ["Java Basics", "OOP", "Collections", "File IO"], projects: ["Banking System", "Inventory Manager"] },
    { id: 13, title: "C++ Complete Course", platform: "freeCodeCamp", category: "Programming", duration: "45 hours", level: "Beginner", certificate: true, rating: 4.8, students: "600K+", description: "Learn C++ from basics to advanced programming concepts.", link: "https://www.freecodecamp.org/learn/c++/", skills: ["C++ Basics", "Pointers", "OOP", "STL"], projects: ["Game Engine", "Data Structures"] },
    { id: 14, title: "Go Programming Language", platform: "freeCodeCamp", category: "Programming", duration: "22 hours", level: "Beginner", certificate: true, rating: 4.6, students: "250K+", description: "Learn Go language for systems programming and web services.", link: "https://www.freecodecamp.org/learn/golang/", skills: ["Go Basics", "Goroutines", "Web Servers", "APIs"], projects: ["REST API", "Concurrent Programs"] },
    { id: 15, title: "Rust Programming", platform: "freeCodeCamp", category: "Programming", duration: "30 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "180K+", description: "Master Rust for safe systems programming.", link: "https://www.freecodecamp.org/learn/rust/", skills: ["Rust Basics", "Memory Management", "Ownership", "Traits"], projects: ["System Tool", "File Parser"] },
    { id: 16, title: "Ruby Programming", platform: "freeCodeCamp", category: "Programming", duration: "28 hours", level: "Beginner", certificate: true, rating: 4.5, students: "200K+", description: "Learn Ruby programming language fundamentals.", link: "https://www.freecodecamp.org/learn/ruby/", skills: ["Ruby Basics", "OOP", "Blocks", "Gems"], projects: ["CLI Tool", "Script"] },
    { id: 17, title: "PHP Web Development", platform: "freeCodeCamp", category: "Programming", duration: "32 hours", level: "Beginner", certificate: true, rating: 4.6, students: "500K+", description: "Build web applications with PHP from scratch.", link: "https://www.freecodecamp.org/learn/php/", skills: ["PHP Basics", "Arrays", "Functions", "Database Integration"], projects: ["Blog System", "Contact Form"] },
    { id: 18, title: "Kotlin Programming", platform: "Google Developers", category: "Programming", duration: "20 hours", level: "Beginner", certificate: true, rating: 4.4, students: "150K+", description: "Learn Kotlin for Android and JVM development.", link: "https://developer.android.com/kotlin", skills: ["Kotlin Basics", "Extensions", "Coroutines", "Android"], projects: ["Android App", "Utility Program"] },
    { id: 19, title: "TypeScript Complete Course", platform: "GUVI", category: "Programming", duration: "25 hours", level: "Intermediate", certificate: true, rating: 4.8, students: "700K+", description: "Master TypeScript for type-safe JavaScript development.", link: "https://www.guvi.in/courses/typescript/", skills: ["TypeScript Basics", "Types", "Interfaces", "Generics"], projects: ["Web App", "API Framework"] },
    { id: 20, title: "Dart Programming", platform: "Google Developers", category: "Programming", duration: "18 hours", level: "Beginner", certificate: true, rating: 4.3, students: "100K+", description: "Learn Dart for Flutter app development.", link: "https://dart.dev/guides", skills: ["Dart Basics", "Classes", "Async", "Flutter"], projects: ["Flutter App", "Backend Service"] },

    // Data Science
    { id: 21, title: "Introduction to Data Science", platform: "freeCodeCamp", category: "Data Science", duration: "25 hours", level: "Beginner", certificate: true, rating: 4.6, students: "800K+", description: "Start your data science journey with Python, statistics, and visualization.", link: "https://www.freecodecamp.org/learn/data-analysis-with-python/", skills: ["Python", "Pandas", "Statistics", "Visualization"], projects: ["Data Analysis", "Dashboard Creation"] },
    { id: 22, title: "Machine Learning A-Z", platform: "freeCodeCamp", category: "Data Science", duration: "40 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "400K+", description: "Learn machine learning from A to Z with hands-on projects.", link: "https://www.freecodecamp.org/learn/machine-learning-with-python/", skills: ["ML Algorithms", "Scikit-learn", "TensorFlow", "Python"], projects: ["Prediction Models", "Classification Tasks"] },
    { id: 23, title: "Deep Learning Specialization", platform: "YouTube", category: "Data Science", duration: "60 hours", level: "Advanced", certificate: true, rating: 4.8, students: "300K+", description: "Master deep learning and neural networks.", link: "https://www.youtube.com/results?search_query=deep+learning+specialization", skills: ["Neural Networks", "CNN", "RNN", "TensorFlow"], projects: ["Image Recognition", "NLP Model"] },
    { id: 24, title: "Data Science with R", platform: "freeCodeCamp", category: "Data Science", duration: "30 hours", level: "Beginner", certificate: true, rating: 4.5, students: "350K+", description: "Learn R programming for data science applications.", link: "https://www.freecodecamp.org/learn/scientific-computing-with-python/", skills: ["R Basics", "ggplot2", "dplyr", "Statistics"], projects: ["Statistical Analysis", "Data Visualization"] },
    { id: 25, title: "Natural Language Processing", platform: "freeCodeCamp", category: "Data Science", duration: "35 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "200K+", description: "Learn NLP techniques for text processing and analysis.", link: "https://www.freecodecamp.org/learn/machine-learning-with-python/", skills: ["NLP", "Text Processing", "NLTK", "Transformers"], projects: ["Sentiment Analysis", "Text Classification"] },
    { id: 26, title: "Computer Vision Basics", platform: "freeCodeCamp", category: "Data Science", duration: "28 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "250K+", description: "Build computer vision applications with Python.", link: "https://www.freecodecamp.org/learn/machine-learning-with-python/", skills: ["OpenCV", "Image Processing", "CNN", "Object Detection"], projects: ["Face Recognition", "Image Analysis"] },
    { id: 27, title: "Statistics for Data Science", platform: "freeCodeCamp", category: "Data Science", duration: "22 hours", level: "Beginner", certificate: true, rating: 4.7, students: "600K+", description: "Master statistical concepts essential for data science.", link: "https://www.freecodecamp.org/learn/scientific-computing-with-python/", skills: ["Probability", "Hypothesis Testing", "Regression", "ANOVA"], projects: ["Statistical Study", "A/B Testing"] },
    { id: 28, title: "Time Series Analysis", platform: "GUVI", category: "Data Science", duration: "20 hours", level: "Intermediate", certificate: true, rating: 4.4, students: "150K+", description: "Learn to analyze and forecast time series data.", link: "https://www.guvi.in/courses/time-series/", skills: ["ARIMA", "Forecasting", "Trend Analysis", "Seasonality"], projects: ["Stock Prediction", "Weather Forecast"] },
    { id: 29, title: "Big Data with Hadoop", platform: "YouTube", category: "Data Science", duration: "30 hours", level: "Intermediate", certificate: true, rating: 4.5, students: "180K+", description: "Learn big data processing with Hadoop and Spark.", link: "https://www.youtube.com/results?search_query=hadoop+spark+tutorial", skills: ["Hadoop", "MapReduce", "Spark", "Distributed Systems"], projects: ["Big Data Pipeline", "Data Analysis"] },
    { id: 30, title: "Excel for Data Analysis", platform: "Google Digital Garage", category: "Data Science", duration: "15 hours", level: "Beginner", certificate: true, rating: 4.6, students: "1M+", description: "Master Excel for business data analysis and reporting.", link: "https://learndigital.withgoogle.com/", skills: ["Excel Formulas", "Pivot Tables", "Charts", "Data Cleaning"], projects: ["Sales Report", "Dashboard"] },

    // Mobile Development
    { id: 31, title: "iOS App Development with Swift", platform: "Apple Developer", category: "Mobile Development", duration: "30 hours", level: "Intermediate", certificate: true, rating: 4.5, students: "200K+", description: "Build native iOS applications using Swift.", link: "https://developer.apple.com/tutorials/swiftui", skills: ["Swift", "UIKit", "Xcode", "App Design"], projects: ["Weather App", "Chat App"] },
    { id: 32, title: "Android Development with Java", platform: "Google Developers", category: "Mobile Development", duration: "35 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "350K+", description: "Create native Android apps with Java.", link: "https://developer.android.com/courses", skills: ["Java", "Android SDK", "Layouts", "Activities"], projects: ["To-Do App", "Weather App"] },
    { id: 33, title: "React Native Basics", platform: "freeCodeCamp", category: "Mobile Development", duration: "25 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "300K+", description: "Learn React Native for cross-platform mobile development.", link: "https://www.freecodecamp.org/learn/react-native/", skills: ["React Native", "JavaScript", "Components", "Navigation"], projects: ["iOS/Android App", "E-commerce App"] },
    { id: 34, title: "Flutter Development", platform: "GUVI", category: "Mobile Development", duration: "32 hours", level: "Beginner", certificate: true, rating: 4.8, students: "500K+", description: "Build beautiful apps for iOS and Android with Flutter.", link: "https://www.guvi.in/courses/flutter/", skills: ["Dart", "Widgets", "State Management", "Firebase"], projects: ["Social App", "Shopping App"] },
    { id: 35, title: "Kotlin for Android", platform: "Google Developers", category: "Mobile Development", duration: "28 hours", level: "Intermediate", certificate: true, rating: 4.5, students: "200K+", description: "Modern Android development using Kotlin.", link: "https://developer.android.com/kotlin", skills: ["Kotlin", "Android Studio", "Jetpack", "Material Design"], projects: ["Note App", "News Reader"] },
    { id: 36, title: "Cross-Platform Mobile Development", platform: "freeCodeCamp", category: "Mobile Development", duration: "40 hours", level: "Advanced", certificate: true, rating: 4.6, students: "150K+", description: "Build apps that work on multiple platforms.", link: "https://www.freecodecamp.org/learn/react-native/", skills: ["React Native", "Firebase", "APIs", "Testing"], projects: ["Multi-platform App", "Backend Integration"] },
    { id: 37, title: "SwiftUI Fundamentals", platform: "Apple Developer", category: "Mobile Development", duration: "20 hours", level: "Beginner", certificate: true, rating: 4.7, students: "250K+", description: "Learn modern iOS development with SwiftUI.", link: "https://developer.apple.com/tutorials/swiftui", skills: ["SwiftUI", "State Management", "Navigation", "Animations"], projects: ["iOS App", "Productivity Tool"] },
    { id: 38, title: "Jetpack Compose", platform: "Google Developers", category: "Mobile Development", duration: "18 hours", level: "Intermediate", certificate: true, rating: 4.4, students: "120K+", description: "Build modern Android UIs with Jetpack Compose.", link: "https://developer.android.com/jetpack/compose", skills: ["Compose", "Kotlin", "Layout", "Animations"], projects: ["Android UI", "Compose App"] },
    { id: 39, title: "Progressive Web Apps", platform: "freeCodeCamp", category: "Mobile Development", duration: "22 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "280K+", description: "Learn to build progressive web applications.", link: "https://www.freecodecamp.org/learn/progressive-web-apps/", skills: ["PWA", "Service Workers", "Offline Support", "Web APIs"], projects: ["Offline App", "Installable App"] },
    { id: 40, title: "Expo & React Native CLI", platform: "Scrimba", category: "Mobile Development", duration: "16 hours", level: "Beginner", certificate: true, rating: 4.5, students: "200K+", description: "Master Expo and React Native CLI for rapid development.", link: "https://scrimba.com/learn/react-native", skills: ["Expo", "CLI", "Navigation", "Components"], projects: ["Mobile App", "Publishing"] },

    // Backend Development
    { id: 41, title: "Node.js & Express Complete Course", platform: "freeCodeCamp", category: "Backend", duration: "35 hours", level: "Beginner", certificate: true, rating: 4.8, students: "900K+", description: "Learn backend development with Node.js and Express.", link: "https://www.freecodecamp.org/learn/back-end-development-and-apis/", skills: ["Node.js", "Express", "REST APIs", "Middleware"], projects: ["REST API", "Chat Server"] },
    { id: 42, title: "Django Web Development", platform: "GUVI", category: "Backend", duration: "40 hours", level: "Beginner", certificate: true, rating: 4.7, students: "600K+", description: "Build web applications with Django framework.", link: "https://www.guvi.in/courses/django/", skills: ["Django", "Models", "Views", "Templates", "ORM"], projects: ["Blog Platform", "E-commerce"] },
    { id: 43, title: "Flask for Python Web Development", platform: "freeCodeCamp", category: "Backend", duration: "25 hours", level: "Beginner", certificate: true, rating: 4.6, students: "400K+", description: "Create lightweight web apps with Flask.", link: "https://www.freecodecamp.org/learn/flask/", skills: ["Flask", "Routing", "Templates", "Databases"], projects: ["Web App", "API Server"] },
    { id: 44, title: "FastAPI Modern Python", platform: "YouTube", category: "Backend", duration: "20 hours", level: "Intermediate", certificate: true, rating: 4.8, students: "250K+", description: "Build fast APIs with FastAPI framework.", link: "https://www.youtube.com/results?search_query=fastapi+tutorial", skills: ["FastAPI", "Async", "Data Validation", "OpenAPI"], projects: ["REST API", "Microservice"] },
    { id: 45, title: "Spring Boot Development", platform: "YouTube", category: "Backend", duration: "38 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "350K+", description: "Learn Java Spring Boot for enterprise applications.", link: "https://www.youtube.com/results?search_query=spring+boot+tutorial", skills: ["Spring Boot", "Annotations", "Controllers", "Services"], projects: ["Web Service", "REST API"] },
    { id: 46, title: "ASP.NET Core Development", platform: "Microsoft Learn", category: "Backend", duration: "32 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "200K+", description: "Build web apps with ASP.NET Core framework.", link: "https://learn.microsoft.com/en-us/training/modules/build-web-api-aspnet-core/", skills: ["ASP.NET Core", "C#", "MVC", "Entity Framework"], projects: ["Web Application", "API"] },
    { id: 47, title: "NestJS Backend Development", platform: "YouTube", category: "Backend", duration: "28 hours", level: "Advanced", certificate: true, rating: 4.7, students: "180K+", description: "Enterprise Node.js with NestJS framework.", link: "https://www.youtube.com/results?search_query=nestjs+tutorial", skills: ["NestJS", "TypeScript", "Decorators", "Modules"], projects: ["Backend Service", "Microservice"] },
    { id: 48, title: "GraphQL API Development", platform: "freeCodeCamp", category: "Backend", duration: "18 hours", level: "Intermediate", certificate: true, rating: 4.8, students: "280K+", description: "Build powerful APIs with GraphQL.", link: "https://www.freecodecamp.org/learn/graphql/", skills: ["GraphQL", "Queries", "Mutations", "Schema Design"], projects: ["GraphQL API", "Data Layer"] },
    { id: 49, title: "Microservices Architecture", platform: "YouTube", category: "Backend", duration: "35 hours", level: "Advanced", certificate: true, rating: 4.6, students: "200K+", description: "Design and build microservices applications.", link: "https://www.youtube.com/results?search_query=microservices+architecture+tutorial", skills: ["Microservices", "Docker", "APIs", "Communication"], projects: ["Microservice App", "Service Mesh"] },
    { id: 50, title: "RESTful API Design", platform: "GUVI", category: "Backend", duration: "16 hours", level: "Intermediate", certificate: true, rating: 4.5, students: "320K+", description: "Master RESTful API design principles.", link: "https://www.guvi.in/courses/rest-api/", skills: ["REST", "HTTP Methods", "Status Codes", "Documentation"], projects: ["REST API", "Documentation"] },

    // Database
    { id: 51, title: "SQL for Data Analysis", platform: "freeCodeCamp", category: "Database", duration: "25 hours", level: "Beginner", certificate: true, rating: 4.7, students: "600K+", description: "Master SQL for data analysis and database management.", link: "https://www.freecodecamp.org/learn/relational-database/", skills: ["SQL Basics", "Joins", "Aggregations", "Data Cleaning"], projects: ["Data Queries", "Analytics Reports"] },
    { id: 52, title: "MongoDB Complete Guide", platform: "GUVI", category: "Database", duration: "22 hours", level: "Beginner", certificate: true, rating: 4.6, students: "400K+", description: "Learn NoSQL database design with MongoDB.", link: "https://www.guvi.in/courses/mongodb/", skills: ["MongoDB", "Documents", "Queries", "Indexing"], projects: ["NoSQL App", "Data Storage"] },
    { id: 53, title: "PostgreSQL Mastery", platform: "YouTube", category: "Database", duration: "28 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "250K+", description: "Master advanced PostgreSQL concepts.", link: "https://www.youtube.com/results?search_query=postgresql+advanced+tutorial", skills: ["PostgreSQL", "Advanced Queries", "Performance", "Transactions"], projects: ["Database Design", "Performance Optimization"] },
    { id: 54, title: "MySQL Complete Guide", platform: "freeCodeCamp", category: "Database", duration: "20 hours", level: "Beginner", certificate: true, rating: 4.6, students: "500K+", description: "Learn MySQL database design and queries.", link: "https://www.freecodecamp.org/learn/relational-database/", skills: ["MySQL", "Tables", "Queries", "Relationships"], projects: ["Database App", "Data Management"] },
    { id: 55, title: "Redis for Caching", platform: "YouTube", category: "Database", duration: "16 hours", level: "Intermediate", certificate: true, rating: 4.5, students: "150K+", description: "Learn Redis for high-performance caching.", link: "https://www.youtube.com/results?search_query=redis+tutorial", skills: ["Redis", "Caching", "Sessions", "Real-time Data"], projects: ["Cache Layer", "Real-time App"] },
    { id: 56, title: "Firebase Real-time Database", platform: "Scrimba", category: "Database", duration: "18 hours", level: "Beginner", certificate: true, rating: 4.7, students: "350K+", description: "Build apps with Firebase real-time database.", link: "https://scrimba.com/learn/firebase", skills: ["Firebase", "Real-time Sync", "Authentication", "Hosting"], projects: ["Real-time App", "Chat Application"] },
    { id: 57, title: "Database Design Fundamentals", platform: "GUVI", category: "Database", duration: "20 hours", level: "Beginner", certificate: true, rating: 4.6, students: "380K+", description: "Learn proper database design principles.", link: "https://www.guvi.in/courses/database-design/", skills: ["ER Diagrams", "Normalization", "Schema Design", "Relationships"], projects: ["Database Schema", "Data Model"] },
    { id: 58, title: "DynamoDB & AWS Databases", platform: "AWS Documentation", category: "Database", duration: "24 hours", level: "Intermediate", certificate: true, rating: 4.5, students: "120K+", description: "Master DynamoDB and AWS database services.", link: "https://docs.aws.amazon.com/dynamodb/", skills: ["DynamoDB", "AWS", "Scalability", "Queries"], projects: ["Serverless App", "Data Storage"] },
    { id: 59, title: "Elasticsearch Complete Guide", platform: "Elastic Documentation", category: "Database", duration: "26 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "140K+", description: "Learn search and analytics with Elasticsearch.", link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html", skills: ["Elasticsearch", "Indexing", "Search", "Analytics"], projects: ["Search Engine", "Log Analysis"] },
    { id: 60, title: "Database Performance Tuning", platform: "GUVI", category: "Database", duration: "18 hours", level: "Advanced", certificate: true, rating: 4.7, students: "100K+", description: "Optimize database performance and queries.", link: "https://www.guvi.in/courses/database-optimization/", skills: ["Query Optimization", "Indexing", "Monitoring", "Scaling"], projects: ["Performance Audit", "Optimization"] },

    // DevOps
    { id: 61, title: "Git & GitHub Crash Course", platform: "Traversy Media (YouTube)", category: "DevOps", duration: "18 hours", level: "Beginner", certificate: true, rating: 4.8, students: "600K+", description: "Master version control and collaboration with Git and GitHub.", link: "https://www.youtube.com/@traversymedia", skills: ["Git Basics", "GitHub", "Branching", "Collaboration"], projects: ["GitHub Portfolio", "Team Project"] },
    { id: 62, title: "Docker & Kubernetes", platform: "Linux Academy", category: "DevOps", duration: "35 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "180K+", description: "Master containerization with Docker and orchestration with Kubernetes.", link: "https://www.acloudguru.com/course/docker-deep-dive", skills: ["Docker", "Kubernetes", "Containers", "Orchestration"], projects: ["Containerize App", "Deploy on K8s"] },
    { id: 63, title: "AWS Fundamentals", platform: "AWS Training", category: "DevOps", duration: "25 hours", level: "Beginner", certificate: true, rating: 4.6, students: "700K+", description: "Learn AWS cloud computing basics.", link: "https://aws.amazon.com/training/", skills: ["AWS", "EC2", "S3", "Lambda"], projects: ["Cloud App", "Deployment"] },
    { id: 64, title: "Azure Cloud Computing", platform: "Microsoft Learn", category: "DevOps", duration: "28 hours", level: "Beginner", certificate: true, rating: 4.5, students: "300K+", description: "Master Microsoft Azure cloud platform.", link: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/", skills: ["Azure", "Virtual Machines", "Databases", "App Services"], projects: ["Cloud Solution", "Infrastructure"] },
    { id: 65, title: "Google Cloud Platform", platform: "Google Cloud", category: "DevOps", duration: "26 hours", level: "Beginner", certificate: true, rating: 4.6, students: "250K+", description: "Learn Google Cloud Platform services.", link: "https://www.cloudskillsboost.google/", skills: ["GCP", "Compute Engine", "BigQuery", "Cloud Functions"], projects: ["GCP App", "Data Pipeline"] },
    { id: 66, title: "CI/CD with Jenkins", platform: "GUVI", category: "DevOps", duration: "22 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "200K+", description: "Implement continuous integration and deployment.", link: "https://www.guvi.in/courses/jenkins/", skills: ["Jenkins", "Pipelines", "Automation", "Testing"], projects: ["CI/CD Pipeline", "Automation"] },
    { id: 67, title: "GitHub Actions Automation", platform: "freeCodeCamp", category: "DevOps", duration: "16 hours", level: "Beginner", certificate: true, rating: 4.8, students: "280K+", description: "Automate workflows with GitHub Actions.", link: "https://www.freecodecamp.org/learn/github-actions/", skills: ["GitHub Actions", "Workflows", "Automation", "Integration"], projects: ["Automated Deployment", "Testing Pipeline"] },
    { id: 68, title: "Terraform Infrastructure as Code", platform: "HashiCorp Learn", category: "DevOps", duration: "24 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "180K+", description: "Manage cloud infrastructure with Terraform.", link: "https://learn.hashicorp.com/terraform", skills: ["Terraform", "HCL", "Modules", "State Management"], projects: ["Infrastructure Code", "Cloud Setup"] },
    { id: 69, title: "Linux System Administration", platform: "GUVI", category: "DevOps", duration: "32 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "400K+", description: "Master Linux administration and shell scripting.", link: "https://www.guvi.in/courses/linux/", skills: ["Linux", "Shell Script", "System Admin", "Networking"], projects: ["System Setup", "Automation Script"] },
    { id: 70, title: "Monitoring with Prometheus", platform: "YouTube", category: "DevOps", duration: "18 hours", level: "Advanced", certificate: true, rating: 4.5, students: "100K+", description: "Monitor applications with Prometheus and Grafana.", link: "https://www.youtube.com/results?search_query=prometheus+grafana+tutorial", skills: ["Prometheus", "Grafana", "Monitoring", "Alerting"], projects: ["Monitoring Setup", "Dashboard"] },

    // Design
    { id: 71, title: "UI/UX Design Fundamentals", platform: "Interaction Design Foundation", category: "Design", duration: "22 hours", level: "Beginner", certificate: true, rating: 4.6, students: "350K+", description: "Learn design principles, user experience, and interface design.", link: "https://www.interaction-design.org/courses", skills: ["Design Principles", "Wireframing", "Prototyping", "User Research"], projects: ["Website Design", "Mobile App Design"] },
    { id: 72, title: "Figma Design Complete Course", platform: "GUVI", category: "Design", duration: "25 hours", level: "Beginner", certificate: true, rating: 4.8, students: "600K+", description: "Master Figma for UI/UX design and collaboration.", link: "https://www.guvi.in/courses/figma/", skills: ["Figma", "Components", "Prototyping", "Design Systems"], projects: ["Design System", "App Mockup"] },
    { id: 73, title: "Adobe XD Complete Guide", platform: "YouTube", category: "Design", duration: "28 hours", level: "Beginner", certificate: true, rating: 4.5, students: "300K+", description: "Learn Adobe XD for UX/UI design.", link: "https://www.youtube.com/results?search_query=adobe+xd+tutorial", skills: ["Adobe XD", "Prototyping", "Animation", "Collaboration"], projects: ["Mobile App UI", "Web Design"] },
    { id: 74, title: "Graphic Design Basics", platform: "YouTube", category: "Design", duration: "20 hours", level: "Beginner", certificate: true, rating: 4.4, students: "250K+", description: "Learn graphic design principles and tools.", link: "https://www.youtube.com/results?search_query=graphic+design+fundamentals+tutorial", skills: ["Color Theory", "Typography", "Layout", "Composition"], projects: ["Brand Identity", "Marketing Material"] },
    { id: 75, title: "Web Design with CSS Grid", platform: "freeCodeCamp", category: "Design", duration: "18 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "400K+", description: "Create beautiful web layouts with CSS Grid.", link: "https://www.freecodecamp.org/learn/responsive-web-design/", skills: ["CSS Grid", "Layouts", "Responsive Design", "Flexbox"], projects: ["Portfolio Website", "Landing Page"] },
    { id: 76, title: "Prototyping with InVision", platform: "YouTube", category: "Design", duration: "16 hours", level: "Beginner", certificate: true, rating: 4.3, students: "150K+", description: "Learn prototyping with InVision Studio.", link: "https://www.youtube.com/results?search_query=invision+prototyping+tutorial", skills: ["Prototyping", "Animation", "User Testing", "Feedback"], projects: ["Interactive Prototype", "User Flow"] },
    { id: 77, title: "Product Design Fundamentals", platform: "Interaction Design Foundation", category: "Design", duration: "24 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "200K+", description: "Learn product design principles and methodologies.", link: "https://www.interaction-design.org/courses", skills: ["User Research", "Product Thinking", "Design Process", "Testing"], projects: ["Product Design", "Case Study"] },
    { id: 78, title: "Animation with After Effects", platform: "YouTube", category: "Design", duration: "26 hours", level: "Intermediate", certificate: true, rating: 4.5, students: "180K+", description: "Create professional animations with After Effects.", link: "https://www.youtube.com/results?search_query=after+effects+tutorial", skills: ["After Effects", "Animation", "Keyframes", "Effects"], projects: ["Motion Graphics", "Product Video"] },
    { id: 79, title: "Color Theory & Psychology", platform: "GUVI", category: "Design", duration: "14 hours", level: "Beginner", certificate: true, rating: 4.7, students: "320K+", description: "Master color theory for better design decisions.", link: "https://www.guvi.in/courses/color-theory/", skills: ["Color Schemes", "Psychology", "Accessibility", "Harmony"], projects: ["Color Palette", "Brand Colors"] },
    { id: 80, title: "Design Thinking Workshop", platform: "YouTube", category: "Design", duration: "12 hours", level: "Beginner", certificate: true, rating: 4.6, students: "400K+", description: "Learn design thinking for problem-solving.", link: "https://www.youtube.com/results?search_query=design+thinking+workshop", skills: ["Design Thinking", "Empathy", "Ideation", "Prototyping"], projects: ["Design Challenge", "Solution"] },

    // Security
    { id: 81, title: "Cybersecurity Basics", platform: "Cisco Learning", category: "Security", duration: "20 hours", level: "Beginner", certificate: true, rating: 4.7, students: "250K+", description: "Understand cybersecurity fundamentals and best practices.", link: "https://www.netacad.com/courses/cybersecurity", skills: ["Network Security", "Encryption", "Firewalls", "Best Practices"], projects: ["Security Audit", "Risk Assessment"] },
    { id: 82, title: "Ethical Hacking Basics", platform: "GUVI", category: "Security", duration: "30 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "400K+", description: "Learn ethical hacking and penetration testing.", link: "https://www.guvi.in/courses/ethical-hacking/", skills: ["Penetration Testing", "Vulnerability Assessment", "Tools", "Techniques"], projects: ["Security Test", "Vulnerability Report"] },
    { id: 83, title: "Web Application Security", platform: "YouTube", category: "Security", duration: "25 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "280K+", description: "Secure web applications from common attacks.", link: "https://www.youtube.com/results?search_query=web+application+security+tutorial", skills: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF"], projects: ["Secure App", "Vulnerability Fix"] },
    { id: 84, title: "Cryptography Fundamentals", platform: "freeCodeCamp", category: "Security", duration: "18 hours", level: "Intermediate", certificate: true, rating: 4.8, students: "200K+", description: "Learn cryptography and encryption algorithms.", link: "https://www.freecodecamp.org/learn/information-security-v7/", skills: ["Encryption", "Hashing", "Key Management", "Algorithms"], projects: ["Encryption Tool", "Secure Communication"] },
    { id: 85, title: "Network Security Advanced", platform: "YouTube", category: "Security", duration: "28 hours", level: "Advanced", certificate: true, rating: 4.6, students: "150K+", description: "Master advanced network security concepts.", link: "https://www.youtube.com/results?search_query=network+security+advanced+tutorial", skills: ["Network Protocols", "IDS/IPS", "VPN", "Firewalls"], projects: ["Network Setup", "Security Implementation"] },
    { id: 86, title: "Cloud Security", platform: "GUVI", category: "Security", duration: "22 hours", level: "Intermediate", certificate: true, rating: 4.5, students: "180K+", description: "Secure cloud infrastructure and applications.", link: "https://www.guvi.in/courses/cloud-security/", skills: ["Cloud Security", "IAM", "Data Protection", "Compliance"], projects: ["Cloud Security Plan", "Configuration"] },
    { id: 87, title: "Mobile App Security", platform: "YouTube", category: "Security", duration: "20 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "120K+", description: "Secure mobile applications against threats.", link: "https://www.youtube.com/results?search_query=mobile+app+security+tutorial", skills: ["App Security", "Data Storage", "API Security", "Testing"], projects: ["Secure App", "Security Implementation"] },
    { id: 88, title: "Incident Response", platform: "GUVI", category: "Security", duration: "18 hours", level: "Advanced", certificate: true, rating: 4.4, students: "80K+", description: "Handle and respond to security incidents.", link: "https://www.guvi.in/courses/incident-response/", skills: ["Incident Detection", "Response Process", "Forensics", "Documentation"], projects: ["Incident Response Plan", "Case Study"] },
    { id: 89, title: "Compliance & GDPR", platform: "YouTube", category: "Security", duration: "16 hours", level: "Intermediate", certificate: true, rating: 4.5, students: "160K+", description: "Learn compliance regulations and GDPR.", link: "https://www.youtube.com/results?search_query=gdpr+compliance+tutorial", skills: ["GDPR", "Compliance", "Data Privacy", "Auditing"], projects: ["Compliance Audit", "Documentation"] },
    { id: 90, title: "Zero Trust Security Model", platform: "Cisco Learning", category: "Security", duration: "14 hours", level: "Advanced", certificate: true, rating: 4.7, students: "100K+", description: "Implement zero trust security principles.", link: "https://www.netacad.com/courses/zero-trust", skills: ["Zero Trust", "Identity", "Verification", "Monitoring"], projects: ["Security Model", "Implementation"] },

    // Cloud Computing
    { id: 91, title: "Cloud Computing Basics (AWS)", platform: "AWS Training", category: "Cloud", duration: "20 hours", level: "Beginner", certificate: true, rating: 4.6, students: "300K+", description: "Introduction to AWS and cloud computing fundamentals.", link: "https://aws.amazon.com/training/", skills: ["AWS Basics", "EC2", "S3", "Databases"], projects: ["Deploy Web App", "Cloud Infrastructure"] },
    { id: 92, title: "Serverless Computing with AWS", platform: "GUVI", category: "Cloud", duration: "24 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "200K+", description: "Build serverless applications with AWS Lambda.", link: "https://www.guvi.in/courses/serverless/", skills: ["Lambda", "API Gateway", "DynamoDB", "S3"], projects: ["Serverless API", "Real-time Application"] },
    { id: 93, title: "Google Cloud Fundamentals", platform: "Google Cloud", category: "Cloud", duration: "18 hours", level: "Beginner", certificate: true, rating: 4.5, students: "250K+", description: "Learn Google Cloud Platform services and tools.", link: "https://www.cloudskillsboost.google/", skills: ["GCP", "Compute", "BigQuery", "Cloud Storage"], projects: ["GCP Application", "Data Analysis"] },
    { id: 94, title: "Azure Fundamentals", platform: "Microsoft Learn", category: "Cloud", duration: "22 hours", level: "Beginner", certificate: true, rating: 4.6, students: "400K+", description: "Master Microsoft Azure cloud platform.", link: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/", skills: ["Azure", "Virtual Machines", "Databases", "Networking"], projects: ["Azure Solution", "Application Deployment"] },
    { id: 95, title: "Multi-Cloud Architecture", platform: "YouTube", category: "Cloud", duration: "26 hours", level: "Advanced", certificate: true, rating: 4.6, students: "120K+", description: "Design applications across multiple cloud providers.", link: "https://www.youtube.com/results?search_query=multi+cloud+architecture+tutorial", skills: ["Multi-Cloud", "Portability", "Migration", "Integration"], projects: ["Multi-Cloud App", "Migration Plan"] },
    { id: 96, title: "Cloud Database Solutions", platform: "GUVI", category: "Cloud", duration: "20 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "180K+", description: "Learn cloud database services and management.", link: "https://www.guvi.in/courses/cloud-databases/", skills: ["Cloud Databases", "Scaling", "Backups", "Security"], projects: ["Cloud Database", "Data Migration"] },
    { id: 97, title: "CDN & Content Delivery", platform: "YouTube", category: "Cloud", duration: "16 hours", level: "Intermediate", certificate: true, rating: 4.4, students: "100K+", description: "Optimize content delivery with CDN services.", link: "https://www.youtube.com/results?search_query=cdn+content+delivery+network+tutorial", skills: ["CDN", "Caching", "Performance", "Optimization"], projects: ["CDN Setup", "Performance Improvement"] },
    { id: 98, title: "Cloud Migration Strategies", platform: "GUVI", category: "Cloud", duration: "24 hours", level: "Advanced", certificate: true, rating: 4.6, students: "140K+", description: "Plan and execute cloud migration projects.", link: "https://www.guvi.in/courses/cloud-migration/", skills: ["Migration Planning", "Tools", "Testing", "Optimization"], projects: ["Migration Plan", "Execution"] },
    { id: 99, title: "Hybrid Cloud Architecture", platform: "YouTube", category: "Cloud", duration: "22 hours", level: "Advanced", certificate: true, rating: 4.5, students: "110K+", description: "Design hybrid cloud solutions combining on-premise and cloud.", link: "https://www.youtube.com/results?search_query=hybrid+cloud+architecture+tutorial", skills: ["Hybrid Architecture", "Integration", "Security", "Management"], projects: ["Hybrid Solution", "Infrastructure Design"] },
    { id: 100, title: "Cloud Cost Optimization", platform: "GUVI", category: "Cloud", duration: "14 hours", level: "Intermediate", certificate: true, rating: 4.8, students: "250K+", description: "Reduce cloud infrastructure costs and optimize spending.", link: "https://www.guvi.in/courses/cloud-cost/", skills: ["Cost Analysis", "Optimization", "Reserved Instances", "Budgeting"], projects: ["Cost Audit", "Optimization Plan"] },

    // Machine Learning
    { id: 101, title: "TensorFlow Complete Course", platform: "freeCodeCamp", category: "Machine Learning", duration: "40 hours", level: "Intermediate", certificate: true, rating: 4.8, students: "350K+", description: "Build deep learning models with TensorFlow and Keras.", link: "https://www.freecodecamp.org/learn/machine-learning-with-python/", skills: ["TensorFlow", "Keras", "Neural Networks", "GPU Computing"], projects: ["Image Recognition", "Text Classification"] },
    { id: 102, title: "PyTorch for Deep Learning", platform: "YouTube", category: "Machine Learning", duration: "35 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "280K+", description: "Master PyTorch for deep learning research.", link: "https://www.youtube.com/results?search_query=pytorch+deep+learning+tutorial", skills: ["PyTorch", "Tensors", "Neural Nets", "Optimization"], projects: ["Deep Learning Model", "Research Project"] },
    { id: 103, title: "Scikit-learn Complete Guide", platform: "GUVI", category: "Machine Learning", duration: "22 hours", level: "Beginner", certificate: true, rating: 4.6, students: "320K+", description: "Master machine learning with Scikit-learn library.", link: "https://www.guvi.in/courses/scikit-learn/", skills: ["Scikit-learn", "Model Selection", "Pipelines", "Metrics"], projects: ["ML Pipeline", "Model Evaluation"] },
    { id: 104, title: "Reinforcement Learning", platform: "YouTube", category: "Machine Learning", duration: "30 hours", level: "Advanced", certificate: true, rating: 4.6, students: "180K+", description: "Learn reinforcement learning algorithms and applications.", link: "https://www.youtube.com/results?search_query=reinforcement+learning+tutorial", skills: ["Q-Learning", "Policy Gradient", "DQN", "Game AI"], projects: ["Game AI", "Robot Control"] },
    { id: 105, title: "Feature Engineering", platform: "YouTube", category: "Machine Learning", duration: "18 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "250K+", description: "Master feature engineering techniques for better models.", link: "https://www.youtube.com/results?search_query=feature+engineering+machine+learning+tutorial", skills: ["Feature Selection", "Creation", "Scaling", "Transformation"], projects: ["Feature Pipeline", "Model Improvement"] },
    { id: 106, title: "XGBoost & Gradient Boosting", platform: "YouTube", category: "Machine Learning", duration: "20 hours", level: "Intermediate", certificate: true, rating: 4.8, students: "220K+", description: "Advanced boosting algorithms for high-performance models.", link: "https://www.youtube.com/results?search_query=xgboost+gradient+boosting+tutorial", skills: ["XGBoost", "Boosting", "Hyperparameter Tuning", "Optimization"], projects: ["Competition Model", "Prediction System"] },
    { id: 107, title: "Generative AI & LLMs", platform: "GUVI", category: "Machine Learning", duration: "28 hours", level: "Advanced", certificate: true, rating: 4.9, students: "400K+", description: "Learn generative AI and large language models.", link: "https://www.guvi.in/courses/generative-ai/", skills: ["Transformers", "GPT", "Prompting", "Fine-tuning"], projects: ["AI Application", "Custom Model"] },
    { id: 108, title: "Computer Vision Projects", platform: "YouTube", category: "Machine Learning", duration: "25 hours", level: "Intermediate", certificate: true, rating: 4.7, students: "200K+", description: "Build real-world computer vision applications.", link: "https://www.youtube.com/results?search_query=computer+vision+projects+tutorial", skills: ["CNN", "Object Detection", "Segmentation", "Pose Estimation"], projects: ["Detection System", "Analysis Tool"] },
    { id: 109, title: "Time Series Forecasting", platform: "GUVI", category: "Machine Learning", duration: "22 hours", level: "Intermediate", certificate: true, rating: 4.6, students: "160K+", description: "Master time series analysis and forecasting.", link: "https://www.guvi.in/courses/time-series-forecasting/", skills: ["ARIMA", "LSTM", "Forecasting", "Analysis"], projects: ["Stock Prediction", "Demand Forecast"] },
    { id: 110, title: "AutoML & Model Selection", platform: "YouTube", category: "Machine Learning", duration: "16 hours", level: "Advanced", certificate: true, rating: 4.5, students: "120K+", description: "Automate machine learning model selection and tuning.", link: "https://www.youtube.com/results?search_query=automl+automated+machine+learning+tutorial", skills: ["AutoML", "Model Selection", "Tuning", "Optimization"], projects: ["AutoML Pipeline", "Model Comparison"] },
  ];

  const categories = ["All", "Web Development", "Programming", "Data Science", "Mobile Development", "Backend", "Database", "DevOps", "Design", "Security", "Cloud", "Machine Learning"];

  const categoryColors = {
    "Web Development": "#3b82f6",
    "Programming": "#8b5cf6",
    "Data Science": "#ec4899",
    "Mobile Development": "#f59e0b",
    "Backend": "#14b8a6",
    "Database": "#f97316",
    "DevOps": "#06b6d4",
    "Design": "#10b981",
    "Security": "#ef4444",
    "Cloud": "#6366f1",
    "Machine Learning": "#f59e0b",
    "Marketing": "#f43f5e",
    "All": "#06b6d4",
  };

  const filteredCourses = courses
    .filter(course => selectedCategory === "All" || course.category === selectedCategory)
    .filter(course => {
      const searchLower = searchQuery.toLowerCase();
      return (
        course.title.toLowerCase().includes(searchLower) ||
        course.description.toLowerCase().includes(searchLower) ||
        course.platform.toLowerCase().includes(searchLower) ||
        course.skills.some(skill => skill.toLowerCase().includes(searchLower)) ||
        course.category.toLowerCase().includes(searchLower)
      );
    });

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>🚀 Crazy Resources</h1>
        <button onClick={() => setCurrentPage("home")} style={styles.backButton}>
          ← Back to Home
        </button>
      </nav>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div style={styles.content}>
          <h2 style={styles.title}>🎓 Free Courses & Certifications</h2>
          <p style={styles.subtitle}>
            Earn industry-recognized certificates for free. Boost your resume and career prospects.
          </p>

          {/* Stats */}
          <div style={styles.statsContainer}>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>{courses.length}+</div>
              <div style={styles.statLabel}>Free Courses</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>Certified</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>10M+</div>
              <div style={styles.statLabel}>Students Enrolled</div>
            </div>
          </div>

          {/* Advanced Search Bar */}
          <div style={styles.searchContainer}>
            <div style={styles.searchWrapper}>
              <span style={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search courses by name, skill, platform... (e.g., Python, React, AWS)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={styles.clearButton}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            {searchQuery && (
              <div style={styles.searchResults}>
                Found <span style={styles.resultCount}>{filteredCourses.length}</span> {filteredCourses.length === 1 ? "course" : "courses"}
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div style={styles.categoryFilter}>
            <h3 style={styles.filterTitle}>Filter by Category:</h3>
            <div style={styles.categoryButtons}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    ...styles.categoryBtn,
                    ...(selectedCategory === category ? styles.categoryBtnActive : {}),
                    borderColor: categoryColors[category] || categoryColors["All"],
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div style={styles.coursesGrid}>
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                style={{
                  ...styles.courseCard,
                  borderTopColor: categoryColors[course.category],
                }}
              >
                <div style={styles.courseHeader}>
                  <h3 style={styles.courseTitle}>{course.title}</h3>
                  <span
                    style={{
                      ...styles.platformBadge,
                      backgroundColor: categoryColors[course.category],
                    }}
                  >
                    {course.platform}
                  </span>
                </div>

                <div style={styles.courseMetaInfo}>
                  <div style={styles.metaItem}>
                    <span style={styles.metaLabel}>📚 {course.category}</span>
                  </div>
                  <div style={styles.metaItem}>
                    <span style={styles.metaLabel}>⏱️ {course.duration}</span>
                  </div>
                </div>

                <div style={styles.ratingRow}>
                  <div style={styles.rating}>
                    ⭐ {course.rating} ({course.students})
                  </div>
                  <div style={styles.levelBadge}>{course.level}</div>
                </div>

                <p style={styles.courseDescription}>{course.description}</p>

                <button
                  onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                  style={styles.expandButton}
                >
                  {expandedCourse === course.id ? "Show Less ▲" : "Show More ▼"}
                </button>

                {expandedCourse === course.id && (
                  <div style={styles.expandedContent}>
                    <div style={styles.skillsSection}>
                      <h4 style={styles.sectionTitle}>🎯 Skills You'll Learn:</h4>
                      <div style={styles.skillsList}>
                        {course.skills.map((skill, idx) => (
                          <span key={idx} style={styles.skillTag}>
                            ✓ {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={styles.projectsSection}>
                      <h4 style={styles.sectionTitle}>🏗️ Build These Projects:</h4>
                      <div style={styles.projectsList}>
                        {course.projects.map((project, idx) => (
                          <div key={idx} style={styles.projectItem}>
                            🔨 {project}
                          </div>
                        ))}
                      </div>
                    </div>

                    {course.certificate && (
                      <div style={styles.certBadge}>
                        🏅 Get Certified After Completion
                      </div>
                    )}

                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.enrollButton}
                    >
                      🚀 Enroll Free Now
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div style={styles.tipsSection}>
            <h3 style={styles.tipsTitle}>💡 How to Get the Most Out of Free Courses</h3>
            <div style={styles.tipsGrid}>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>🎯</span>
                <h4>Set Goals</h4>
                <p>Define what you want to learn and complete courses with purpose.</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>⏰</span>
                <h4>Stay Consistent</h4>
                <p>Dedicate 1-2 hours daily. Consistency trumps cramming.</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>🏗️</span>
                <h4>Build Projects</h4>
                <p>Don't just watch videos. Implement projects as you learn.</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>🏅</span>
                <h4>Get Certified</h4>
                <p>Complete courses and earn certificates. Add to your LinkedIn profile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #0f172a, #1e1b4b, #16213e)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#f1f5f9",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
    backdropFilter: "blur(10px)",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#06b6d4",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#06b6d4",
    background: "transparent",
    border: "2px solid #06b6d4",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  mainSection: {
    padding: "60px 20px",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "48px",
    color: "#06b6d4",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: "40px",
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },
  statBox: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(16, 185, 129, 0.15))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
  },
  statNumber: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginBottom: "8px",
  },
  statLabel: {
    fontSize: "14px",
    color: "#cbd5e1",
  },
  searchContainer: {
    marginBottom: "40px",
  },
  searchWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.1))",
    border: "2px solid rgba(6, 182, 212, 0.4)",
    borderRadius: "16px",
    padding: "15px 20px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(6, 182, 212, 0.1)",
  },
  searchIcon: {
    fontSize: "24px",
    marginRight: "12px",
    marginLeft: "8px",
  },
  searchInput: {
    flex: 1,
    background: "transparent",
    border: "none",
    color: "#f1f5f9",
    fontSize: "16px",
    fontWeight: "500",
    outline: "none",
    padding: "8px 12px",
    fontFamily: "inherit",
  },
  clearButton: {
    background: "rgba(239, 68, 68, 0.2)",
    border: "1px solid rgba(239, 68, 68, 0.3)",
    color: "#fca5a5",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "8px",
  },
  searchResults: {
    marginTop: "12px",
    padding: "12px 20px",
    background: "rgba(34, 197, 94, 0.1)",
    border: "1px solid rgba(34, 197, 94, 0.2)",
    borderRadius: "10px",
    fontSize: "14px",
    color: "#86efac",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  resultCount: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#22c55e",
    background: "rgba(34, 197, 94, 0.2)",
    padding: "2px 8px",
    borderRadius: "6px",
  },
  categoryFilter: {
    background: "rgba(30, 27, 75, 0.5)",
    border: "1px solid rgba(100, 116, 139, 0.2)",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "40px",
  },
  filterTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#cbd5e1",
    margin: "0 0 15px 0",
  },
  categoryButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  categoryBtn: {
    padding: "8px 16px",
    background: "transparent",
    color: "#cbd5e1",
    border: "2px solid rgba(100, 116, 139, 0.3)",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  categoryBtnActive: {
    background: "rgba(6, 182, 212, 0.2)",
    color: "#06b6d4",
    borderColor: "#06b6d4",
  },
  coursesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },
  courseCard: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 27, 75, 0.8))",
    border: "2px solid rgba(100, 116, 139, 0.2)",
    borderRadius: "12px",
    borderTop: "4px solid",
    padding: "24px",
    transition: "all 0.3s ease",
  },
  courseHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "12px",
  },
  courseTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: 0,
    flex: 1,
  },
  platformBadge: {
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: "600",
    color: "#fff",
    whiteSpace: "nowrap",
  },
  courseMetaInfo: {
    display: "flex",
    gap: "12px",
    marginBottom: "12px",
    flexWrap: "wrap",
  },
  metaItem: {
    fontSize: "13px",
    color: "#cbd5e1",
  },
  metaLabel: {
    fontWeight: "500",
  },
  ratingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    fontSize: "13px",
  },
  rating: {
    color: "#fbbf24",
    fontWeight: "600",
  },
  levelBadge: {
    background: "rgba(139, 92, 246, 0.2)",
    color: "#d8b4fe",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
    border: "1px solid rgba(139, 92, 246, 0.3)",
  },
  courseDescription: {
    fontSize: "14px",
    color: "#cbd5e1",
    lineHeight: "1.5",
    margin: "12px 0",
  },
  expandButton: {
    width: "100%",
    padding: "10px",
    background: "rgba(6, 182, 212, 0.2)",
    color: "#06b6d4",
    border: "1px solid rgba(6, 182, 212, 0.4)",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  expandedContent: {
    marginTop: "16px",
    paddingTop: "16px",
    borderTop: "1px solid rgba(100, 116, 139, 0.2)",
  },
  skillsSection: {
    marginBottom: "16px",
  },
  projectsSection: {
    marginBottom: "16px",
  },
  sectionTitle: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#fbbf24",
    margin: "0 0 10px 0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  skillsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  skillTag: {
    background: "rgba(34, 197, 94, 0.15)",
    color: "#86efac",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "500",
    border: "1px solid rgba(34, 197, 94, 0.2)",
  },
  projectsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "8px",
  },
  projectItem: {
    background: "rgba(251, 191, 36, 0.15)",
    color: "#fcd34d",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "500",
    border: "1px solid rgba(251, 191, 36, 0.2)",
    textAlign: "center",
  },
  certBadge: {
    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15))",
    border: "1px solid rgba(16, 185, 129, 0.3)",
    color: "#86efac",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "12px",
    textAlign: "center",
  },
  enrollButton: {
    display: "block",
    padding: "12px",
    background: "linear-gradient(135deg, #06b6d4, #10b981)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    textAlign: "center",
    transition: "all 0.3s ease",
    marginTop: "12px",
  },
  tipsSection: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.9))",
    border: "2px solid rgba(16, 185, 129, 0.2)",
    borderRadius: "16px",
    padding: "40px",
  },
  tipsTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#86efac",
    textAlign: "center",
  },
  tipsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  tipCard: {
    background: "rgba(30, 27, 75, 0.6)",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid rgba(16, 185, 129, 0.2)",
    textAlign: "center",
  },
  tipIcon: {
    fontSize: "32px",
    display: "block",
    marginBottom: "12px",
  },
};
