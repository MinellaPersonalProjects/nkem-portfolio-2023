<script setup>
import skills from "@/data/skills.json";
import { Icon } from "@iconify/vue";
</script>
<template>
  <v-container fluid>
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
          Skills
        </h1>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col
            v-for="(icon, name) in skills"
            :key="name"
            cols="12"
            sm="6"
            md="2"
            lg="2"
          >
            <div>
              <Icon :icon="icon" class="mb-2" height="74" />
              <div>{{ name }}</div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>