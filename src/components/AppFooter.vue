<template>
  <v-footer
    id="appFooter"
    color="#1C5C27"
    class="text-center"
    :class="$vuetify.breakpoint.name"
    dark
  >
    <v-spacer />
    <span>
      <a href="/">
        <v-img
          contain
          max-width="150"
          class="my-2"
          alt=""
          src=""
        />
      </a>
    </span>
    <buttons-menu v-if="isMobileMenu" bottom />
    <v-spacer />
  <span style="font-size: 14px; color: white;">
      Desenvolvido por Raquel Santos. &copy;{{ new Date().getFullYear() }} IfConnection&reg;
    </span>
    <v-spacer />
    <template v-if="!isMobileMenu">
      <buttons-menu bottom />
    </template>

    <v-spacer />
  </v-footer>
</template>

<script>
import ButtonsMenu from './ButtonsMenu.vue'

export default {
  components: {
    ButtonsMenu,
  },
  props: {
    isMobileMenu: Boolean,
  },
}
</script>

<style lang="scss">
.v-footer.xs, .v-footer.sm {
  // display: block;
  bottom: 0;
  position: relative;
  .v-image {
    margin: 10px auto !important;
    height: 100%;
  }
}
#appFooter {
  color: black;
  background-position: bottom;
}

.span{
  background-color: white;
}
</style>
