<script setup>
import { useAppStore } from "@/store/app";

const store = useAppStore();
</script>

<template>
  <v-layout
    white--text
    align-center
    column
    justify-center
    style="margin-top: 4.5em"
  >
    <v-container class="container">
      <v-row class="row" justify="center" align="center">
        <v-col cols="12" sm="12" md="12" lg="12">
          <h4 class="hello" style="color: #333333">Hi, my name is</h4>
          <h1 class="name" style="color: #333333">NKEM MOGBO</h1>
          <h4 class="job" style="color: #333333">
            I'm a software engineer with expertise in full-stack development and
            cloud infrastructure automation using Infrastructure as Code (IaC).
            I specialize in designing and implementing scalable applications,
            while optimizing cloud environments for efficiency and reliability.
          </h4>
        </v-col>
        <v-col cols="12">
          <v-btn
            variant="outlined"
            style="color: #333333; font-family: Futura, sans-serif"
            href="mailto:nmogbo2001@gmail.com"
            >CONTACT ME</v-btn
          >
          <router-link to="/resume">
            <v-btn
              variant="outlined"
              style="
                margin-left: 10px;
                color: #333333;
                font-family: Futura, sans-serif;
              "
              >VIEW RESUME</v-btn
            >
          </router-link>
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

.more-container {
  width: 10vw;
  height: 10vh;
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Center contents horizontally */
  align-items: center; /* Center contents vertically */
}

.row {
  flex-direction: column; /* Set row direction to vertical */
}

.hello {
  font-style: normal;
  font-size: 20px;
  font-family: Futura, monospace;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: -10px;
}

.name {
  font-style: normal;
  font-size: 124px;
  font-family: Futura, monospace;
  font-weight: 700;
  line-height: 1.25;
}

.job {
  font-size: 16px;
  font-style: normal;
  font-family: Futura, monospace;
  font-weight: 550;
  line-height: 1.5;
  max-width: 50%; /* Adjust the value as needed */
  overflow-wrap: break-word;
  margin-top: -10px;
}
</style>
