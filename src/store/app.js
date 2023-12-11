// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    resume: process.env.BASE_URL + '/resume.pdf'
  }),
  actions: {
    downloadResume(){
      // Replace 'example.pdf' with the actual filename and path in your public directory
      const pdfPath = this.resume

      // Create a download link and trigger the download
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = 'MogboNkemResume.pdf'; // Optional: Specify the desired file name
      link.click();
    }
  }
})
