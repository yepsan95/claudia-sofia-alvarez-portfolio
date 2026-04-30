<template>
  <div class="surface-ink min-h-screen pt-16 md:pt-[74px]">
    <section
      class="relative overflow-hidden border-b border-[rgba(201,192,181,0.1)]"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(166,124,122,0.16),transparent_22%),radial-gradient(circle_at_82%_16%,rgba(181,154,92,0.1),transparent_20%),linear-gradient(180deg,rgba(33,40,53,0.34),rgba(17,20,26,0.08)_32%,transparent_68%)]"
      />
      <div
        class="mx-auto grid min-h-[calc(100vh-74px)] max-w-[96rem] gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-10 xl:gap-16"
      >
        <div
          class="relative z-10 order-2 max-w-[38rem] pb-8 lg:order-1 lg:pb-12"
        >
          <p class="section-label text-[var(--color-gold)]">Composer · Lima</p>
          <div class="mt-5 score-rule w-full max-w-[16rem]">
            <span class="relative block h-px" />
          </div>
          <h1
            class="mt-7 max-w-[10ch] font-display text-[3.15rem] leading-[0.88] text-[var(--text-primary-dark)] sm:text-[4.5rem] lg:text-[5.9rem]"
          >
            Claudia Sofía Alvarez
          </h1>
          <div
            class="mt-8 grid gap-6 border-t border-[rgba(201,192,181,0.12)] pt-7 lg:grid-cols-[auto_minmax(0,1fr)]"
          >
            <p class="section-label pt-1 text-[var(--text-secondary-dark)]">
              Proposal 02
            </p>
            <div class="space-y-6">
              <p
                class="max-w-[34rem] text-[1.02rem] leading-8 text-[var(--text-secondary-dark)] sm:text-[1.08rem]"
              >
                A contemporary classical composer platform conceived as an
                editorial folio: intimate, restrained, and precise, with the
                atmosphere of a concert program and the structure of an archive.
              </p>
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="panel-ink px-5 py-5">
                  <p class="section-label text-[var(--color-gold)]">
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
                  <p class="section-label text-[var(--color-gold)]">Contact</p>
                  <a
                    href="mailto:info@claudiasofialvarez.com"
                    class="mt-3 inline-block text-sm text-[var(--text-primary-dark)] underline decoration-[rgba(181,154,92,0.4)] underline-offset-4 transition-colors duration-300 hover:text-[var(--color-gold)]"
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
        <div class="relative order-1 lg:order-2">
          <div
            class="pointer-events-none absolute -left-5 top-10 hidden h-[72%] w-[44%] border border-[rgba(201,192,181,0.14)] lg:block"
          />
          <div
            class="relative ml-auto max-w-[46rem] overflow-hidden bg-black shadow-[var(--shadow-deep)]"
          >
            <img
              src="../assets/photo.jpg"
              alt="Portrait of Claudia Sofía Alvarez"
              class="h-[32rem] w-full object-cover object-center sm:h-[40rem] lg:h-[48rem]"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.22)),linear-gradient(90deg,rgba(0,0,0,0.46),transparent_32%,rgba(0,0,0,0.18)_100%)]"
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
        </div>
      </div>
    </section>
    <section class="bg-[rgba(16,19,25,0.92)]">
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
