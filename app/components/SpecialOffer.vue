<template>
  <div>
    <div class="w-full bg-white/20 rounded-2xl">
      <!-- Main Offer Card -->
      <div class="backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden relative">
        <!-- Offer Badge -->
        <div class="absolute top-8 right-8 z-10">
          <div class="offer-badge text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-bounce">
            پیشنهاد ویژه
          </div>
        </div>

        <!-- Header Section -->
        <div class="text-white p-12 text-center relative backdrop-blur-sm drop-shadow-2xl">
          <div class="absolute inset-0 border border-white/20 rounded-t-2xl  bg-opacity-20"></div>
          <div class="relative z-10">
            <h1 class="text-5xl md:text-7xl font-black mb-4">
              تخفیف استثنایی
            </h1>
            <p class="text-xl md:text-2xl font-light opacity-90">
              این تخفیف ویژه رو از دست نده!
            </p>
          </div>
        </div>

        <!-- Content Section -->
        <div class="p-12">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Left Column - Offer Details -->
            <div>
              <div class="text-center mb-8">
                <div class="text-6xl md:text-8xl font-black text-white mb-2">
                  50% تخفیف
                </div>
                <div class="text-2xl text-gray-800 line-through mb-2">
                  200,000 تومان
                </div>
                <div class="text-4xl font-bold text-white">
                  100,000 تومان
                </div>
              </div>

              <!-- Features List -->
              <div class="space-y-4 mb-8">
                <div class="flex items-center space-x-3">
                  <div class="w-6 h-6 rounded-full flex items-center justify-center">
                    <Icon name="solar-check-circle-bold" class="text-white" size="25" />
                  </div>
                  <span class="text-lg text-white">کیفیت بالا</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-6 h-6 rounded-full flex items-center justify-center">
                    <Icon name="solar-check-circle-bold" class="text-white" size="25" />
                  </div>
                  <span class="text-lg text-white">ارسال رایگان</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-6 h-6 rounded-full flex items-center justify-center">
                    <Icon name="solar-check-circle-bold" class="text-white" size="25" />
                  </div>
                  <span class="text-lg text-white">گارانتی 18 ماهه</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-6 h-6 rounded-full flex items-center justify-center">
                    <Icon name="solar-check-circle-bold" class="text-white" size="25" />
                  </div>
                  <span class="text-lg text-white">پشتیبانی 24 ساعت</span>
                </div>
              </div>
            </div>

            <!-- Right Column - Countdown & CTA -->
            <div class="text-center">
              <!-- Countdown Timer -->
              <client-only>
                <div class="countdown-timer rounded-2xl p-8 mb-8">
                  <h3 class="text-2xl font-bold text-white mb-6">زمان باقی مانده:</h3>
                  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div class="bg-white/20 rounded-lg p-4 shadow-lg">
                      <div id="days" class="text-3xl font-bold  text-white"></div>
                      <div class="text-sm text-white">روز</div>
                    </div>
                    <div class="bg-white/20 rounded-lg p-4 shadow-lg">
                      <div id="hours" class="text-3xl font-bold text-white"></div>
                      <div class="text-sm text-white">ساعت</div>
                    </div>
                    <div class="bg-white/20 rounded-lg p-4 shadow-lg">
                      <div id="minutes" class="text-3xl font-bo text-white"></div>
                      <div class="text-sm text-white">دقیقه</div>
                    </div>
                    <div class="bg-white/20 rounded-lg p-4 shadow-lg">
                      <div id="seconds" class="text-3xl font-bo text-white"></div>
                      <div class="text-sm text-white">ثانیه</div>
                    </div>
                  </div>
                </div>
              </client-only>

              <!-- CTA Button -->
              <button @click="navigateTo('/')"
                class="shine-effect pulse-animation w-full bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 mb-4 cursor-pointer">
                همین الان خرید کن!
              </button>

              <p class="text-sm text-white">
                خرید امن از درگاه زرین پال
              </p>

              <!-- Urgency Text -->
              <div class="mt-6 p-4 bg-white/20 border border-white/20 rounded-2xl">
                <p class="text-white font-semibold animate-pulse">
                  فقط 47 تا در انبار باقی مانده
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Section -->
        <div class="bg-white/20 p-8 text-center">
          <div class="grid grid-cols-2 lg:grid-cols-4 justify-center items-center text-white backdrop-blur-sm">
            <div class="flex items-center space-x-2">
              <Icon name="solar:scooter-bold" size="30" />
              <span>ارسال رایگان</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="solar:card-bold" size="30" />
              <span>پرداخت امن</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="solar:scooter-bold" size="30" />
              <span>دارای گارانتی</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="solar:undo-left-round-square-bold" size="30" />
              <span>بازخورد عالی</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  function updateCountdown() {
    const now = new Date().getTime()
    const targetTime =
      now +
      2 * 24 * 60 * 60 * 1000 +
      14 * 60 * 60 * 1000 +
      32 * 60 * 1000 +
      45 * 1000

    function updateTimer() {
      const currentTime = new Date().getTime()
      const timeLeft = targetTime - currentTime

      const daysElem = document.getElementById('days')
      const hoursElem = document.getElementById('hours')
      const minutesElem = document.getElementById('minutes')
      const secondsElem = document.getElementById('seconds')

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

        if (daysElem) daysElem.textContent = days.toString().padStart(2, '0')
        if (hoursElem) hoursElem.textContent = hours.toString().padStart(2, '0')
        if (minutesElem) minutesElem.textContent = minutes.toString().padStart(2, '0')
        if (secondsElem) secondsElem.textContent = seconds.toString().padStart(2, '0')
      } else {
        if (daysElem) daysElem.textContent = '00'
        if (hoursElem) hoursElem.textContent = '00'
        if (minutesElem) minutesElem.textContent = '00'
        if (secondsElem) secondsElem.textContent = '00'
      }
    }

    updateTimer()
    setInterval(updateTimer, 1000)
  }

  updateCountdown()
})

</script>