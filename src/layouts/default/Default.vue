<template>
  <v-app>
    <default-bar />

    <default-view />

    <footer-bar v-if="!smAndDown"/>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import FooterBar from "@/layouts/default/FooterBar.vue";

  import {useTheme} from "vuetify";

  const { smAndDown } = useTheme()
</script>
