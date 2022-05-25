<template>
  <span>
    <v-tooltip
      v-for="rede in sociais"
      :key="rede.href"
      :bottom="!bottom"
      :top="bottom"
    >
      <template
        #activator="{on}"
      >
        <v-btn
          small
          :href="rede.href"
          class="ml-3"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon>
            {{ rede.icon }}
          </v-icon>
        </v-btn>
      </template>
      <span>{{ rede.title }}</span>
    </v-tooltip>
  </span>
</template>

<script>
export default {
  props: {
    bottom: Boolean,
  },

  data: () => ({
    sociais: [
      {
        title: 'Facebook',
        icon: 'mdi-facebook',
        href: '',
      },
      {
        title: 'Instagram',
        icon: 'mdi-instagram',
        href: '',
      },
    ],
  }),
}
</script>
