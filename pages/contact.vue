<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center">
      <h1 class="text-4xl font-extrabold text-text-primary sm:text-5xl">
        Contact Us
      </h1>
      <p class="mt-4 text-xl text-gray-500">
        Get in touch with our team
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <!-- Contact Information -->
      <div>
        <h2 class="text-2xl font-bold text-text-primary mb-4">Contact Information</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-semibold text-brand-blue">Address</h3>
            <p class="text-gray-600">123 Business Street, Suite 100<br>Harare, Zimbabwe</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-brand-blue">Phone</h3>
            <p class="text-gray-600">+263 123 456 789</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-brand-blue">Email</h3>
            <p class="text-gray-600">info@creativehr.com</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-brand-blue">Business Hours</h3>
            <p class="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div>
        <h2 class="text-2xl font-bold text-text-primary mb-4">Send us a Message</h2>
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue">
          </div>
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" id="subject" name="subject" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue"></textarea>
          </div>
          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue">
              Send Message
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