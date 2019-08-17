<template>
  <div id="mobileHome" class="w-full bg-gray-100">
    <div id="BottomPanel" class="py-1 absolute inset-x-0 bottom-0 bg-white flex">
      <div id="BottomPanelBudget" class="w-1/5 block">
        <div class="flex justify-center">
          <svg
            class="h-6 w-6 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              class="primary"
              d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"
            />
            <path
              class="secondary"
              d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"
            />
          </svg>
        </div>
        <div class="text-xs text-gray-500 text-center">Budget</div>
      </div>

      <div id="BottomPanelAccounts" class="w-1/5 block">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-6 w-6 fill-current text-gray-500"
          >
            <path
              class="primary"
              d="M3 8h18v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8zm6 3l-1 1v4l1 1H4l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zM3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
            />
            <path
              class="fill-current text-gray-500"
              d="M4 18h16a1 1 0 0 1 1 1v1H3v-1a1 1 0 0 1 1-1zm8.4-15.91l9 4c1 .43.68 1.91-.4 1.91H3c-1.08 0-1.4-1.48-.4-1.91l9-4a1 1 0 0 1 .8 0z"
            />
          </svg>
        </div>
        <div class="text-xs text-gray-500 text-center">Accounts</div>
      </div>

      <div id="BottomPanelAddTransaction" class="w-1/5 block">
        <div class="flex justify-center content-center">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-gray-500">
            <circle cx="12" cy="12" r="10" class="primary" />
            <path
              class="fill-current text-white"
              d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z"
            />
          </svg>
        </div>
        <div class="text-xs text-gray-500 text-center">Transaction</div>
      </div>

      <div id="BottomPanelAddTransaction" class="w-1/5 block">
        <div class="flex justify-center content-center">
          <svg
            class="h-6 w-6 fill-current stroke-green-500 text-gray-500"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z" />
          </svg>
        </div>
        <div class="text-xs text-gray-500 text-center">Reports</div>
      </div>

      <div id="BottomPanelAddTransaction" class="w-1/5 block">
        <div class="flex justify-center content-center">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current stroke-green-500 text-gray-500">
            <path class="primary" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
            <path
              class="fill-current text-white"
              d="M12 19.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.5a1 1 0 0 1-2 0v-1.41a1 1 0 0 1 .55-.9L14 10.5c.64-.42 1-.97 1-1.5 0-1.03-1.3-2-3-2-1.35 0-2.49.62-2.87 1.43a1 1 0 0 1-1.8-.86C8.05 6.01 9.92 5 12 5c2.7 0 5 1.72 5 4 0 1.3-.76 2.46-2.05 3.24L13 13.2v.8z"
            />
          </svg>
        </div>
        <div class="text-xs text-gray-500 text-center">Help</div>
      </div>
    </div>
  </div>
</template>
