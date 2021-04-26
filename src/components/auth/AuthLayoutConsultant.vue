<template>
  <div class="auth-layout bg-consultant row align-content--center">
    <div class="flex xs1 offset--md1 offset--lg6">
      <router-link class="flex xs1 offset--md1 offset--lg6" style="padding-left: 163%;" to="/">
        <img src="./assets/logo01.png" width="304" height="130" />
        <!-- <va-icon-vuestic /> -->
      </router-link>
    </div>
    <div class="flex xs1 offset--md1 offset--lg6" style="padding-left: 16.2rem;">
      <p class="texttitle">
        CONSULTANT
      </p>
    </div>

    <div class="flex xs12 pa-3">
      <div class="d-flex justify--end marginedit">
        <va-card class="__card transparent">
          <va-tabs v-model="tabIndex" center>
            <va-tab style="color:white;">{{ $t("auth.login") }}</va-tab>
            <va-tab>Create new account</va-tab>
          </va-tabs>

          <va-separator />

          <div class="pa-3">
            <router-view />
          </div>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
// import VaIconVuestic from '../../iconset/VaIconVuestic'

const tabs = ['login-consultant', 'signup-consultant']

export default {
  name: 'AuthLayout',
  // components: { VaIconVuestic },
  data () {
    return {
      selectedTabIndex: 0,
      tabTitles: ['login', 'createNewAccount'],
    }
  },
  computed: {
    tabIndex: {
      set (tabIndex) {
        this.$router.push({ name: tabs[tabIndex] })
      },
      get () {
        return tabs.indexOf(this.$route.name)
      },
    },
  },
}
</script>

<style lang="scss">
.va-tabs .va-tabs__slider-wrapper {
      background-color: #007bff !important;
}
.row{
  display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0px !important;
    margin-left: 0px !important;
}
.va-tabs{
  color: #007bff;
}
.link, .content a {
    color: #007bff;
}
.va-button {
  background-image: linear-gradient(to right, rgb(65, 86, 118), rgb(0, 123, 255));
}
.auth-layout {
  min-height: 100vh;
  background-color: black;
  &__options {
    @include media-breakpoint-down(xs) {
      flex-direction: column;
    }
  }
}
.bg-consultant{
  background-image: url('./assets/Background-05.png') !important;
  background-repeat: no-repeat;
  background-size: cover;
}
.__card {
    width: 100%;
    max-width: 600px;
  }
.transparent{
    background-color: rgba(255, 255, 255, .15) !important;
    backdrop-filter: blur(5px) !important;
}

</style>
