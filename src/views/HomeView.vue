<template>
  <div
    class="relative sm:flex md:flex block justify-center mt-6 bg-black overflow-hidden"
  >
    <img src="../assets/photo.jpg" class="max-w-2/3 min-w-0 object-cover" />
    <div
      class="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black"
    ></div>
    <div
      class="relative sm:absolute sm:max-w-[600px] lg:max-w-[400px] px-4 py-3 bg-gray-800/90 text-gray-100 font-serif bottom-4 left-auto right-auto sm:bottom-auto sm:left-auto sm:right-1/4 lg:bottom-auto lg:left-auto lg:right-1/7 sm:top-1/2 sm:px-8 sm:py-4 sm:translate-x-[10vw] sm:-translate-y-1/2 lg:translate-x-[20vw] lg:-translate-y-[20vh]"
    >
      <p class="text-sm sm:text-base lg:text-xl text-center">
        "Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,<br />
        sed do eiusmod tempor incididunt<br />
        ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam,<br />
        quis nostrud exercitation ullamco laboris<br />
        nisi ut aliquip ex ea commodo consequat".
      </p>
    </div>
  </div>
  <div
    class="flex flex-col md:flex-row justify-center text-gray-100 bg-gray-800 font-mono px-6 py-8 gap-8 md:gap-16"
  >
    <div>
      <div class="py-4">
        <h1>Join The List</h1>
        <input type="email" placeholder=" email address" class="mt-1" />
      </div>
      <div class="py-3">
        <h1>Social Media</h1>
      </div>
      <div>
        <ul class="flex gap-4">
          <li>
            <a
              href="https://www.facebook.com/claudiasofialvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <facebook-icon class="size-8 text-gray-200" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/claudiasofialvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <instagram-icon class="size-8 text-gray-200" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@claudiasofialvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <youtube-icon class="size-8 text-gray-200" />
            </a>
          </li>
        </ul>
      </div>
      <div class="py-6">
        © 2026 Claudia Sofia Alvarez. All rights reserved.
      </div>
    </div>
    <div>
      <div class="py-4">
        <h1>General Inquires</h1>
        <a class="underline break-all">info@claudiasofialvarez.com</a>
      </div>
      <div class="py-4">
        <h1>Press Inquires</h1>
        <a class="underline break-all">press@claudiasofialvarez.com</a>
      </div>
      <div class="py-4">
        <h1>Publisher</h1>
        <a class="underline break-all">rental@claudiasofialvarez.com</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import facebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";
</script>

<style scoped></style>
