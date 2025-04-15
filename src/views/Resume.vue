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
      >
        <job-header
          :name="'NKEM EMMANUELLA MOGBO'"
          :title="'SOFTWARE ENGINEER'"
          class="header-bar"
        />
        <v-row>
          <v-col cols="12" sm="8" md="8" lg="8" xl="8">
            <h3>OBJECTIVE</h3>
            <objective :text="objective" />

            <h3>WORK EXPERIENCE</h3>
            <v-col
              cols="12"
              v-for="job in jobs.slice(0, 3)"
              :key="job"
              class="mr-4"
            >
              <job-list
                :position="job.description.job_title"
                :company="job.description.company_name"
                :location="job.description.job_location"
                :date="job.description.date_range"
                :bullets="job.description.description_text"
              />
            </v-col>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="second-col">
            <contact :number="number" :email="email" :linkedin="linkedin" />
            <!-- <div class="mt-4 ml-1 contact">
              <span><v-icon class="mr-2">mdi-phone</v-icon>{{ number }}</span>
              <br />
              <span
                ><v-icon class="mr-2">mdi-email-outline</v-icon
                >{{ email }}</span
              >
              <br />
              <span
                ><v-icon class="mr-2">mdi-linkedin</v-icon>{{ linkedin }}</span
              >
            </div> -->
            <h3>EDUCATION</h3>
            <v-col cols="12" v-for="ed in schools" :key="ed">
              <ed-section
                :name="ed.name"
                :location="ed.location"
                :degree="ed.degree"
                style="font-size: 18px"
              />
            </v-col>

            <h3>SKILLS</h3>
            <v-col cols="12">
              <skills :skills="skills_grouped" style="font-size: 18px" />
            </v-col>
          </v-col>
        </v-row>
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