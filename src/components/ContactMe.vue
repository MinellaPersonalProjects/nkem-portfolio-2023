<script setup>

</script>

<template>
<v-container>
  <v-row justify="center" class="pt-16 text-center ma-10 mt-16">
    <v-col cols="12">
      <h1
        class="d-flex justify-center"
        style="font-size: 50px; margin-bottom: 20px;font-weight: bolder;font-family: Futura, sans-serif;"
      >Some Fun Facts About Me</h1>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="4">
          <v-card class="text">
            <v-card-title>#1</v-card-title>
            <v-card-text style="font-size: 150%; line-height: 1.5;">
              I published a novel when I was 12
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="text">
            <v-card-title>#2</v-card-title>
            <v-card-text style="font-size: 150%; line-height: 1.5;">
              I have been teaching myself Japanese . <br/>
              こ ん に ち は !!
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="text">
            <v-card-title>#3</v-card-title>
            <v-card-text style="font-size: 150%; line-height: 1.5;">
              I am an avid reader, and love fantasy novels
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

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
