<template>
  <v-app-bar
    app
    clipped-left
    class="header-toolbar"
    dark
  >
    <!-- left -->
    <v-app-bar-nav-icon
      class="ml-0 mr-3"
      @click.stop="toggleSidebarMenu"
    />
    <nuxt-link
      to="/"
      class="title-link"
    >
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
    </nuxt-link>
  </v-app-bar>
</template>

<script>
import OnMsg from '@/mixins/OnMsg'
import { getAppModule } from '@/store'

export default {

  mixins: [OnMsg],

  computed: {
    title: () => process.env.APP_TITLE,
  },

  methods: {
    toggleSidebarMenu () {
      const appModule = getAppModule(this.$store)
      appModule.toggleSidebarMenu()
    },
  },

}
</script>

<style lang="scss">
.header-toolbar {
  .title-link {
    text-decoration: none;
  }
}
</style>
