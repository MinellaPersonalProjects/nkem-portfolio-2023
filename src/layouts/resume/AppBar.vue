<template>
  <v-app-bar flat>
    <template v-slot:prepend>
      <router-link to="/">
        <v-avatar image="@/assets/NM.png" rounded="0" size="56"></v-avatar>
      </router-link>
    </template>
    <v-spacer></v-spacer>
    <template v-slot:append>
      <v-btn variant="outlined" color="#FF66CC" class="btn" @click="downloadPDF"
        >Download<v-icon>mdi-download</v-icon></v-btn
      >
    </template>
  </v-app-bar>
</template>
<script setup>
const downloadPDF = () => {
  const pdfUrl = new URL("@/assets/resume.pdf", import.meta.url).href;

  const link = document.createElement("a");
  link.href = pdfUrl;

  link.setAttribute("download", "Nkem_Mogbo_Resume.pdf");

  link.click();
};
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
