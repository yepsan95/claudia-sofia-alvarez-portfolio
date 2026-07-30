<template>
  <div class="surface-ink min-h-screen pt-16 md:pt-[70px]">
    <section class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(106,48,64,0.32),transparent_24%),radial-gradient(circle_at_88%_12%,rgba(109,127,149,0.18),transparent_22%),radial-gradient(circle_at_72%_72%,rgba(93,114,102,0.1),transparent_18%)]"
      />
      <div
        class="mx-auto grid min-h-[calc(100vh-70px)] max-w-[96rem] items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.68fr)] lg:px-10 xl:gap-12"
      >
        <div
          class="relative overflow-hidden bg-black shadow-[var(--shadow-deep)]"
        >
          <img
            src="../assets/photo.jpg"
            alt="Portrait of Claudia Sofía Alvarez"
            class="h-full min-h-[28rem] w-full object-cover object-center"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.16)_32%,rgba(0,0,0,0.52)_100%)]"
          />
          <div
            class="absolute bottom-0 left-0 right-0 grid gap-4 border-t border-[rgba(201,192,181,0.12)] bg-[linear-gradient(180deg,rgba(17,20,26,0),rgba(17,20,26,0.82)_24%,rgba(17,20,26,0.94)_100%)] px-5 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:px-7"
          >
            <div>
              <p class="section-label text-[var(--color-gold)]">Monograph</p>
              <p
                class="mt-2 max-w-[26rem] text-sm leading-7 text-[var(--text-secondary-dark)]"
              >
                Proposal 2 shifts the emphasis from a floating card to a
                full-page editorial spread with a looser, more architectural
                rhythm.
              </p>
            </div>
            <div class="self-end">
              <p class="section-label text-[var(--text-secondary-dark)]">
                Portrait Study · 2026
              </p>
            </div>
          </div>
        </div>
        <div class="relative z-10 self-center lg:-ml-20 xl:-ml-28">
          <div class="panel-paper px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <p class="section-label text-[var(--color-wine)]">Composer</p>
            <h1
              class="mt-3 max-w-[14ch] font-display text-[2.6rem] leading-[0.92] text-[var(--text-primary-light)] sm:text-[3.3rem] lg:text-[4.3rem]"
            >
              Claudia Sofía Alvarez
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
      class="relative overflow-hidden border-t border-[rgba(201,192,181,0.1)] bg-[linear-gradient(180deg,rgba(26,28,34,0.96),rgba(34,27,35,0.96))]"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(138,83,98,0.18),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(93,114,102,0.14),transparent_22%),radial-gradient(circle_at_60%_70%,rgba(109,127,149,0.1),transparent_20%)]"
      />
      <div class="relative mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-10">
        <div
          class="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12"
        >
          <div>
            <p class="section-label text-[var(--color-cypress)]">
              Composer · Lima
            </p>
            <div class="mt-5 score-rule w-full max-w-[16rem]">
              <span class="relative block h-px" />
            </div>
            <div
              class="mt-8 grid gap-6 border-t border-[rgba(201,192,181,0.12)] pt-7 lg:grid-cols-[auto_minmax(0,1fr)]"
            >
              <p class="section-label pt-1 text-[var(--text-secondary-dark)]">
                Proposal 02
              </p>
              <p
                class="max-w-[34rem] text-[1.02rem] leading-8 text-[var(--text-secondary-dark)] sm:text-[1.08rem]"
              >
                A contemporary classical composer platform conceived as an
                editorial folio: intimate, restrained, and precise, with the
                atmosphere of a concert program and the structure of an archive.
              </p>
            </div>
          </div>
          <div
            class="grid gap-6 border-t border-[rgba(201,192,181,0.12)] pt-7 lg:border-t-0 lg:pt-[4.35rem]"
          >
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="panel-ink px-5 py-5">
                <p class="section-label text-[var(--color-cypress)]">
                  Current Focus
                </p>
                <p
                  class="mt-3 text-sm leading-7 text-[var(--text-secondary-dark)]"
                >
                  Vocal, chamber, and interdisciplinary works presented with a
                  quieter monographic cadence.
                </p>
              </div>
              <div class="border border-[rgba(201,192,181,0.14)] px-5 py-5">
                <p class="section-label text-[var(--color-wine)]">Contact</p>
                <a
                  href="mailto:info@claudiasofialvarez.com"
                  class="mt-3 inline-block text-sm text-[var(--text-primary-dark)] underline decoration-[rgba(138,83,98,0.52)] underline-offset-4 transition-colors duration-300 hover:text-[var(--color-gold)]"
                >
                  info@claudiasofialvarez.com
                </a>
              </div>
            </div>
            <div
              class="flex flex-wrap items-center gap-4 border-t border-[rgba(201,192,181,0.12)] pt-6"
            >
              <router-link
                to="/works"
                class="button-primary inline-flex rounded-sm px-5 py-3 text-sm"
              >
                View Catalogue
              </router-link>
              <p class="section-label text-[var(--text-secondary-dark)]">
                Contemporary score studies · performances · archive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-[linear-gradient(180deg,rgba(28,29,35,0.98),rgba(24,20,28,0.98))]"
    >
      <div
        class="mx-auto grid max-w-[96rem] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-10"
      >
        <div class="grid gap-6 sm:grid-cols-3">
          <div class="sm:col-span-2">
            <p class="section-label text-[var(--color-gold)]">Join The List</p>
            <div class="mt-4 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                class="min-w-0 flex-1 border border-[rgba(201,192,181,0.18)] bg-[rgba(243,238,230,0.05)] px-4 py-3 text-sm text-[var(--text-primary-dark)] placeholder:text-[var(--text-secondary-dark)] focus:border-[rgba(181,154,92,0.64)] focus:outline-none"
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
            <p class="section-label text-[var(--color-gold)]">Social</p>
            <ul class="mt-4 flex gap-4">
              <li>
                <a
                  href="https://www.facebook.com/claudiasofialvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex rounded-full border border-[rgba(201,192,181,0.18)] p-3 text-[var(--text-primary-dark)] transition-colors duration-300 hover:border-[rgba(181,154,92,0.6)] hover:text-[var(--color-gold)]"
                >
                  <facebook-icon class="size-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/claudiasofialvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex rounded-full border border-[rgba(201,192,181,0.18)] p-3 text-[var(--text-primary-dark)] transition-colors duration-300 hover:border-[rgba(181,154,92,0.6)] hover:text-[var(--color-gold)]"
                >
                  <instagram-icon class="size-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@claudiasofialvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex rounded-full border border-[rgba(201,192,181,0.18)] p-3 text-[var(--text-primary-dark)] transition-colors duration-300 hover:border-[rgba(181,154,92,0.6)] hover:text-[var(--color-gold)]"
                >
                  <youtube-icon class="size-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="grid gap-5 border-t border-[rgba(201,192,181,0.1)] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
        >
          <div class="grid gap-5 sm:grid-cols-3">
            <div>
              <p class="section-label text-[var(--color-gold)]">
                General Inquiries
              </p>
              <a
                href="mailto:info@claudiasofialvarez.com"
                class="mt-3 block text-sm text-[var(--text-primary-dark)] underline decoration-[rgba(181,154,92,0.48)] underline-offset-4 transition-colors duration-300 hover:text-[var(--color-gold)]"
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
                class="mt-3 block text-sm text-[var(--text-primary-dark)] underline decoration-[rgba(181,154,92,0.48)] underline-offset-4 transition-colors duration-300 hover:text-[var(--color-gold)]"
              >
                press@claudiasofialvarez.com
              </a>
            </div>
            <div>
              <p class="section-label text-[var(--color-gold)]">Publisher</p>
              <a
                href="mailto:rental@claudiasofialvarez.com"
                class="mt-3 block text-sm text-[var(--text-primary-dark)] underline decoration-[rgba(181,154,92,0.48)] underline-offset-4 transition-colors duration-300 hover:text-[var(--color-gold)]"
              >
                rental@claudiasofialvarez.com
              </a>
            </div>
          </div>
          <p class="section-label text-[var(--text-secondary-dark)]">
            © 2026 Claudia Sofía Alvarez. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import facebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";
</script>

<style scoped></style>
