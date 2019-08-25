<template>
  <div class="w-full h-24 bg-blue-900 border-transparent flex">
    <div class="w-1/3 flex justify-center">
      <div class="text-2xl text-white font-semibold uppercase self-center">
        <p>Aug 2019</p>
        <p></p>
      </div>
    </div>
    <!-- <div class="px-48 h-full flex justify-center border-l border-blue-800">
      <div class="p-2 bg-green-800 text-white rounded-lg text-3xl font-thin self-center">-$30.00</div>
    </div>-->
    <div class="px-48 flex justify-center border-l border-blue-800">
      <div class="p-2 bg-green-500 flex self-center rounded-lg border-transparent">
        <div class="text-white text-3xl font-thin">-$30.00</div>
      </div>
    </div>
    <div class="w-1/4">
      <div class="h-full border-l border-blue-800 flex items-center justify-center">
        <div>
          <p class="text-3xl font-semibold text-green-400">14 days</p>
          <p class="text-white text-sm italic">Age of Money</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebTitlebar",
  components: {},
  data() {
    return {};
  }
};
</script>