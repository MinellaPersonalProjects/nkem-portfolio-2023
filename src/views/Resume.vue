<script setup>
import { ref } from "vue";
import { schools, objective, skills_grouped } from "@/data/resume/main";
import { jobList } from "@/data/resume/jobList";
import EdSection from "@/components/resume/Education.vue";
import JobHeader from "@/components/resume/Header.vue";
import JobList from "@/components/resume/Job.vue";
import Objective from "@/components/resume/Objective.vue";
import Skills from "@/components/resume/Skills.vue";
import Contact from "@/components/resume/Contact.vue";

const jobL = new jobList();
const jobs = jobL.list;

const email = ref("nmogbo2001@gmail.com");
const number = ref("+353 873889464");
const linkedin = ref("https://www.linkedin.com/in/mogbonkem2001/");
</script>

<template>
  <v-parallax dark src="@/assets/Web_Photo_Editor.jpg" class="parallax-section">
    <v-container>
      <v-card
        :elevation="0"
        variant="outlined"
        class="all-text container-style"
        height="100vh"
      >
        <iframe
          src="/nkem-mogbo-resume.pdf"
          width="100%"
          height="100%"
        ></iframe>
      </v-card>
    </v-container>
  </v-parallax>
</template>
<style scoped>
.header-bar {
  background-color: rgba(68, 61, 112, 0.899);
  color: white;
}

.container-style {
  background-color: white;
}

.second-col {
  background-color: rgba(128, 128, 128, 0.28);
}

.all-text {
  font-family: "Zain", sans-serif;
}

.contact {
  font-size: 18px;
  line-height: 1.6;
}

h3 {
  margin-left: 10px;
  margin-top: 20px;
  color: rgba(68, 61, 112, 0.899);
}
</style>