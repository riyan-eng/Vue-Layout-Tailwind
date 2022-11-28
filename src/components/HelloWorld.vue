<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <!-- <div class="flex h-screen">
    <div class="row-span-3 w-1/4" style="background-color:aqua">01</div>
    <div class="w-full">
      <div class="col-span-2 h-20" style="background-color:blue">02</div>
      <div class="row-span-2 col-span-2 h-96" style="background-color:pink">03</div>

    </div>
  </div> -->
  <header class="fixed bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center">
    <router-link to="/" class="text-2xl text-white">My App</router-link>
    <div>
      <router-link to="/login" class="text-white hover:bg-gray-700 px-3 rounded py-1">Login</router-link>
      <router-link to="/register" class="text-white hover:bg-gray-700 px-3 rounded py-1">Register</router-link>
    </div>
  </header>
  <div class="flex flex-row">
    <div>
      <aside id="style-4" class="fixed bg-white w-44 h-screen pt-14 py-5 shadow overflow-auto">
        <div class="flex flex-col text-left">
          <router-link to="/" class="hover:bg-gray-400 px-5 py-2 rounded">
            <i class="fa fa-dashboard"></i>
            <span class="">Home</span>
          </router-link>
        </div>
        <div class="flex flex-col text-left">
          <router-link to="/about" class="hover:bg-gray-400 px-5 py-2 rounded">
            <i class="fa fa-dashboard"></i>
            <span class="">About</span>
          </router-link>
        </div>
        <div class="flex flex-col text-left">
          <router-link to="/profile" class="hover:bg-gray-400 px-5 py-2 rounded">
            <i class="fa fa-dashboard"></i>
            <span class="">Profile</span>
          </router-link>
        </div>
      </aside>
    </div>
    <div style="margin-left:175px">
      <main class="pt-16 px-4 pb-4">
        <router-view>
        </router-view>
      </main>
    </div>
    <!-- Sidebar -->

    <!-- Main Page -->

  </div>
</template>

<style scoped>
#style-4::-webkit-scrollbar {
  width: 1px;
  background-color: #F5F5F5;
}

#style-4::-webkit-scrollbar-thumb {
  background-color: #686868;
  border: 1px solid #555555;
}
</style>
