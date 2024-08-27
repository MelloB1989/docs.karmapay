# Avidia LMS Platform Cohorts Data

## 1. Structure of the Data

### 1.1 Cohort Public Data (Visible before Enrollment)
- **Thumbnail**: Image representing the cohort
- **Title**: Name of the cohort
- **Description**: Brief overview of the cohort
- **Number of Quizzes**: Total quizzes included in the cohort
- **Number of Projects**: Total projects included in the cohort
- **Number of Assessments**: Total assessments included in the cohort
- **Syllabus**: Detailed list of topics covered, including:
  - **Topic Title**: Name of the topic
  - **Description**: A brief overview of the topic content
  - **Start Date**: Expected start date for the topic
  - **End Date**: Expected end date for the topic
- **Live Sessions**:
  - **Dates**: Scheduled dates for live sessions
  - **Topic**: Topics covered in each live session
- **Free Modules**:
  - **Quizzes**: List of free quizzes available to students
  - **Live Sessions**: List of free live sessions available to students
  - **Projects**: List of free projects available to students
  - **Assessments**: List of free assessments available to students
- **Mentor**: List of mentors assigned to the cohort
  - **Name**: Mentor's name
  - **Role**: Mentor's role in the cohort
  - **Bio**: Brief biography of the mentor
  - **Type**: Type of mentor (e.g., AI Mentor, Human Mentor)

### 1.2 Cohort Private Data (Visible after Enrollment)
- **Number of Quizzes Completed**: Quizzes the student has completed
- **Live Sessions Attended**: Number of live sessions attended by the student
- **Number of Assessments Completed**: Assessments the student has completed
- **Number of Projects Completed**: Projects the student has completed
- **Overall Score**: Student's cumulative score based on quizzes, assessments, and projects
- **Rank**: Student's rank compared to other students in the cohort

## 2. Storage Format (JSON)

### 2.1 Cohort Public Data
```json
{
  "cohortId": "1234",
  "thumbnail": "url/to/image.png",
  "title": "Advanced Full-Stack Web Development",
  "description": "Master advanced concepts in web development, including cutting-edge technologies and best practices.",
  "numQuizzes": 12,
  "numProjects": 6,
  "numAssessments": 4,
  "syllabus": [
    {
      "topicTitle": "Advanced JavaScript and TypeScript",
      "description": "Dive deep into modern JavaScript and TypeScript, exploring advanced concepts such as closures, async/await, and type safety.",
      "startDate": "2024-09-01",
      "endDate": "2024-09-07"
    },
    {
      "topicTitle": "React.js and State Management with Redux",
      "description": "Learn how to build complex UIs using React.js, and manage application state efficiently with Redux.",
      "startDate": "2024-09-08",
      "endDate": "2024-09-14"
    },
    {
      "topicTitle": "Server-Side Rendering with Next.js",
      "description": "Understand the benefits of server-side rendering and learn how to build SEO-friendly, high-performance web applications using Next.js.",
      "startDate": "2024-09-15",
      "endDate": "2024-09-21"
    },
    {
      "topicTitle": "GraphQL and Apollo Client",
      "description": "Master GraphQL for efficient data fetching and learn to integrate it with the Apollo Client in your web applications.",
      "startDate": "2024-09-22",
      "endDate": "2024-09-28"
    },
    {
      "topicTitle": "Microservices Architecture with Node.js and Docker",
      "description": "Learn to build scalable and maintainable applications using microservices architecture, leveraging Node.js and Docker.",
      "startDate": "2024-09-29",
      "endDate": "2024-10-05"
    },
    {
      "topicTitle": "CI/CD Pipelines with Jenkins and GitHub Actions",
      "description": "Automate your development process by setting up Continuous Integration and Continuous Deployment pipelines using Jenkins and GitHub Actions.",
      "startDate": "2024-10-06",
      "endDate": "2024-10-12"
    }
  ],
  "liveSessions": [
    {
      "date": "2024-09-01",
      "topic": "Kickoff: Understanding Advanced JavaScript"
    },
    {
      "date": "2024-09-15",
      "topic": "Server-Side Rendering: Best Practices"
    },
    {
      "date": "2024-09-29",
      "topic": "Microservices Architecture Overview"
    }
  ],
  "freeModules": {
    "quizzes": ["Intro to TypeScript", "React.js Basics"],
    "liveSessions": ["Kickoff: Understanding Advanced JavaScript"],
    "projects": ["Simple REST API with Node.js"],
    "assessments": ["JavaScript Advanced Concepts Assessment"]
  },
  "mentors": [
    {
      "name": "Alice Smith",
      "role": "AI Mentor",
      "bio": "Alice is an AI mentor with expertise in web development and machine learning.",
      "type": "AI"
    },
    {
      "name": "Bob Johnson",
      "role": "Human Mentor",
      "bio": "Bob is a seasoned web developer with years of experience in building web applications.",
      "type": "Human"
    }
  ]
}
```

