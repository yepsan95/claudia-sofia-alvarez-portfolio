<template>
  <div class="surface-ink min-h-screen pt-16 md:pt-[70px]">
    <section class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(110,89,109,0.24),transparent_24%),radial-gradient(circle_at_88%_12%,rgba(181,154,92,0.12),transparent_22%)]"
      />
      <div
        class="mx-auto grid min-h-[calc(100vh-70px)] max-w-[96rem] items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.68fr)] lg:px-10 xl:gap-12"
      >
        <div
          class="relative overflow-hidden bg-black shadow-[var(--shadow-deep)]"
        >
          <img
            src="../assets/photo.jpg"
            alt="Portrait of Claudia Sofia Alvarez"
            class="h-full min-h-[28rem] w-full object-cover object-center"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.16)_32%,rgba(0,0,0,0.52)_100%)]"
          />
        </div>
        <div class="relative z-10 self-center lg:-ml-20 xl:-ml-28">
          <div class="panel-paper px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <p class="section-label text-[var(--color-plum)]">Composer</p>
            <h1
              class="mt-3 max-w-[14ch] font-display text-[2.6rem] leading-[0.92] text-[var(--text-primary-light)] sm:text-[3.3rem] lg:text-[4.3rem]"
            >
              Claudia Sofia Alvarez
            </h1>
            <div class="mt-6 flex items-start gap-4 sm:gap-5">
              <div class="mt-1 h-32 w-px shrink-0 bg-[var(--color-gold)]" />
              <p
                class="max-w-[26rem] text-[1rem] leading-8 text-[var(--text-secondary-light)] sm:text-[1.05rem]"
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="border-t border-[rgba(201,192,181,0.1)] bg-[rgba(22,24,29,0.78)]"
    >
      <div
        class="mx-auto grid max-w-[90rem] gap-8 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-10"
      >
        <div class="space-y-8">
          <div>
            <p class="section-label text-[var(--color-gold)]">Join The List</p>
            <div class="mt-3 flex max-w-sm flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                class="min-w-0 flex-1 border border-[rgba(201,192,181,0.18)] bg-[rgba(243,238,230,0.06)] px-4 py-3 text-sm text-[var(--text-primary-dark)] placeholder:text-[var(--text-secondary-dark)] focus:border-[rgba(181,154,92,0.64)] focus:outline-none"
              />
              <button
                type="button"
                class="button-primary rounded-sm px-4 py-3 text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <p class="section-label text-[var(--color-gold)]">Social Media</p>
            <ul class="mt-4 flex gap-4">
              <li>
                <a
                  href="https://www.facebook.com/claudiasofialvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex rounded-full border border-[rgba(201,192,181,0.18)] p-3 text-[var(--text-primary-dark)] transition-colors duration-300 hover:border-[rgba(181,154,92,0.6)] hover:text-[var(--color-gold)]"
                >
                  <facebook-icon class="size-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/claudiasofialvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex rounded-full border border-[rgba(201,192,181,0.18)] p-3 text-[var(--text-primary-dark)] transition-colors duration-300 hover:border-[rgba(181,154,92,0.6)] hover:text-[var(--color-gold)]"
                >
                  <instagram-icon class="size-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@claudiasofialvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex rounded-full border border-[rgba(201,192,181,0.18)] p-3 text-[var(--text-primary-dark)] transition-colors duration-300 hover:border-[rgba(181,154,92,0.6)] hover:text-[var(--color-gold)]"
                >
                  <youtube-icon class="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <p class="section-label text-[var(--text-secondary-dark)]">
            © 2026 Claudia Sofia Alvarez. All rights reserved.
          </p>
        </div>
        <div
          class="grid gap-6 border-t border-[rgba(201,192,181,0.1)] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0"
        >
          <div>
            <p class="section-label text-[var(--color-gold)]">
              General Inquiries
            </p>
            <a
              href="mailto:info@claudiasofialvarez.com"
              class="mt-2 block text-[var(--text-primary-dark)] underline decoration-[rgba(181,154,92,0.55)] underline-offset-4 transition-colors duration-300 hover:text-[var(--color-gold)]"
            >
              info@claudiasofialvarez.com
            </a>
          </div>
          <div>
            <p class="section-label text-[var(--color-gold)]">
              Press Inquiries
            </p>
            <a
              href="mailto:press@claudiasofialvarez.com"
              class="mt-2 block text-[var(--text-primary-dark)] underline decoration-[rgba(181,154,92,0.55)] underline-offset-4 transition-colors duration-300 hover:text-[var(--color-gold)]"
            >
              press@claudiasofialvarez.com
            </a>
          </div>
          <div>
            <p class="section-label text-[var(--color-gold)]">Publisher</p>
            <a
              href="mailto:rental@claudiasofialvarez.com"
              class="mt-2 block text-[var(--text-primary-dark)] underline decoration-[rgba(181,154,92,0.55)] underline-offset-4 transition-colors duration-300 hover:text-[var(--color-gold)]"
            >
              rental@claudiasofialvarez.com
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import facebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";
</script>

<style scoped></style>
