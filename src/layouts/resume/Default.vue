<template>
  <v-app>
    <resume-bar />

    <default-view />

    <footer-bar />
  </v-app>
</template>
  
<script setup>
import ResumeBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import FooterBar from "./FooterBar.vue";
</script>
  