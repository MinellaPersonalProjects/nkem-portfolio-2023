<script setup>
 //
</script>

<template>
  <v-container height="100%">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card
          rounded="lg"
          variant="flat"
          class="pa-10 text-center ma-10 mt-16"
        >
          <v-card-title
            class="d-flex justify-center about-me"
          >
            About Me
          </v-card-title>
          <v-card-text
            class="paragraph"
          >
            <p style="margin: 20px; line-height: 150%">
              In 2014, as a 9th grader, I embarked on a journey that would shape my professional path: qualifying for my country's Informatics Olympiads. It was here, learning to code in C++, that my passion for crafting impactful software solutions was ignited.
              <br/>
              <br />
              In just two years in the industry,
              I've made notable progress: contributing to a research project for a start-up's future architecture,
              developing full-stack applications in production as an AI Enablement Intern,
              and now,
              as a Full-Time Engineer at CCC Intelligent Solutions,
              working on an advanced AI platform using AWS SageMaker.
              My passion for innovation extends to sharing knowledge through a tech blog, w
              here I guide users of all skill levels in creating projects with Vue, Nuxt, Python, and other languages.
              <br/>
              <br />
              Beyond my professional pursuits, I am an avid learner, constantly exploring new languages and immersing myself in the diverse worlds of literature.
              <br/>
              <br />
              As a Software Engineer, my ambition is to harness my growing skill set to push technological frontiers. I am committed to making a tangible, positive impact in the world, fueled by my firm belief in the transformative power of technology.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-me{
  font-size: 50px;
  margin-bottom: 20px;
  font-weight: bolder;
  font-family: Futura, sans-serif;
}
.paragraph{
  font-style: normal;
  font-size: 20px;
  font-family: Futura,sans-serif;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 20px;
}

@media (max-width: 960px) {
  .about-me{
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: bolder;
    font-family: Futura, sans-serif;
  }
}
</style>
