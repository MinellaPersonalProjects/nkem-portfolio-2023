<script setup>
const icons = [
  {icon: 'mdi-facebook', link: 'https://www.facebook.com/emma.ij.3/'},
  {icon: 'mdi-twitter', link: 'https://x.com/ellatheoffice?s=21&t=BMdb0B_nuVz3JkIfgcV4aQ'},
  {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/mogbonkem2001'},
  {icon: 'mdi-youtube', link: 'https://youtube.com/@NkemEllaMogbo?si=MXmW5yDi8OzhjGv8'},
]
</script>

<template>
  <v-footer class="d-flex flex-column">
    <div class="bg-white d-flex w-100 align-center px-4">
      <strong>Created by Nkem Mogbo</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="i in icons"
        :key="i"
        class="mx-4"
        :icon="i.icon"
        :href="i.link"
        target="_blank"
        variant="plain"
        size="small"
      ></v-btn>
    </div>
  </v-footer>
</template>

<style scoped>
.custom-footer {
  border-top: 1px solid #000; /* Example: 1px solid black line */
}
</style>
