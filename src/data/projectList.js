const projects = [
  {
    "name": "Nkem's Tech Talk",
    "github": "https://github.com/MinellaPersonalProjects/my-tech-teachings",
    "description": {
      "image": "https://imgur.com/vL9S054",
      "text": "A modern blog developed with Nuxt-Content and the latest Nuxt 3, combining headless CMS flexibility and Nuxt's advanced features for optimized performance.",
      "technologies": [
        "Vue 3",
        "Nuxt 3",
        "JavaScript"
      ]
    }
  },
  {
    "name": "Portfolio",
    "github": "https://github.com/MinellaPersonalProjects/secretweb_frontend",
    "description": {
      "image": "https://imgur.com/4z9Z0AG",
      "text": "A dynamically designed portfolio site, meticulously crafted using VueJS, showcasing a range of my professional skills and featured projects.",
      "technologies": [
        "Vue 3",
        "JavaScript",
      ]
    }
  },
  {
    "name": "Secret Web",
    "github": "https://github.com/MinellaPersonalProjects/secretweb_frontend",
    "description": {
      "image": "https://imgur.com/uxkhsBG",
      "text": "An intriguing frontend application developed using VueJS, designed to create a website with a captivating 'Black Ops' style theme, purely for entertainment and creative exploration. A tutorial is also available on my blog",
      "technologies": [
        "Vue",
        "JavaScript"
      ]
    }
  },
  {
    "name": "Golang Chat Channel - SecretWeb Backend",
    "github": "https://github.com/MinellaPersonalProjects/secretweb_frontend",
    "description": {
      "image": "https://imgur.com/dY8iuK4",
      "text": "A sophisticated backend application developed using Golang, designed to power a live chat interface for my uniquely themed 'Black Ops' style website. ",
      "technologies": [
        "Golang",
        "Pusher",
        "Render"
      ]
    }
  }
]
export class projectList {
  constructor() {
    this.list = projects
  }
}
