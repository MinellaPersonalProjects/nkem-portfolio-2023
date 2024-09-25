<script setup>
import { projectList } from "@/data/projectList";
import ProjectCards from "@/components/ProjectCards.vue";
const projectL = new projectList();
const projects = projectL.list;
</script>

<template>
  <v-container>
    <v-row justify="center" class="pt-16 text-center ma-10 mt-16">
      <v-col cols="12">
        <h1
          class="d-flex justify-center"
          style="
            font-size: 50px;
            margin-bottom: 20px;
            font-weight: bolder;
            font-family: Futura, sans-serif;
          "
        >
          Projects
        </h1>
      </v-col>
      <div class="horizontal-scroll">
        <v-row>
          <v-col v-for="(project, index) in projects" :key="index" cols="12">
            <project-cards
              :index="index"
              :image="project.description.image"
              :link="project.github"
              :name="project.name"
              :description="project.description.text"
              :technologies="project.description.technologies"
            />
          </v-col>
        </v-row>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card color="#de8ed3" class="text mt-6" variant="outlined">
          <v-card-title class="text-center">Check out my Blog</v-card-title>
          <v-card-text class="text-center"
            >A tech blog for handy tips, tech insights, and fun programming
            projects.</v-card-text
          >
          <div class="text-center">
            <v-btn
              variant="tonal"
              class="mb-5"
              href="https://nkems-tech-teachings.com"
            >
              Let's Go !
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text {
  font-style: normal;
  font-family: Futura, sans-serif;
}
</style>
