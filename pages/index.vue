<template>
  <div>
    <!-- Hero Section with Slider -->
    <section class="relative bg-white overflow-hidden w-full">
      <!-- Slider -->
      <div class="relative h-[600px] w-full">
        <!-- Slide 1 -->
        <div class="absolute inset-0 transition-opacity duration-500 ease-in-out w-full"
          :class="{ 'opacity-0': currentSlide !== 0 }">
          <img src="/images/hero/hero-1.png" alt="Mining Industry Professional"
            class="absolute top-0 left-0 w-full h-auto object-cover" />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center">
                <div class="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-2 mb-4">
                  <span class="text-white text-sm font-extrabold">Payroll System</span>
                </div>
                <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span class="block transform transition-all duration-500 font-extrabold"
                    :class="{ 'translate-y-0 opacity-100': currentSlide === 0, 'translate-y-4 opacity-0': currentSlide !== 0 }">Streamline Your</span>
                  <span class="block transform transition-all duration-500 delay-100 font-extrabold"
                    :class="{ 'translate-y-0 opacity-100': currentSlide === 0, 'translate-y-4 opacity-0': currentSlide !== 0 }">Payroll Management</span>
                </h1>
                <p class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl transform transition-all duration-500 delay-200"
                  :class="{ 'translate-y-0 opacity-100': currentSlide === 0, 'translate-y-4 opacity-0': currentSlide !== 0 }">
                  Ensure seamless and accurate payroll processing with our fixed-term licensed service. Multi-payroll capability and advanced reporting.
                </p>
                <div class="mt-5 sm:mt-8 flex justify-center space-x-4 transform transition-all duration-500 delay-300"
                  :class="{ 'translate-y-0 opacity-100': currentSlide === 0, 'translate-y-4 opacity-0': currentSlide !== 0 }">
                  <NuxtLink to="/contact"
                    class="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-[#0784BC] bg-white hover:bg-gray-50 transition-colors duration-300">
                    Get Started
                  </NuxtLink>
                  <NuxtLink to="/solutions"
                    class="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#0784BC] hover:bg-[#056B9E] transition-colors duration-300">
                    Learn More
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="absolute inset-0 transition-opacity duration-500 ease-in-out w-full"
          :class="{ 'opacity-0': currentSlide !== 1 }">
          <img src="/images/hero/hero-2.png" alt="Agriculture Professional"
            class="absolute top-0 left-0 w-full h-auto object-cover" />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center">
                <div class="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-2 mb-4">
                  <span class="text-white text-sm font-extrabold">HR System</span>
                </div>
                <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span class="block transform transition-all duration-500 font-extrabold"
                    :class="{ 'translate-y-0 opacity-100': currentSlide === 1, 'translate-y-4 opacity-0': currentSlide !== 1 }">Comprehensive</span>
                  <span class="block transform transition-all duration-500 delay-100 font-extrabold"
                    :class="{ 'translate-y-0 opacity-100': currentSlide === 1, 'translate-y-4 opacity-0': currentSlide !== 1 }">HR Management</span>
                </h1>
                <p class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl transform transition-all duration-500 delay-200"
                  :class="{ 'translate-y-0 opacity-100': currentSlide === 1, 'translate-y-4 opacity-0': currentSlide !== 1 }">
                  A comprehensive and adaptable HR Management solution with modular architecture and seamless third-party integration.
                </p>
                <div class="mt-5 sm:mt-8 flex justify-center transform transition-all duration-500 delay-300"
                  :class="{ 'translate-y-0 opacity-100': currentSlide === 1, 'translate-y-4 opacity-0': currentSlide !== 1 }">
                  <NuxtLink to="/solutions"
                    class="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#0784BC] hover:bg-[#056B9E] transition-colors duration-300">
                    Explore Solutions
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="absolute inset-0 transition-opacity duration-500 ease-in-out w-full"
          :class="{ 'opacity-0': currentSlide !== 2 }">
          <img src="/images/hero/hero-3.png" alt="Manufacturing Professional"
            class="absolute top-0 left-0 w-full h-auto object-cover" />
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center">
                <div class="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-2 mb-4">
                  <span class="text-white text-sm font-extrabold">HR Consultancy</span>
                </div>
                <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span class="block transform transition-all duration-500 font-extrabold"
                    :class="{ 'translate-y-0 opacity-100': currentSlide === 2, 'translate-y-4 opacity-0': currentSlide !== 2 }">Expert HR</span>
                  <span class="block transform transition-all duration-500 delay-100 font-extrabold"
                    :class="{ 'translate-y-0 opacity-100': currentSlide === 2, 'translate-y-4 opacity-0': currentSlide !== 2 }">Solutions</span>
                </h1>
                <p class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl transform transition-all duration-500 delay-200"
                  :class="{ 'translate-y-0 opacity-100': currentSlide === 2, 'translate-y-4 opacity-0': currentSlide !== 2 }">
                  Expert solutions including HR policies, job evaluation, performance management, and employee engagement.
                </p>
                <div class="mt-5 sm:mt-8 flex justify-center transform transition-all duration-500 delay-300"
                  :class="{ 'translate-y-0 opacity-100': currentSlide === 2, 'translate-y-4 opacity-0': currentSlide !== 2 }">
                  <NuxtLink to="/contact"
                    class="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#0784BC] hover:bg-[#056B9E] transition-colors duration-300">
                    Schedule Demo
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slider Controls -->
        <div class="absolute bottom-0 left-0 right-0">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-center space-x-2 pb-4">
              <button v-for="(_, index) in slides" :key="index" @click="currentSlide = index"
                class="w-2 h-2 rounded-full transition-colors duration-300"
                :class="currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white'"></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative bg-gradient-to-r from-[#0784BC]/10 to-blue-500/10 py-12 overflow-hidden">
      <div class="absolute inset-0">
        <div class="h-full w-full bg-[#F5F9FF]"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-[#0784BC]/5 via-blue-500/5 to-[#0784BC]/5 backdrop-blur-sm"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/50 rounded-2xl p-8 backdrop-blur-sm shadow-lg">
          <div class="flex-1">
            <h2 class="text-3xl font-extrabold text-[#0784BC] sm:text-4xl">
              Experience the Difference
            </h2>
            <p class="mt-3 text-lg text-gray-600 max-w-3xl">
              Join hundreds of successful organizations that trust our HR solutions
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <NuxtLink to="/contact" 
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#0784BC] hover:bg-[#056B9E] transition-colors duration-300 shadow-md hover:shadow-lg">
                Get Started
              </NuxtLink>
              <NuxtLink to="/solutions" 
                class="inline-flex items-center px-6 py-3 border border-[#0784BC] text-base font-medium rounded-full text-[#0784BC] hover:bg-[#0784BC] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg">
                View Solutions
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-wrap justify-center gap-8 md:gap-12 bg-white p-6 rounded-xl shadow-sm">
            <div class="text-center transform hover:scale-105 transition-transform duration-300">
              <div class="text-4xl font-extrabold text-[#0784BC] mb-1">15+</div>
              <div class="text-sm font-medium text-gray-600">Years Experience</div>
            </div>
            <div class="text-center transform hover:scale-105 transition-transform duration-300">
              <div class="text-4xl font-extrabold text-[#0784BC] mb-1">500+</div>
              <div class="text-sm font-medium text-gray-600">Happy Clients</div>
            </div>
            <div class="text-center transform hover:scale-105 transition-transform duration-300">
              <div class="text-4xl font-extrabold text-[#0784BC] mb-1">24/7</div>
              <div class="text-sm font-medium text-gray-600">Support</div>
            </div>
            <div class="text-center transform hover:scale-105 transition-transform duration-300">
              <div class="text-4xl font-extrabold text-[#0784BC] mb-1">98%</div>
              <div class="text-sm font-medium text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center justify-center w-16 h-16 bg-[#0784BC]/10 rounded-full mx-auto mb-4">
              <svg class="w-8 h-8 text-[#0784BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-center mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 text-center mb-4">{{ service.description }}</p>
            <div class="text-center">
              <NuxtLink :to="service.link" class="inline-block bg-[#0784BC] text-white px-4 py-2 rounded-lg hover:bg-[#056B9E] transition-colors duration-300">
                Learn More
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gradient-to-br from-[#F5F9FF] to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-extrabold text-[#272020] sm:text-4xl">
            Why Choose Creative HR Solutions?
          </h2>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of innovation, reliability, and expertise in HR management
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Feature 1 -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-center justify-center w-16 h-16 bg-[#0784BC]/10 rounded-full mb-6">
              <svg class="w-8 h-8 text-[#0784BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#272020] mb-4">Proven Track Record</h3>
            <p class="text-gray-600">
              With over 15 years of experience and 500+ satisfied clients, we've established ourselves as Zimbabwe's leading HR solutions provider.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-center justify-center w-16 h-16 bg-[#0784BC]/10 rounded-full mb-6">
              <svg class="w-8 h-8 text-[#0784BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#272020] mb-4">Innovative Technology</h3>
            <p class="text-gray-600">
              Cutting-edge solutions including WhatsApp payslips, biometric attendance, and mobile applications for modern HR management.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-center justify-center w-16 h-16 bg-[#0784BC]/10 rounded-full mb-6">
              <svg class="w-8 h-8 text-[#0784BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#272020] mb-4">24/7 Support</h3>
            <p class="text-gray-600">
              Round-the-clock customer support with rapid response times, ensuring your HR operations run smoothly at all times.
            </p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <NuxtLink to="/contact" class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#0784BC] hover:bg-[#056B9E] transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Trade References Section -->
    <section class="py-20 bg-gradient-to-br from-[#F5F9FF] to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-extrabold text-[#272020] sm:text-4xl">
            Trade References
          </h2>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Join our growing network of satisfied clients across Zimbabwe's most respected institutions
          </p>
        </div>

        <!-- Logo Carousel -->
        <div class="relative overflow-hidden">
          <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F9FF] to-transparent z-10"></div>
          <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5F9FF] to-transparent z-10"></div>
          
          <div class="flex space-x-16 animate-scroll">
            <!-- Original logos -->
            <div v-for="(logo, index) in clientLogos" :key="index" class="flex-shrink-0">
              <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  class="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-110 contrast-110"
                  :src="logo" 
                  :alt="'Client ' + (index + 1)" 
                  loading="eager">
              </div>
            </div>
            <!-- Duplicate logos for seamless scrolling -->
            <div v-for="(logo, index) in clientLogos" :key="'dup-' + index" class="flex-shrink-0">
              <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  class="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-110 contrast-110"
                  :src="logo" 
                  :alt="'Client ' + (index + 1)" 
                  loading="eager">
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center">
          <NuxtLink to="/contact" class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#0784BC] hover:bg-[#056B9E] transition-colors duration-300 shadow-lg hover:shadow-xl">
            Join Our Client Network
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative bg-[#0784BC] overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#0784BC] opacity-90"></div>
        <div class="absolute inset-0 bg-grid-white/10"></div>
      </div>
      <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-20">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div class="lg:col-span-7">
            <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your HR Operations?
            </h2>
            <p class="mt-4 text-lg text-blue-100 max-w-3xl">
              Join hundreds of successful organizations that trust Creative HR Solutions. Schedule a demo today and discover how our solutions can streamline your HR processes.
            </p>
            <div class="mt-8 flex space-x-4">
              <NuxtLink to="/contact"
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-[#0784BC] bg-white hover:bg-blue-50 transition-colors duration-300">
                Schedule Demo
              </NuxtLink>
              <NuxtLink to="/solutions"
                class="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors duration-300">
                Explore Solutions
              </NuxtLink>
            </div>
          </div>
          <div class="mt-12 lg:mt-0 lg:col-span-5">
            <div class="relative transform translate-x-4">
              <svg class="absolute top-0 left-1/2 -ml-3" width="404" height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-blue-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
              </svg>
              <div class="relative">
                <img class="rounded-lg shadow-xl" src="/images/hero/hero-3.jpg" alt="HR Management Dashboard">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import all client logos
const clientLogos = [
  '/images/Frame 1 (7).png',
  '/images/Frame 1 (8).png',
  '/images/Frame 1 (9).png',
  '/images/Frame 1 (10).png',
  '/images/Frame 1 (11).png',
  '/images/Frame 1 (12).png',
  '/images/Frame 1 (13).png',
  '/images/Frame 1 (14).png',
  '/images/Frame 1 (15).png',
  '/images/Frame 1 (16).png',
]

const currentSlide = ref(0)
const slides = ref(3)
let slideInterval

const currentService = ref(0)
const services = [
  {
    title: 'Payroll System',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    description: 'Ensure seamless and accurate payroll processing with our fixed-term licensed service. Features include parameter-driven configuration, multi-payroll capability, advanced reporting via Crystal Report Writer, and robust security features with flexible payroll cycles.',
    link: '/solutions/payroll'
  },
  {
    title: 'HR System',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    description: 'A comprehensive and adaptable HR Management solution with modular architecture, seamless third-party integration, and powerful user interface. Features include granular access control, automated notifications, and extensive customization options.',
    link: '/solutions/hr-system'
  },
  {
    title: 'HR Consultancy',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    description: 'Expert solutions including HR policies, job evaluation, performance management, compensation & benefits, and employee engagement. We provide comprehensive HR support from policy development to disciplinary hearings.',
    link: '/solutions/consultancy'
  },
  {
    title: 'Systems Integration',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    description: 'Seamlessly connect business systems including Payroll, Accounting, HR Management, and ERP solutions like SAP, Microsoft Dynamics 365, and Sage Pastel. Our integration services enhance operational efficiency and data consistency.',
    link: '/solutions/integration'
  },
  {
    title: 'Training',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    description: 'Professional training programs in Payroll & HR Systems, Business & Technical Skills, and Workplace Development. Our comprehensive training solutions enhance skills and boost productivity across your organization.',
    link: '/solutions/training'
  },
  {
    title: 'Customer Support',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    description: '24/7 customer response, phone consultation, rapid email response, remote access support, and on-site visits. Our dedicated team ensures minimal downtime and maximum efficiency for your operations.',
    link: '/solutions/support'
  }
]

const nextService = () => {
  currentService.value = (currentService.value + 1) % services.length
}

const prevService = () => {
  currentService.value = (currentService.value - 1 + services.length) % services.length
}

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value
  }, 5000)
}

onMounted(() => {
  startSlideShow()
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.delay-100 {
  transition-delay: 100ms;
}

.delay-200 {
  transition-delay: 200ms;
}

.delay-300 {
  transition-delay: 300ms;
}

/* New animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
}

.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.02);
}

.bg-grid-white\/10 {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E");
}

/* Add transition styles for service slider */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

@keyframes slideLoop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.33%);
  }
}

.slider-container {
  display: flex;
  width: 300%;
  animation: slideLoop 15s linear infinite;
}

.slider-container:hover {
  animation-play-state: paused;
}

.slide-item {
  width: 33.33%;
  flex-shrink: 0;
}

.slider-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>