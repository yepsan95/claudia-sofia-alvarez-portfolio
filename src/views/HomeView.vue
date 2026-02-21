<template>
  <div class="relative flex justify-center mt-6 bg-black">
    <img src="../assets/photo.jpg" />
    <div
      class="absolute top-1/2 left-3/5 px-8 py-4 bg-gray-800 text-gray-100 font-serif translate-x-[30vw] -translate-y-[20vh]"
    >
      <p class="text-xl">
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
    class="flex justify-center h-[300px] text-gray-100 bg-gray-800 font-mono"
  >
    <div class="px-4 py-4">
      <div class="py-8">
        <h1>Join The List</h1>
        <input type="email" placeholder=" email address" />
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
      <div class="py-8">
        © 2026 Claudia Sofia Alvarez. All rights reserved.
      </div>
    </div>
    <div class="px-4 py-4">
      <div class="py-6">
        <h1>General Inquires</h1>
        <a class="underline">info@claudiasofialvarez.com</a>
      </div>
      <div class="py-6">
        <h1>Press Inquires</h1>
        <a class="underline">press@claudiasofialvarez.com</a>
      </div>
      <div class="py-6">
        <h1>Publisher</h1>
        <a class="underline">rental@claudiasofialvarez.com</a>
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
