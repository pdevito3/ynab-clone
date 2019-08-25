<template class="">
  <div id="WebHome">
    <div class="flex">
      <WebNavbar />
      <WebTitlebar />
    </div>
    <header class="bg-blue-100"></header>
    <main class></main>
  </div>
</template>


<script>
// @ is an alias to /src
import WebNavbar from "@/components/WebNavbar.vue";
import WebTitlebar from "@/components/WebTitlebar.vue";

export default {
  name: "WebHome",
  components: {
    WebNavbar,
    WebTitlebar
  }
};
</script>