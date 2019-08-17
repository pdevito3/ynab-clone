<template>
  <div id="WebHome" class>
    <WebNavbar />
    <header class="bg-blue-100"></header>
    <main class></main>
  </div>
</template>


<script>
// @ is an alias to /src
import WebNavbar from "@/components/WebNavbar.vue";

export default {
  name: "WebHome",
  components: {
    WebNavbar
  }
};
</script>