<script>
import { HomeIcon, ShoppingCartIcon, UserCircleIcon, Bars3Icon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import SideMenu from './SideMenu.vue'
export default {
  components: {
    HomeIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    Bars3Icon,
    ChatBubbleLeftRightIcon,
    SideMenu,
  },
  data() {
    return {
      activePath: 'ini itu',
      expand: true,
      listMenu: [
        {
          menuName: 'home',
          menuPath: '/',
          menuIcon: 'HomeIcon',
          active: false,
        },
        {
          menuName: 'user profile',
          menuPath: '/profile',
          menuIcon: 'UserCircleIcon',
          active: false,
        },
        {
          menuName: 'about',
          menuPath: '/about',
          menuIcon: 'ShoppingCartIcon',
          active: false,
        },
        {
          menuName: 'comment',
          menuPath: '/comment',
          menuIcon: 'ChatBubbleLeftRightIcon',
          active: false,
        },
      ]
    }
  },
  computed: {
    active() {
      for (var menu of this.listMenu) {
        if (menu.menuPath == this.$route.path) {
          menu.active = true
        } else {
          menu.active = false
        }
      }
      return this.listMenu
    }
  },
  methods: {
    onExpand() {
      this.expand = !this.expand
    }
  }


}
</script>

<template>
  <header class="fixed bg-blue-600 shadow-md  z-50 w-full px-4 py-2 flex justify-between items-center">
    <div class="inline-flex items-center">
      <div @click="onExpand" class="hover:bg-gray-700 p-1 rounded-full" style="cursor: pointer;">
        <Bars3Icon class="h-5 w-5 text-slate-100" />
      </div>
      <router-link to="/" class="ml-3 text-2xl text-white">My App {{ expand }} </router-link>
    </div>
    <div>
      <router-link to="/" class="text-white hover:bg-gray-700 px-3 rounded py-1">Login</router-link>
      <router-link to="/" class="text-white hover:bg-gray-700 px-3 rounded py-1">Register</router-link>
    </div>
  </header>
  <aside id="style-4"
    :class="expand ? 'fixed bg-white w-44 h-screen pt-14 py-5 shadow overflow-auto' : 'fixed bg-white w-18 h-screen pt-14 py-5 shadow overflow-auto'">
    <div v-for="menu of active">
      <SideMenu :expand="expand" :menu="menu">
        <component :is="menu.menuIcon" class="h-5 w-5 text-blue-500"></component>
      </SideMenu>
    </div>
  </aside>
  <main class="pt-16 px-4 pb-4" :style="expand ? 'margin-left:175px' : 'margin-left:60px'">
    <router-view>
    </router-view>
  </main>

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
