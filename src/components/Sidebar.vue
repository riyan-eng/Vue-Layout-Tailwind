<template>
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
</template>