<template>
  <v-app>
    <app-header
      id="appHeader"
      v-model="drawer"
      :is-mobile-menu="isMobileMenu"
    />
    <sidebar-options v-if="isMobileMenu" v-model="drawer" /> <!-- :value="drawer" @input="(v) => drawer=v"-->
    <v-sheet
      id="appContent"
      class="overflow-y-auto"
      style="height: 100vh;"
    >
      <v-main :class="$vuetify.breakpoint.name">
        <nuxt />
      </v-main>
      <app-footer
        :is-mobile-menu="isMobileMenu"
      />
    </v-sheet>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import SidebarOptions from '@/components/SidebarOptions.vue'

export default {

  components: {
    AppHeader,
    AppFooter,
    SidebarOptions,
  },

  middleware: 'authenticate',

  data () {
    return {
      drawer: false,
    }
  },

  computed: {
    isMobileMenu () {
      let isMobile = false
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': isMobile = true
          break
        case 'sm': isMobile = true
          break
      }
      this.$store.commit('setIsMobile', isMobile)
      return isMobile
    },
  },
}
</script>

<style lang="scss">
html, body, #app {
  overflow: hidden !important;
}
#appHeader {
  z-index: 50;
}
#appContent {
  background: white;
  .v-main {
    padding-top: 75px !important;
    margin-bottom: 20px !important;
  }
}
.flexcard {
  display: flex !important;
  flex-direction: column !important;
}

</style>
