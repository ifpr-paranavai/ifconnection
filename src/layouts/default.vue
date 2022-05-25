<template>
  <v-app>
    <!-- header -->
    <sidebar-menu />
    <header-toolbar
      :title="title"
    />

    <!-- main -->
    <v-main id="appMain">
      <nuxt />
    </v-main>

    <!-- popup: msg -->
    <float-msg />
  </v-app>
</template>

<script>
export default {
  components: {
    SidebarMenu: () => import('@/components/SidebarMenu.vue'),
    HeaderToolbar: () => import('@/components/HeaderToolbar.vue'),
    FloatMsg: () => import('@/components/FloatMsg.vue'),
  },

  middleware: 'authenticate',

  data () {
    return {
      title: process.env.shortTitle,
    }
  },
}
</script>

<style lang="scss">
#appMain .v-main__wrap {
  padding-left: 56px;
}
</style>
