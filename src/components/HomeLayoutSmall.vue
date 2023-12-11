<script setup>
import {useAppStore} from "@/store/app";

const store = useAppStore()
</script>

<template>
    <v-layout style="margin-top: 4.5em;">
      <v-container class="container">
        <v-row class="row" justify="center" align="center">
          <v-col cols="12" sm="12" md="12" lg="12">
            <h4 class="hello" style="color: #333333"> Hi, my name is </h4>
            <h1 class="name" style="color: #333333">NKEM MOGBO</h1>
            <h4 class="job" style="color: #333333">I am a software engineer skilled in full-stack development and AI platform engineering.
              I build applications and infrastructure that seamlessly integrate AI models, ensuring optimal performance and delivering efficient solutions.</h4>
          </v-col>
          <v-col cols="12">
            <v-btn
              variant="outlined"
              style="color: #333333; font-family: Futura,sans-serif;"
              href="mailto:nmogbo2001@gmail.com"
            >CONTACT ME</v-btn>
            <v-btn
              variant="outlined"
              style="margin-left: 10px; color: #333333;font-family: Futura,sans-serif;"
              href="https://github.com/MinellaPersonalProjects/nkem-portfilio-2023/blob/main/public/resume.pdf"
              target="_blank"
            >VIEW RESUME</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
</template>

<style scoped>
  .container {
    min-height: 100vh; /* Set container to full viewport height */
    display: flex; /* Use flexbox layout */
    justify-content: center; /* Center contents horizontally */
    align-items: center; /* Center contents vertically */
  }

  .row {
    flex-direction: column; /* Set row direction to vertical */
  }

  .hello{
    font-style: normal;
    font-size: 20px;
    font-family: Futura, monospace;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: -10px;
  }

  .name{
    font-style: normal;
    font-size: 50px;
    font-family: Futura, monospace;
    font-weight: 700;
    line-height: 1.25;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .job{
    font-size: 16px;
    font-style: normal;
    font-family: Futura,monospace;
    font-weight: 550;
    line-height: 1.5;
    max-width: 50%; /* Adjust the value as needed */
    overflow-wrap: break-word;
    margin-top: -10px;
  }
</style>

