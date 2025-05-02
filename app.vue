<template>
  <div class="min-h-screen bg-white">
    <!-- Sticky Navigation -->
    <nav class="fixed w-full bg-white shadow-sm z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex-shrink-0">
              <img src="/creative-solutions-logo.jpg" alt="Creative HR Solutions" class="h-10 w-auto" />
            </NuxtLink>
            <div class="hidden md:ml-10 md:flex md:space-x-8">
              <NuxtLink to="/" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-text-primary hover:text-brand-blue">
                Home
              </NuxtLink>
              <NuxtLink to="/about" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-text-primary hover:text-brand-blue">
                About Us
              </NuxtLink>
              <div class="relative group">
                <button class="inline-flex items-center px-1 pt-1 text-sm font-medium text-text-primary hover:text-brand-blue">
                  Our Solutions
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div class="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <div class="py-1">
                    <NuxtLink to="/solutions/payroll" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">Payroll System</NuxtLink>
                    <NuxtLink to="/solutions/hr-system" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">HR System</NuxtLink>
                    <NuxtLink to="/solutions/outsourced-payroll" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">Outsourced Payroll</NuxtLink>
                    <NuxtLink to="/solutions/systems-integration" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">Systems Integration</NuxtLink>
                    <NuxtLink to="/solutions/support" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">Support</NuxtLink>
                    <NuxtLink to="/solutions/training" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">Training</NuxtLink>
                    <NuxtLink to="/solutions/whatsapp-payslips" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">WhatsApp Payslips</NuxtLink>
                    <NuxtLink to="/solutions/payroll-addons" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">Payroll Add-ons</NuxtLink>
                    <NuxtLink to="/solutions/time-attendance" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">Time and Attendance</NuxtLink>
                    <NuxtLink to="/solutions/hr-consultancy" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">HR Consultancy</NuxtLink>
                    <NuxtLink to="/solutions/stationery" class="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50">Stationery</NuxtLink>
                  </div>
                </div>
              </div>
              <NuxtLink to="/news" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-text-primary hover:text-brand-blue">
                News & Updates
              </NuxtLink>
              <NuxtLink to="/contact" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-text-primary hover:text-brand-blue">
                Contact Us
              </NuxtLink>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-4">
            <NuxtLink to="/contact" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brand-blue bg-blue-50 hover:bg-blue-100">
              Get Started
            </NuxtLink>
            <NuxtLink to="/contact" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-blue hover:bg-blue-700">
              Schedule Demo
            </NuxtLink>
          </div>
          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button type="button" @click="isMobileMenuOpen = !isMobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-6 w-6" :class="{ 'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div class="md:hidden" :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink to="/" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">
            About Us
          </NuxtLink>
          <div class="relative">
            <button @click="isSolutionsOpen = !isSolutionsOpen" class="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">
              Our Solutions
              <svg class="h-5 w-5" :class="{ 'transform rotate-180': isSolutionsOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="pl-4" :class="{ 'block': isSolutionsOpen, 'hidden': !isSolutionsOpen }">
              <NuxtLink to="/solutions/payroll" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">Payroll System</NuxtLink>
              <NuxtLink to="/solutions/hr-system" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">HR System</NuxtLink>
              <NuxtLink to="/solutions/outsourced-payroll" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">Outsourced Payroll</NuxtLink>
              <NuxtLink to="/solutions/systems-integration" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">Systems Integration</NuxtLink>
              <NuxtLink to="/solutions/support" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">Support</NuxtLink>
              <NuxtLink to="/solutions/training" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">Training</NuxtLink>
              <NuxtLink to="/solutions/whatsapp-payslips" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">WhatsApp Payslips</NuxtLink>
              <NuxtLink to="/solutions/payroll-addons" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">Payroll Add-ons</NuxtLink>
              <NuxtLink to="/solutions/time-attendance" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">Time and Attendance</NuxtLink>
              <NuxtLink to="/solutions/hr-consultancy" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">HR Consultancy</NuxtLink>
              <NuxtLink to="/solutions/stationery" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">Stationery</NuxtLink>
            </div>
          </div>
          <NuxtLink to="/news" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">
            News & Updates
          </NuxtLink>
          <NuxtLink to="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-blue hover:bg-gray-50">
            Contact Us
          </NuxtLink>
          <div class="pt-4 pb-3 border-t border-gray-200">
            <div class="flex space-x-4 px-3">
              <NuxtLink to="/contact" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brand-blue bg-blue-50 hover:bg-blue-100">
                Get Started
              </NuxtLink>
              <NuxtLink to="/contact" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-blue hover:bg-blue-700">
                Schedule Demo
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content with padding for fixed nav -->
    <main class="pt-16">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-6">
          <div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div class="text-gray-400">
                <h4 class="font-medium text-white mb-3">Sales</h4>
                <p class="mb-2">Landline: +263242254814</p>
                <p class="mb-2">Mobile: 0719 195 405 / 0779 126 989</p>
                <p class="mb-2">WhatsApp: 0779 356 301 / 0716 386 153</p>
              </div>
              <div class="text-gray-400">
                <h4 class="font-medium text-white mb-3">Support</h4>
                <p class="mb-2">Mobile: 077 935 6303/6/7 / 071 706 8703</p>
                <p class="mb-2">WhatsApp: 071 919 5406/7/8 / 077 917 0089</p>
              </div>
              <div class="text-gray-400">
                <h4 class="font-medium text-white mb-3">Office</h4>
                <p class="mb-2">Landlines: +263242254814 / +26386 7700 9092</p>
                <p class="mb-2">Mobile: 0775 505530</p>
                <p class="mb-2">WhatsApp: 0713 280 910</p>
              </div>
            </div>
            <div class="mt-8 flex justify-center space-x-6">
              <a href="https://www.instagram.com/creative_hrsolutions?igsh=azZldm9vYXRramdt" target="_blank" class="text-gray-400 hover:text-white">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1HSEdqHnFA/" target="_blank" class="text-gray-400 hover:text-white">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/creative-hr-solutions-pvt-ltd/" target="_blank" class="text-gray-400 hover:text-white">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-6 border-t border-gray-800 pt-6 text-center">
          <p class="text-gray-400">&copy; 2024 Creative HR Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const isSolutionsOpen = ref(false)
</script>
