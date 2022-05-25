<template>
  <v-container
    :class="$vuetify.breakpoint.name"
  >
    <h1>
      IF Connection
    </h1>
    <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    </p>
    <div id="linha-horizontal-right" />
    <div class="destaque">
      <h2>
        Título 1
      </h2>
      <div v-if="!isMobile" class="draw draw01">
        <v-img src="/" />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>
      <cite id="citetop">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </cite>
      <div v-if="isMobile" class="draw draw01">
        <v-img src="/" />
      </div>
      <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>
      <cite>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </cite>
    </div>
    <div id="linha-horizontal-left" />

    <div class="destaque">
      <h2>
        Título 3
      </h2>
      <div v-if="!isMobile" class="draw draw02">
        <v-img src="/" />
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>
      <div v-if="isMobile" class="draw draw02">
        <v-img src="/" />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>
    </div>
    <div id="linha-horizontal-right" />

    <div class="destaque">
      <h2>
        Promovemos a juventude
      </h2>
      <div v-if="!isMobile" class="draw draw03">
        <v-img src="/" />
      </div>
      <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>
      <div v-if="isMobile" class="draw draw03">
        <v-img src="/" />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      </p>
    </div>
    <div id="linha-horizontal-left" />
  </v-container>
</template>

<script>
export default {

  layout: 'site',

  computed: {
    isMobile () {
      return this.$store.state.isMobile
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: #1C5C27;
  line-height: 3em;
}
h2 {
  color: #1C5C27;
  line-height: 3em;
  text-align: center;
}
.container {
  &.lg {
    max-width: 950px;
  }
  .draw .v-image{
    max-width: 230px;
    margin: 0 auto;
  }
  &.xs {
    .draw02, .draw03 {
      .v-image {
        position: relative;
        right: 10px;
      }
    }
  }
  &:not(.xs) {
  h2 {
    text-align: left;
  }
  .destaque {
    position: relative;
    margin-top: 30px;
    .draw .v-image {
      max-width: 230px;
      float: right;
      margin: 0 50px 10px 50px;
    }
    .draw02 .v-image {
      float: left;
      margin: 40px 50px 10px 50px;
    }
    .draw03 .v-image {
      margin: -10px 50px 10px 50px;
    }
  }
}

  #citetop {
    margin-bottom: 10px;
  }
}
cite {
  display: block;
  margin-left: 20%;
  color: black;
}
p {
  text-indent: 5%;
  color: black;
}

#linha-horizontal-right {
  margin-left: -180px;
  margin-top: 30px;
  width: 140%;
  border: .2rem solid #1C5C27;
  border-bottom-right-radius: 150%;
  border-top-left-radius: 150%;
}
#linha-horizontal-left {
  margin-left: -180px;
  margin-top: 30px;
  width: 140%;
  border: .2rem solid #1C5C27;
  border-bottom-left-radius: 150%;
  border-top-right-radius: 150%;
}
</style>
