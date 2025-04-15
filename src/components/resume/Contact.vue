<script setup>
import { ref } from "vue";

const props = defineProps({
  number: String,
  email: String,
  linkedin: String,
});

const showSnackbar = ref(false);

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showSnackbar.value = true;
  } catch (err) {
    // Fallback for older browsers
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showSnackbar.value = true;
    } catch (fallbackErr) {
      console.error("Failed to copy:", fallbackErr);
    }
  }
};
</script>

<template>
  <div class="mt-4 ml-1 contact">
    <!-- Phone Number -->
    <v-tooltip location="top" text="Click to copy phone number">
      <template v-slot:activator="{ props }">
        <div
          v-bind="props"
          class="contact-item"
          @click="copyToClipboard(number)"
        >
          <v-icon class="mr-2">mdi-phone</v-icon>
          <span>{{ number }}</span>
        </div>
      </template>
    </v-tooltip>

    <!-- Email -->
    <v-tooltip location="top" text="Click to copy email">
      <template v-slot:activator="{ props }">
        <div
          v-bind="props"
          class="contact-item"
          @click="copyToClipboard(email)"
        >
          <v-icon class="mr-2">mdi-email-outline</v-icon>
          <span>{{ email }}</span>
        </div>
      </template>
    </v-tooltip>

    <!-- LinkedIn -->
    <v-tooltip location="top" text="Click to copy LinkedIn">
      <template v-slot:activator="{ props }">
        <div
          v-bind="props"
          class="contact-item"
          @click="copyToClipboard(linkedin)"
        >
          <v-icon class="mr-2">mdi-linkedin</v-icon>
          <span>{{ linkedin }}</span>
        </div>
      </template>
    </v-tooltip>

    <!-- Snackbar for feedback -->
    <v-snackbar v-model="showSnackbar" :timeout="2000">
      Copied to clipboard!
    </v-snackbar>
  </div>
</template>
  

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: 1.6;
}

.contact-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.contact-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>