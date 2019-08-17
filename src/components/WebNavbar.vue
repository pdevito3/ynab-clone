<template>
  <div id="side-navbar" class="w-64 h-screen bg-blue-500">
    <button class="w-full flex items-center justify-between hover:bg-blue-600">
      <div class="px-4 py-2 text-left">
        <div class="text-white font-semibold text-xl">Our Budget</div>
        <div class="text-gray-300 text-xs">email@gmail.com</div>
      </div>
      <svg
        id="icon-cheveron-down"
        class="h-8 w-8 mr-4 fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          class="secondary"
          fill-rule="evenodd"
          d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        />
      </svg>
    </button>

    <router-link
      to="/"
      class="px-4 w-full bg-blue-500 inline-flex items-center hover:bg-blue-600"
      exact-active-class="bg-blue-800"
    >
      <svg
        class="h-6 w-6 fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          class="primary"
          d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"
        />
        <path class="secondary" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z" />
      </svg>
      <div class="ml-4 py-2 font-semibold text-white">Budget</div>
    </router-link>
    <router-link
      to="/about"
      class="px-4 w-full bg-blue-500 inline-flex items-center hover:bg-blue-600"
      exact-active-class="bg-blue-800"
    >
      <svg
        class="h-6 w-6 fill-current text-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z" />
      </svg>
      <div class="ml-4 py-2 font-semibold text-white">Reports</div>
    </router-link>

    <router-link
      to="/accounts"
      class="px-4 w-full bg-blue-500 inline-flex items-center hover:bg-blue-600"
      exact-active-class="bg-blue-800"
    >
      <svg
        class="h-6 w-6 fill-current stroke-green-500 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          class="primary"
          d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm13 12a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-6 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2z"
        />
        <rect width="20" height="4" x="2" y="7" class="fill-current text-blue-400" />
      </svg>
      <div class="ml-4 py-2 font-semibold text-white">All Accounts</div>
    </router-link>
    <section class="border-t border-blue-900">
      <div
        @click="hideAccounts=!hideAccounts"
        class="py-2 ml-2 mr-10 flex justify-between cursor-pointer"
      >
        <div class="flex items-center text-xs font-semibold tracking-widest">
          <svg
            v-if="!hideAccounts"
            id="icon-cheveron-down"
            class="h-5 w-5 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              class="secondary"
              fill-rule="evenodd"
              d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
            />
          </svg>
          <svg
            v-if="hideAccounts"
            class="h-5 w-5 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
          <div class="ml-2 text-gray-100 uppercase select-none">Budget</div>
        </div>
        <div class="text-white text-xs select-none">$10,000,000</div>
      </div>
      <div v-if="!hideAccounts">
        <div
          v-for="i in 8"
          :key="i"
          class="py-1 flex items-center justify-between cursor-pointer select-none hover:bg-blue-400"
        >
          <div class="ml-6 text-white text-sm">Card {{i}}</div>
          <div
            class="px-2 py-0 mr-8 text-red-700 text-xs bg-white rounded-full select-none"
          >-$100.00</div>
        </div>
      </div>
    </section>
  </div>
</template>
