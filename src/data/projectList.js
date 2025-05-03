const projects = [
  {
    "name": "Nkem's Tech Talk",
    "github": "https://github.com/MinellaPersonalProjects/my-tech-teachings",
    "description": {
      "image": "https://i.imgur.com/vL9S054.png",
      "text": "A modern blog developed with Nuxt-Content and the latest Nuxt 3, combining headless CMS flexibility and Nuxt's advanced features for optimized performance.",
      "technologies": [
        "Vue 3",
        "Nuxt 3",
        "JavaScript"
      ]
    }
  },
  {
    "name": "Birthday App",
    "github": "https://happy-60th-birthday.netlify.app",
    "description": {
      "image": "https://imgur.com/71VCFCf",
      "text": "A dynamically designed birthday site, where users from around the world can send in birthday wishes to celebrant.",
      "technologies": [
        "Nextjs",
        "TypeScript",
        "React"
      ]
    }
  },
  {
    "name": "Secret Web",
    "github": "https://github.com/MinellaPersonalProjects/secretweb_frontend",
    "description": {
      "image": "https://i.imgur.com/uxkhsBG.png",
      "text": "An intriguing frontend application developed using VueJS, designed to create a website with a captivating 'Black Ops' style theme, purely for entertainment and creative exploration. A tutorial is also available on my blog",
      "technologies": [
        "Vue",
        "JavaScript"
      ]
    }
  },
  {
    "name": "Golang Chat Channel",
    "github": "https://github.com/MinellaPersonalProjects/secretweb_frontend",
    "description": {
      "image": "https://i.imgur.com/dY8iuK4.png",
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
