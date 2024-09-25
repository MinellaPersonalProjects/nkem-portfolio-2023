<script setup>
defineProps({
  position: String,
  company: String,
  location: String,
  date: String,
  bullets: Array,
});
</script>
<template>
  <v-card class="transparent-card" :elevation="0" style="font-size: 18px">
    <div class="transparent-card toolbar-space">
      {{ company }}, {{ location }} | {{ date }}
      <br />
      <strong class="postion-color">{{ position }}</strong>
    </div>
    <v-card-text class="card-text">
      <ul v-for="item in bullets" :key="item">
        <li class="card-list">{{ item }}</li>
      </ul>
    </v-card-text>
  </v-card>
</template>
<style>
.transparent-card {
  background-color: transparent !important;
}
.postion-color {
  color: rgba(68, 61, 112, 0.899);
}
.card-text {
  overflow: wrap;
  padding-top: 8px;
}
.card-list {
  font-size: 18px;
  overflow: wrap;
  margin-left: 10px;
}
.toolbar-space {
  margin-bottom: 0;
}
.company {
  font-size: 12px;
  margin-top: 10px;
}
</style>