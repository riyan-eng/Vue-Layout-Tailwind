<template>
    <div class="flex flex-col text-left px-3">
        <router-link :to="menu.menuPath" :class="menu.active? 'hover:bg-gray-400 bg-gray-200 text-blue-500 px-2 py-2 rounded inline-flex': 'hover:bg-gray-400 px-2 py-2 rounded inline-flex'">
            <slot></slot>
            <span v-if="expand" class="ml-4 text-sm capitalize">{{menu.menuName}}</span>
        </router-link>
    </div>
</template>

<script>
export default{
    props:['expand', 'menu']
}
</script>