### 2.2 Cohort Private Data (After Enrollment)
```json
{
  "studentId": "5678",
  "cohortId": "1234",
  "quizzesCompleted": 8,
  "liveSessionsAttended": 2,
  "assessmentsCompleted": 3,
  "projectsCompleted": 4,
  "overallScore": 88,
  "rank": 12
}
```

## 3. Example Data

### 3.1 Cohort Public Data Example
```json
{
  "cohortId": "1234",
  "thumbnail": "https://example.com/images/advanced-fullstack.png",
  "title": "Advanced Full-Stack Web Development",
  "description": "Master advanced concepts in web development, including cutting-edge technologies and best practices.",
  "numQuizzes": 12,
  "numProjects": 6,
  "numAssessments": 4,
  "syllabus": [
    {
      "topicTitle": "Advanced JavaScript and TypeScript",
      "description": "Dive deep into modern JavaScript and TypeScript, exploring advanced concepts such as closures, async/await, and type safety.",
      "startDate": "2024-09-01",
      "endDate": "2024-09-07"
    },
    {
      "topicTitle": "React.js and State Management with Redux",
      "description": "Learn how to build complex UIs using React.js, and manage application state efficiently with Redux.",
      "startDate": "2024-09-08",
      "endDate": "2024-09-14"
    },
    {
      "topicTitle": "Server-Side Rendering with Next.js",
      "description": "Understand the benefits of server-side rendering and learn how to build SEO-friendly, high-performance web applications using Next.js.",
      "startDate": "2024-09-15",
      "endDate": "2024-09-21"
    },
    {
      "topicTitle": "GraphQL and Apollo Client",
      "description": "Master GraphQL for efficient data fetching and learn to integrate it with the Apollo Client in your web applications.",
      "startDate": "2024-09-22",
      "endDate": "2024-09-28"
    },
    {
      "topicTitle": "Microservices Architecture with Node.js and Docker",
      "description": "Learn to build scalable and maintainable applications using microservices architecture, leveraging Node.js and Docker.",
      "startDate": "2024-09-29",
      "endDate": "2024-10-05"
    },
    {
      "topicTitle": "CI/CD Pipelines with Jenkins and GitHub Actions",
      "description": "Automate your development process by setting up Continuous Integration and Continuous Deployment pipelines using Jenkins and GitHub Actions.",
      "startDate": "2024-10-06",
      "endDate": "2024-10-12"
    }
  ],
  "liveSessions": [
    {
      "date": "2024-09-01",
      "topic": "Kickoff: Understanding Advanced JavaScript"
    },
    {
      "date": "2024-09-15",
      "topic": "Server-Side Rendering: Best Practices"
    },
    {
      "date": "2024-09-29",
      "topic": "Microservices Architecture Overview"
    }
  ],
  "freeModules": {
    "quizzes": ["Intro to TypeScript", "React.js Basics"],
    "liveSessions": ["Kickoff: Understanding Advanced JavaScript"],
    "projects": ["Simple REST API with Node.js"],
    "assessments": ["JavaScript Advanced Concepts Assessment"]
  },
  "mentors": [
    {
      "name": "Alice Smith",
      "role": "AI Mentor",
      "bio": "Alice is an AI mentor with expertise in web development and machine learning.",
      "type": "AI"
    },
    {
      "name": "Bob Johnson",
      "role": "Human Mentor",
      "bio": "Bob is a seasoned web developer with years of experience in building web applications.",
      "type": "Human"
    }
  ]
}
```

### 3.2 Cohort Private Data Example
```json
{
  "studentId": "5678",
  "cohortId": "1234",
  "quizzesCompleted": 8,
  "liveSessionsAttended": 2,
  "assessmentsCompleted": 3,
  "projectsCompleted": 4,
  "overallScore": 88,
  "rank": 12
}
```
