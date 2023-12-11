<script setup>
defineProps({
  title: {
    type: String,
    default: "Associate Software Engineer"
  },
  company: {
    type: String,
    default: "CCC Intelligent Solutions"
  },
  location: {
    type: String,
    default: "Chicago,IL"
  },
  date: {
    type: String,
    default: "08.2022 - Present"
  },
  text: {
    type: Array,
    default: [
      "Collaborate with other developers to create enterprise class, hosted solutions that cover diverse environments and service tens of thousands of end-users." ,
      "Design and develop cloud automation and infrastructure for production environments utilizing infrastructure management tool Terraform, and cloud-service platform AWS and its various products" ,
      "Utilize understandings of machine learning inference and develop automations in Golang and Terraform to deploy machine learning models",
    ],
  },
  technologies: {
    type: Array,
    default: [
      "Terraform",
      "AWS",
      "Golang",
      "Python"
    ],
  },
})
</script>

<template>
<v-container fluid>
  <v-row>
    <v-col cols="12">
      <v-row>
        <h3 class="ml-4">{{title}}@{{company }}</h3>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row>
        <h4 class="ml-4">{{location }}</h4>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row>
        <h4 class="ml-4">{{date}}</h4>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-list lines="two">
        <v-list-item v-for="item in text" :key="item">
          <template v-slot:prepend>
            <v-icon>mdi-arrow-right</v-icon>
          </template>
          <p class="my-text">{{ item }}</p>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters>
        <div v-for="item in technologies" :key="item">
          <v-chip class="ml-2">
            {{ item }}
          </v-chip>
        </div>
      </v-row>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
.my-text {
  text-align: left;
}
</style>
