const jobs = [
  {
    "name": "Software Engineer at CCC",
    "description" : {
      "job_title": "Associate Software Engineer",
      "company_name": "CCC Intelligent Solutions",
      "job_location": "Chicago,IL",
      "date_range": "08.2022 - Present",
      "description_text": [
        "Collaborate with other developers to create enterprise class, hosted solutions that cover diverse environments and service tens of thousands of end-users." ,
        "Design and develop cloud automation and infrastructure for production environments utilizing infrastructure management tool Terraform, and cloud-service platform AWS and its various products" ,
        "Utilize understandings of machine learning inference and develop automations in Golang and Terraform to deploy machine learning models",
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
    "description" : {
      "job_title": "AI Enablement Intern",
      "company_name": "CCC Intelligent Solutions",
      "job_location": "Chicago,IL",
      "date_range": "02.2022 - 08.2022",
      "description_text": [
        "Developed a new web-based tool using a VueJS frontend and Python backend to generate quarterly summary reports for the organization's resource.",
        "Designed and Develivered a range of highly engaging Vue WebApps, showcasing our innovative AI applications",
        "Demonstrated proficiency in all phases of the system development lifecycle, including requirement gathering, design, development, testing, and production releases."
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
    "description" : {
      "job_title": "Software Engineering Intern",
      "company_name": "OntoAdaptive LLC",
      "job_location": "Chicago,IL",
      "date_range": "06.2021 - 08.2021",
      "description_text": [
        "Conducted independent research project on adopting a new modern web stack on an existing reference architecture.",
        "Redesigned a React JavaScript web application using React TypeScript to enhance overall readability and reliability of the application.",
        "Implemented new UI functionality for a web application, integrating CRUD actions and Django backend to increase application productivity.",
        "Collaborated closely with a Senior Software Engineer to prepare applications for production environment.",
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
    "description" : {
      "job_title": "Research Assistant",
      "company_name": "Loyola University Chicago",
      "job_location": "Chicago,IL",
      "date_range": "06.2021 - 08.2021",
      "description_text": [
        "Developed a comprehensive research proposal on the effectiveness of DNS over HTTP, securing a $1,000 grant to support the project.",
        "Successfully acquired relevant data sets to substantiate the research theorem and improve the training algorithm.",
        "Authored an in-depth and unpublished paper outlining the methodology employed and presenting the conclusive findings of the research."
      ],
      "technologies_used": [
        "Model Training",
        "Python",
        "VM"
      ]
    }
  }
]
export class jobList {
  constructor() {
    this.list = jobs
  }

  getNames(){
    return this.list.map(item => item.name);
  }

  getDescription(name) {
    const found = this.list.find(element => element.name === name);
    return found.description
  }
}
