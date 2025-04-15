const jobs = [
  {
    "name": "Software Engineer at CCC",
    "description": {
      "job_title": "Associate Software Engineer",
      "company_name": "CCC Intelligent Solutions",
      "job_location": "Chicago, IL",
      "date_range": "August 2022 - January 2025",
      "description_text": [
        "Built and maintained CI/CD workflows for serverless deployments using Python, improving deployment speed by 60% while maintaining code quality standards.",
        "Built high-performance asynchronous test infrastructure using Python and Locust, preventing CPU race conditions and improving system monitoring by 50%.",
        "Architected and maintained a Python and Terraform-based cloud infrastructure on AWS, hosting 30+ models and ensuring high availability and system stability.",
        "Managed ambiguity in AI project requirements by creating proof-of-concepts and iterative development approaches that delivered tangible results while refining objectives."
      ],
      "technologies_used": [
        "Terraform",
        "AWS",
        "Golang",
        "Python",
        "Kubernetes"
      ]
    }
  },
  {
    "name": "Intern at CCC",
    "description": {
      "job_title": "AI Enablement Intern",
      "company_name": "CCC Intelligent Solutions",
      "job_location": "Chicago, IL",
      "date_range": "February 2022 - August 2022",
      "description_text": [
        "Developed full-stack web applications using Vue frontend and Python (Flask/FastAPI) backend to create intuitive interfaces for AI tools, increasing user engagement by 25%",
        "Designed and deployed a Python and Vue resource management app using Flask, Docker, and Kubernetes with role-based access control, streamlining workflows and saving 100+ monthly hours.",
        "Collaborated with cross-functional teams to translate stakeholder requirements into fully functional front-end and back-end systems, ensuring 100% seamless integration with zero critical bugs at launch",
        "Made critical technical tradeoffs between feature development speed and code quality, successfully delivering MVP on time while establishing foundation for future enhancements"
      ],
      "technologies_used": [
        "Vue",
        "JavaScript",
        "Python",
        "MongoDB"
      ]
    }
  },
  {
    "name": "Intern at OntoAdaptive",
    "description": {
      "job_title": "Software Engineering Intern",
      "company_name": "OntoAdaptive LLC",
      "job_location": "Chicago, IL",
      "date_range": "June 2021 - August 2021",
      "description_text": [
        "Built full stack ReactJS and TypeScript UI components for a Hospital Patient management site with a Django, PostgreSQL backend, improving app productivity by 15%.",
        "Spearheaded the adoption of a modern web stack (TypeScript), reducing technical debt by 20% and increasing code maintainability by 30%.",
        "Utilized Google Cloud Platform for backend deployment, gaining hands-on experience with cloud infrastructure for web applications.",
      ],
      "technologies_used": [
        "JavaScript",
        "TypeScript",
        "Functional Programming",
        "Python"
      ]
    }
  },
  {
    "name": "Research Assistant",
    "description": {
      "job_title": "Research Assistant",
      "company_name": "Loyola University Chicago",
      "job_location": "Chicago, IL",
      "date_range": "June 2021 - August 2021",
      "description_text": [
        "Developed a comprehensive research proposal on the effectiveness of DNS over HTTP, securing a $1,000 grant to support the project.",
        "Successfully acquired relevant data sets to substantiate the research theorem and improve the training algorithm.",
        "Authored an in-depth and unpublished paper outlining the methodology employed and presenting the conclusive findings of the research."
      ],
      "technologies_used": [
        "Model Training",
        "Python",
        "Virtual Machines"
      ]
    }
  }
]
export class jobList {
  constructor() {
    this.list = jobs
  }

  getNames() {
    return this.list.map(item => item.name);
  }

  getDescription(name) {
    const found = this.list.find(element => element.name === name);
    return found.description
  }
}
