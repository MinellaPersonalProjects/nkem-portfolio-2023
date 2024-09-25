<script setup>
defineProps({
  index: Number,
  link: String,
  image: String,
  name: String,
  description: String,
  technologies: Array,
});

const isEven = (index) => {
  return index % 2 == 0;
};
</script>

<template>
  <div class="card-style">
    <v-row>
      <v-col cols="12" sm="5" md="5" lg="5" xl="5" v-if="!isEven(index)">
        <v-card variant="outlined" width="400" height="200">
          <v-img :src="image" cover></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" md="7" lg="7" xl="7">
        <v-card class="transparent-card" :elevation="0">
          <v-card-title class="text-start header"
            >{{ name }}
            <v-btn icon :href="link" target="_blank" variant="text">
              <v-icon>mdi-link-variant</v-icon>
            </v-btn></v-card-title
          >

          <v-card-text class="text-start paragraph">
            <div class="text-container">{{ description }}</div>
          </v-card-text>
          <v-row no-gutters>
            <div v-for="item in technologies" :key="item">
              <v-chip class="ml-2">
                {{ item }}
              </v-chip>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5" md="5" lg="5" xl="5" v-if="isEven(index)">
        <v-card variant="outlined" width="400" height="200">
          <v-img :src="image" cover></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.paragraph {
  font-style: normal;
  font-size: 18px;
  font-family: Futura, sans-serif;
}

.header {
  font-size: 30px;
  font-family: Futura, sans-serif;
}

.card-style {
  margin: 40px;
}

.uniform-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  line-height: 1.6;
}

.transparent-card {
  background-color: transparent !important; /* Use !important to override Vuetify styles */
}

@media (max-width: 960px) {
  .card-style {
    height: 500px;
    width: 60%;
    margin-left: 120px;
  }
}

.my-image {
  max-width: 100%;
  object-fit: cover;
}
</style>
