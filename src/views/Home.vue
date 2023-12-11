<script setup>
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Projects from "@/components/Projects.vue";
import ContactMe from "@/components/ContactMe.vue";

import {useTheme} from "vuetify";
import ContactMeSmall from "@/components/ContactMeSmall.vue";
import HomeLayout from "@/components/HomeLayout.vue";
import HomeLayoutSmall from "@/components/HomeLayoutSmall.vue";

const { smAndDown } = useTheme()

</script>
<template>
  <v-container fluid class="overall">
    <section id="home" style="min-height: 100vh;">
      <v-parallax
        dark
        src="@/assets/Web_Photo_Editor.jpg"
        class="parallax-section"
      >
        <home-layout v-if="!smAndDown"/>
        <home-layout-small v-else/>
      </v-parallax>
    </section>
    <section
      style="min-height: 100vh;"
      id="about"
      class="gradient-background">
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <about/>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section
      id="experience"
      style="min-height: 100vh;"
      class="white-back"
    >
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <experience />
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section
      id="projects"
      style="min-height: 100vh;"
      class="clean-section"
      >
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <projects />
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section
      id="contact"
      style="min-height: 100vh;"
      class="gradient-background-section">
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <contact-me v-if="!smAndDown"/>
            <contact-me-small v-else />
          </v-row>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>
<style scoped>

html,
body {
  overflow-x: hidden; /* Prevent horizontal scrolling */
  scroll-behavior: smooth; /* Enable smooth scrolling */
}

.parallax-section::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ecc1d5);
  pointer-events: none; /* This ensures the overlay doesn't interfere with interactions */
}

.gradient-background {
  background: linear-gradient(to bottom, #ecc1d5, #F5F5DC 33%, #FFFFFF 100%);
  min-height: 400px;
}

.white-back {
  background: white;
  min-height: 400px;
}

/* New section with a clean, light background that starts with a transparent gradient to white/light grey */
.clean-section {
  background: linear-gradient(to bottom, #FFFFFF 0%, #F5F5DC 67%, #ecc1d5 100%);
  min-height: 400px; /* Adjust height as necessary */
}

.gradient-background-section {
  height: 500px; /* Adjust as needed */
  background-image: linear-gradient(to bottom, rgb(236, 193, 213), rgba(255, 255, 255, 0)), url('@/assets/Web_Photo_Editor.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.overall{
  padding: 0;
}

.typeEffect__hi,
.typeEffect__1 {
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect */
  font-size: 16px;
  white-space: nowrap; /* Keeps the text on a single line */
}

.typeEffect__hi::after,
.typeEffect__1::after {
  content: ''; /* This is used for the cursor */
  display: inline-block;
  width: 2px;
  background-color: black; /* Cursor color */
  animation: blink 1s infinite; /* Cursor blinking animation */
}

.typeEffect__hi::after {
  margin-left: 2px; /* Space between cursor and text */
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%; /* Adjust this value to control how much text appears */
  }
}

@keyframes blink {
  0%, 45% {
    opacity: 0; /* Make the cursor invisible */
  }
  50%, 100% {
    opacity: 1; /* Make the cursor visible */
  }
}

.typeEffect__1::after {
  margin-left: 2px; /* Space between cursor and text */
}

@keyframes typing_1 {
  from {
    width: 0;
  }
  to {
    width: 100%; /* Adjust this value to control how much text appears */
  }
}



.more-btn {
  text-transform: unset !important;
  font-style: normal;
  font-family: Futura, sans-serif;
  font-weight: 400;
  line-height: 1.25;
  position: absolute;
  bottom: 20px;
  left: 45%;
}

.arrow-icon {
  position: absolute;
  bottom: 5px;
  left: 50%;
  animation: arrowAnimation 1.5s infinite alternate;
}

@keyframes arrowAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>




