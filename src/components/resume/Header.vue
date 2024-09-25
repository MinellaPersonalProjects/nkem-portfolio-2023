<script setup>
defineProps({
  name: String,
  title: String,
});
</script>
<template>
  <div>
    <h1 class="text-center pt-4 font-heading-size">{{ name }}</h1>
    <hr />
    <h3 class="text-center mb-3 pb-3">{{ title }}</h3>
  </div>
</template>
<style scoped>
.font-heading-size {
  font-size: 45px;
}
hr {
  margin: 4px auto; /* centred margin */
  margin-bottom: 20px;
  height: 1.5px; /* thickness of the line */
  width: 25px;
  background-color: white; /* colour of the line */
  border: none; /* no border */
}

.heading-text {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.title-text {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>