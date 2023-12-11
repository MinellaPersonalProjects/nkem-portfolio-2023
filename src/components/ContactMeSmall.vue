<script setup>

</script>

<template>
  <v-container>
    <v-row justify="center" class="pt-16 text-center ma-10 mt-16">
      <v-col cols="12">
        <h1
          class="d-flex justify-center"
          style="font-size: 40px; margin-bottom: 20px;font-weight: bolder;font-family: Futura, sans-serif;"
        >Some Fun Facts About Me</h1>
      </v-col>
      <v-col cols="12">
          <v-list>
            <v-list-item-title>#1</v-list-item-title>
            <v-list-item>I wrote a book when I was 12</v-list-item>
          </v-list>
          <v-list>
            <v-list-item-title>#2</v-list-item-title>
            <v-list-item></v-list-item>
          </v-list>
          <v-list>
            <v-list-item-title>#3</v-list-item-title>
            <v-list-item></v-list-item>
          </v-list>
      </v-col>
      <v-col cols="12">
        <v-card color="#de8ed3" class="text">
          <v-card-title>Get In Touch</v-card-title>
          <v-card-text>Hey! If you have a question or just want to say hi</v-card-text>
          <div>
            <v-btn
              variant="text"
              class="mb-5"
              href="mailto:nmogbo2001@gmail.com">
              Contact Me
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text{
  font-style: normal;
  font-family: Futura,sans-serif;
}
</style>
