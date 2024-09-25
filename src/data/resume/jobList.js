const jobs = [
  {
    "name": "Software Engineer at CCC",
    "description": {
      "job_title": "Associate Software Engineer",
      "company_name": "CCC Intelligent Solutions",
      "job_location": "Chicago, IL",
      "date_range": "August 2022 - Present",
      "description_text": [
        "Developed and designed cloud automation and infrastructure for production environments using the infrastructure management tool, Terraform, and various AWS Cloud products.",
        "Implemented performance optimization tactics by integrating robust error handling, testing, metrics, and logging capabilities using Python, Terraform, and AWS Cloudwatch.",
        "Collaborated with my team to develop a cutting-edge AI Platform, with enhanced machine learning capabilities and efficiently handling of high production traffic.",
      ],
      "technologies_used": [
        "Terraform",
        "AWS",
        "Golang",
        "Python"
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
        "Designed and delivered web applications utilizing Vue, Javascript and Python; resulting in increased outreach by showcasing  product features and use cases firsthand.",
        "Built and launched a web app for efficient resource management using Vue, Python, Docker, and Kubernetes, streamlining workflows and enhancing operational efficiency",
        "Collaborated with cross-functional teams to gather requirements, document specifications, and ensure seamless integration of front-end components with back-end systems."
      ],
      "technologies_used": [
        "Vue",
        "JavaScript",
        "Python"
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
        "Conducted independent research project on adopting a new modern web stack based on TypeScript to an existing reference architecture.",
        "Implemented new UI functionality for a web application, using React, TypeScript and Django backend to increase application productivity.",
        "Demonstrated proficiency in cloud computing services by utilizing Google Cloud Platform as a development environment.",
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
