<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center">
      <h1 class="text-4xl font-extrabold text-text-primary sm:text-5xl">
        News & Updates
      </h1>
      <p class="mt-4 text-xl text-gray-500">
        Stay informed about the latest in HR technology and industry trends
      </p>
    </div>

    <div class="mt-12 grid gap-8 lg:grid-cols-2">
      <!-- Featured Article -->
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="relative">
          <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="Featured Article">
          <div class="absolute top-0 right-0 bg-brand-blue text-white px-3 py-1 m-2 rounded">
            Featured
          </div>
        </div>
        <div class="p-6">
          <h2 class="text-2xl font-bold text-text-primary">The Future of HR Technology</h2>
          <p class="mt-2 text-gray-500">April 28, 2024</p>
          <p class="mt-4 text-gray-600">
            Explore how artificial intelligence and machine learning are transforming HR management and what it means for your business.
          </p>
          <div class="mt-4">
            <a href="#" class="text-brand-blue hover:text-blue-700">Read more →</a>
          </div>
        </div>
      </div>

      <!-- Recent Articles -->
      <div class="space-y-8">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-primary">New Payroll Regulations for 2024</h3>
            <p class="mt-2 text-gray-500">April 25, 2024</p>
            <p class="mt-4 text-gray-600">
              Stay compliant with the latest payroll regulations and ensure your business is up to date with the new requirements.
            </p>
            <div class="mt-4">
              <a href="#" class="text-brand-blue hover:text-blue-700">Read more →</a>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-primary">Employee Engagement Strategies</h3>
            <p class="mt-2 text-gray-500">April 20, 2024</p>
            <p class="mt-4 text-gray-600">
              Discover effective strategies to boost employee engagement and create a more productive workplace environment.
            </p>
            <div class="mt-4">
              <a href="#" class="text-brand-blue hover:text-blue-700">Read more →</a>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-primary">Remote Work Best Practices</h3>
            <p class="mt-2 text-gray-500">April 15, 2024</p>
            <p class="mt-4 text-gray-600">
              Learn how to effectively manage remote teams and maintain productivity in a distributed work environment.
            </p>
            <div class="mt-4">
              <a href="#" class="text-brand-blue hover:text-blue-700">Read more →</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Signup -->
    <div class="mt-12 bg-brand-blue rounded-lg shadow-lg">
      <div class="px-6 py-8 sm:px-8">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
          <p class="mt-2 text-blue-100">
            Stay updated with the latest HR news and insights
          </p>
        </div>
        <form class="mt-6 sm:flex justify-center">
          <input type="email" placeholder="Enter your email" class="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue focus:ring-white focus:border-white sm:max-w-xs">
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue focus:ring-white">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
</script> 