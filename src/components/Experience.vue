<script setup>
  import ExperienceDescription from "@/components/ExperienceDescription.vue";
  import { jobList } from "@/data/jobList";
  import {ref} from "vue";

  const jobL = new jobList()
  const jobs = jobL.list
  const currentDescription = ref({})
  const clickedItem = ref("Software Engineer at CCC")

  function setCurrentDescription(name) {
    currentDescription.value = jobL.getDescription(name);
    clickedItem.value = name
    console.log(currentDescription.value)
  }

</script>

<template>
<v-container fluid>
  <v-row justify="center" class="pt-16 text-center ma-10 mt-16">
    <v-col cols="12">
      <h1
        class="d-flex justify-center"
        style="font-size: 50px; margin-bottom: 20px;font-weight: bolder;font-family: Futura, sans-serif;"
      >Experience</h1>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" sm="12" md="3" lg="3" xl="3">
          <v-card
            height="450px"
            variant="outlined"
            class="text"
          >
            <v-list>
              <v-row>
                <v-col
                  v-for="item in jobs"
                  :key="item.name"
                  :class="{ 'highlight': clickedItem === item.name }"
                  @click="setCurrentDescription(item.name)"
                  cols="12"
                  sm="3"
                  xs="3"
                  md="12"
                  lg="12"
                >
                  <v-list-item>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="9" lg="9">
          <v-card
            height="450px"
            variant="outlined"
            class="text"
          >
            <v-card-text class="scrollable-content">
              <experience-description
                :title="currentDescription.job_title"
                :company="currentDescription.company_name"
                :location="currentDescription.job_location"
                :date="currentDescription.date_range"
                :text="currentDescription.description_text"
                :technologies="currentDescription.technologies_used"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-card color="#de8ed3" class="text">
        <v-card-title>Check out my Blog</v-card-title>
        <v-card-text>A tech blog for handy tips, tech insights, and fun programming projects.</v-card-text>
        <div>
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
.text{
  font-style: normal;
  font-family: Futura,sans-serif;
}
.highlight {
  background-color: #de8ed3;
}
.scrollable-content {
  max-height: 450px;
  overflow-y: auto;
}
</style>
