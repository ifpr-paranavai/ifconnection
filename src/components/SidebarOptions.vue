<!-- <template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    class="menuSidebar"
    dark
    width="207px"
  >
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        :prepend-icon="item.icon"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {

  props: {
    value: { type: Boolean, required: true },
  },

  data: () => ({
    items: [
      {
        to: '/singup',
        title: 'Cadastrar-se',
        icon: '',
      },
      {
        to: '/',
        title: 'Sobre',
        icon: '',
      },
      {
        to: '/dashboard',
        title: 'Entrar',
        icon: 'mdi-account',
      },
    ],
    right: null,
  }),

  computed: {
    drawer: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      },
    },
  },
}
</script>

<style lang="scss" >
.menuSidebar {
    padding-top: 75px !important;
    background-image: url('@/assets/img/bg-login.jpg');
    background-position: center;
    * {
      font-size: 0.875rem !important;
      font-weight: 500;
      letter-spacing: 0.0892857143em;
    }
    .v-list {
      padding: 0;
    }
    .v-list-item__icon {
      display: none;
    }
    .v-list-group {
      border-bottom: 1px solid rgba(255,255,255,0.9);
      opacity: 0.9;
    }
    .upperCase {
      text-transform: uppercase;
    }
    .primary--text {
      color: white !important;
    }
    .v-list-group__items {
      border-top: 1px solid rgba(255,255,255,0.9);
      opacity: 0.9;
      >.v-list-item {
        padding: 0 0 0 16px;
        width: 100%;
        display: block;
      }
      .menuListItem {
        &:not(:last-child){
      border-bottom: 1px solid rgba(255,255,255,0.9);
  }
      }
    }

}
</style> -->
