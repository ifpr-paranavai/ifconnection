<template>
  <modal-base persistent :width="580">
    <template slot="content">
      <v-form ref="form">
        <v-text-field
          v-model="target.name"
          label="Nome"
          :rules="[rules.required]"
        /> 
        <v-text-field
          v-model="target.lastName"
          label="Sobrenome"
          :rules="[rules.required]"
        />
        <v-text-field
          v-model="target.email"
          label="E-mail"
          type="email"
          :rules="[rules.email]"
        />
        <v-text-field
          v-model="target.password"
          label="Senha"
          :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPass ? 'text' : 'password'"
          :disabled="loading"
          @input="notMatch = false"
          @click:append="showPass = !showPass"
        />
        <v-select
          v-model="target.role"
          :rules="[rules.required]"
          :items="['Editor', 'Admin']"
          label="Grupo de acesso"
        />
      </v-form>
    </template>
  </modal-base>
</template>

<script>
import { OnRules } from 'vuetify-js-utils'

import { OnFormModal } from '@/mixins'

import { usersService } from '../UsersService'
import { User } from '../User'

export default {

  mixins: [OnRules, OnFormModal],

  data: () => ({
    showPass: false,
    loading: false,
    notMatch: false,
  }),

  computed: {
    title () {
      return this.isUpdate ? 'Editar Usuário' : 'Adicionar novo Usuário'
    },
  },

  beforeCreate () {
    this.Model = User
    this.$service = usersService
  },
}
</script>
