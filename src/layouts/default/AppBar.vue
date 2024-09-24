<template>
  <v-app-bar flat>
    <template v-slot:prepend>
      <v-avatar image="@/assets/NM.png" rounded="0" size="56"></v-avatar>
    </template>
    <v-spacer></v-spacer>
    <v-btn class="btn hidden-sm-and-down" @click="scrollTo('about')"
      >About</v-btn
    >
    <v-btn class="btn hidden-sm-and-down" @click="scrollTo('projects')"
      >Projects</v-btn
    >
    <v-btn class="btn hidden-sm-and-down" @click="scrollTo('experience')"
      >Skills</v-btn
    >
    <v-btn class="btn hidden-sm-and-down" href="mailto:nmogbo2001@gmail.com"
      >Contact</v-btn
    >
    <template v-slot:append>
      <v-btn
        variant="outlined"
        color="#FF66CC"
        class="btn"
        href="https://github.com/MinellaPersonalProjects/nkem-portfilio-2023/blob/main/public/resume.pdf"
        target="_blank"
        >Resume</v-btn
      >
    </template>
  </v-app-bar>
</template>

<script setup>
function scrollTo(value) {
  const button = document.getElementById(value);
  button.scrollIntoView({ behavior: "smooth" });
}
</script>

<style lang="scss">
.btn {
  text-transform: unset !important;
  font-style: normal;
  font-family: Futura, monospace;
  font-weight: 700;
  line-height: 1.25;
  margin-left: 5px;
}
</style>
