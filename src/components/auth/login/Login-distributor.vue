<template>
  <div>
    <form @submit.prevent="onsubmit">
      <va-input
        class="box-size"
        v-model="email"
        type="text"
        :label="$t('auth.email')"
        :error="!!emailErrors.length"
        :error-messages="emailErrors"
      />

      <va-input
        v-model="password"
        type="password"
        :label="$t('auth.password')"
        :error="!!passwordErrors.length"
        :error-messages="passwordErrors"
      />

      <div class="__options d-flex align--center justify--space-between">
        <va-checkbox
          v-model="keepLoggedIn"
          class="mb-0 text-color"
          :label="$t('auth.keep_logged_in')"
        />
        <div class="ml-1 link text-color">
          <router-link class="text-color" :to="{ name: 'recover-password' }">{{
            $t("auth.recover_password")
          }}</router-link>
          <br />
          <router-link class="text-color" :to="{ name: 'first-time-user' }">{{
            $t("First time user")
          }}</router-link>
        </div>
      </div>

      <div class="d-flex justify--center mt-3">
        <va-button type="submit" class="my-0 btncolor">{{
          $t("auth.login")
        }}</va-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import * as services06Module1 from "../../../app/module1/services06";
import * as servicesModule1 from "../../../app/module1/services";
import * as servicesModule0 from "../../../app/module0/services";

export default {
  name: "login",
  data() {
    return {
      showPass: false,
      email: "dummy", //temporary for testing
      password: "@Bcd1234",
      keepLoggedIn: false,
      emailErrors: [],
      passwordErrors: [],
      remember: false
    };
  },
  computed: {
    formReady() {
      return !this.emailErrors.length && !this.passwordErrors.length;
    }
  },
  methods: {
    onsubmit: async function() {
      console.log(this.email);
      console.log(this.password);
      servicesModule0.logout(); // logout first to clear cache
      console.log("test");
      console.log(this.email);
      console.log(this.password);

      this.emailErrors = this.email ? [] : ["Email is required"];
      this.passwordErrors = this.password ? [] : ["Password is required"];
      if (!this.formReady) {
        return;
      }

      try {
        const data = {
          USER_EMAIL: this.email,
          USER_PASS_NUM: this.password
        };
        const response = await services06Module1.verifyUser(data);
        console.log(response.data.USER_ISLOGIN);
        if (response.data.USER_ISLOGIN == 0) {
          this.$router.push({
            name: "recover-password",
            params: { USER_ID: response.data.USER_ID }
          });
        } else {
          console.log(JSON.stringify(response.data));
          servicesModule1.setUser(JSON.stringify(response.data));
          this.$store.commit("change", JSON.stringify(response.data));
          console.log("user store :" + localStorage.getItem("user"));
          this.$router.push({ name: "distributor-dashboard" });
          console.log("first");
        }
      } catch (error) {
        console.log(error);
      }

      // servicesModule0.login(data);

      // await axios
      //   .post('/api/module0/login', {
      //     login_id: this.email,
      //     password: this.password,
      //     client_id: 'reg-client',
      //   })
      //   .then(response => {
      //     // console.log("token :" + JSON.stringify(response.data.access_token));
      //     servicesModule0.setUser(JSON.stringify(response.data.data))
      //     this.$store.commit('change', JSON.stringify(response.data.data))
      //     console.log('user store :' + localStorage.getItem('user'))
      //     this.$router.push({ name: 'dashboard' })
      //   }).catch(function(error) {
      //       alert(error.response.data.message);
      //       // this.$toast.open({
      //       //     message: error.response.data.message,
      //       //     type: 'error',
      //       //     // all of other options may go here
      //       // });
      //   });
    }
  }
};
</script>

<style lang="scss">
.btncolor {
  background-image: linear-gradient(
    to right,
    rgb(255, 0, 0),
    rgb(255, 0, 0)
  ) !important;
  font-size: 16pt !important;
  // box-shadow: rgb(0 0 0 / 60%) 0px 0.125rem 0.19rem 0px !important;
}
.box-size {
  height: 40pt !important;
  font-size: 12pt !important;
  color: #83b3e6 !important;
}
.text-color {
  color: #83b3e6 !important;
}
.chk-bg {
  background: #83b3e6;
}
.va-input__container {
  min-height: 3.85rem !important;
}
.va-input_container_label {
  color: #83b3e6 !important;
  font-size: 0.825rem !important;
  margin-bottom: 1.5rem !important;
}
.va-input_container_input {
  height: 2.5rem;
  font-size: 1.3rem;
}
.pa-3,
.py-3,
.pb-3 {
  padding-bottom: 4rem !important;
}

.__card {
  max-width: 650px;
}
</style>