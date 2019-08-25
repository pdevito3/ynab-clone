<template>
  <div class="font-sans h-screen bg-gray-100 antialiased">
    <!-- <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <WebHome class="hidden sm:block flex" />
    <MobileHome class="sm:hidden" />
  </div>
</template>

<script>
// @ is an alias to /src
import WebHome from "@/views/Home/WebHome.vue";
import MobileHome from "@/views/Home/MobileHome.vue";

export default {
  name: "home",
  components: {
    WebHome,
    MobileHome
  }
};
</script>
