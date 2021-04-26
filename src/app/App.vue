/* eslint-disable import/no-duplicates */
<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
import * as servicesModule0 from "../../src/app/module0/services";
import * as servicesModule1 from "../../src/app/module1/services";
import NProgress from "nprogress";

export default {
  // computed: {
  //   currentRouteName() {
  //     return this.$route.name;
  //   }
  // },
  name: "app",
  beforeCreate: async function() {
    try {
      console.log(window.location.pathname);
      // eslint-disable-next-line no-undef
      NProgress.start();
      const user = localStorage.getItem("user");
      console.log(JSON.stringify(user));
      // const response = await servicesModule0.checkTokenValidation();
      // if (response == "not valid") {
      //   await servicesModule0.logout();
      //   if (window.location.pathname == "/auth-distributor/login-distributor") {
      //     console.log("distributor login");
      //     //  this.$router.push("login-distributor");
      //   } else {
      //     console.log("admin");
      //     // this.$router.push("login");
      //   }
      //   NProgress.done();
      // } else {
      //   const user = await servicesModule0.getUser();
      //   console.log("user info app vue :" + user);
      //   this.$store.commit("change", user);
      //   NProgress.done();
      // }
    } catch (error) {
      console.log("error :" + JSON.stringify(error));
      NProgress.done();
      await servicesModule0.logout();
      if (window.location.pathname == "/auth-distributor/login-distributor") {
        this.$router.push("login-distributor");
        console.log("distributor login");
      } else {
        // this.$router.push("login");
        console.log("admin");
      }
      // services.logout();
    }
  },
  data() {
    return {
      // Temporary config for 2.1.
      contextConfig: {
        gradient: true,
        shadow: "lg", // 3 states: 'sm', 'lg', undefined (no shadow).
        invertedColor: false
      }
    };
  },
  provide() {
    return {
      contextConfig: this.contextConfig
    };
  },
  watch: {
    // Temporary colors fix for 2.1.
    "contextConfig.invertedColor"(val) {
      const invertedColorClass = "va-inverted-color";
      if (val) {
        document.body.classList.add(invertedColorClass);
      } else {
        document.body.classList.remove(invertedColorClass);
      }
    }
  }
};
</script>

<style lang="scss">
@import "../sass/main.scss";

body {
  height: 100%;

  #app {
    height: 100%;
  }
}
</style>
