<template>
  <div>
    <!-- <va-modal
      v-model="showStaticModal"
      title="A verification link has been sent to your email accaount"
      cancelClass="none"
      message="Please check on the link has just been sent to your email account to verify your email and continue the registration process"
      noOutsideDismiss
      noEscDismiss
    /> -->
    <form @submit.prevent="onsubmit">
      <vue-form-generator
        :model="model"
        :schema="schema"
        :options="formOptions"
        ref="regForm"
        @model-updated="onModelUpdated"
      >
      </vue-form-generator>

      <div class="d-flex justify--center mt-3">
        <va-button type="submit" class="my-0">Submit</va-button>
      </div>
    </form>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg-core.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import { getAllPostal } from "../../../app/module0/services";
import * as services06Module1 from "../../../app/module1/services06";
import * as services06Module0 from "../../../app/module0/services06";
Vue.use(VueFormGenerator);
import moment from "moment";
export default {
  name: "signup",
  mounted() {
    this.getUseridSetting();
  },
  data() {
    return {
      useridSetting: "",
      showStaticModal: false,
      timestamp: "",
      visible: false,
      visibleIc: true,
      visiblePassport: false,
      citizenship: [
        {
          name: "Malaysian",
          value: "1",
          selected: true
        },
        { name: "Non Malaysian", value: "2" }
      ],
      model: {
        USER_USER_ID: "",
        USER_CITIZEN: "1",
        USER_NRIC: "",
        USER_PASS_NUM: "",
        USER_PASS_EXP: null,
        USER_EMAIL: "",
        confirmEmail: ""
      },
      formOptions: {
        // validationErrorClass: "has-error",
        // validationSuccessClass: "has-`success`",
        validateAfterChanged: true
      },

      email: "",
      password: "",
      agreedToTerms: false,
      emailErrors: [],
      passwordErrors: [],
      agreedToTermsErrors: [],

      schema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "text",
                label: "User ID",
                model: "USER_USER_ID",
                placeholder: "Please enter name",
                required: true,
                validator: ["string", this.validateUserID],
                styleClasses: "col-md-12"
              },
              {
                type: "radios",
                label: "Citizenship",
                model: "USER_CITIZEN",
                required: true,
                values: () => {
                  return this.citizenship;
                },
                styleClasses: "col-md-6 display-inline"
              },
              {
                labels: "NRIC Number",
                model: "USER_NRIC",
                type: "vfg-the-mask",
                placeholder: "Enter NRIC Number",
                mask: "######-##-####",
                styleClasses: "col-md-6",
                visible: (model, field, form) => {
                  return this.visibleIc;
                },
                required: true,
                validator: ["string", this.validateIC]
              },
              {
                type: "input",
                inputType: "text",
                label: "Passport Number.",
                model: "USER_PASS_NUM",
                placeholder: "Enter Passport Number.",
                required: true,
                validator: "string",
                styleClasses: "col-md-6",
                visible: (model, field, form) => {
                  return this.visiblePassport;
                }
              },
              {
                labels: "Passport Expiry Date",
                type: "vfg-functional-date",
                placeholder: "Passport expiry date",
                model: "USER_PASS_EXP",
                noLabel: true,
                format: "dd-MM-yyyy",
                styleClasses: "col-md-12",
                visible: (model, field, form) => {
                  return this.visiblePassport;
                },
                required: true,
                validator: ["required", this.validateExpiryDate]
              },
              {
                type: "input",
                inputType: "email",
                label: "Email",
                model: "USER_EMAIL",
                placeholder: "Enter email address",
                required: true,
                validator: ["string", this.validateEmail],
                styleClasses: "col-md-12"
              },
              {
                type: "input",
                inputType: "email",
                label: "Confirm Email",
                model: "confirmEmail",
                placeholder: "Confirm email address",
                required: true,
                validator: ["string", this.isEqualTo],
                styleClasses: "col-md-12"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    async getUseridSetting() {
      const response = await services06Module0.getUserIdSetting(0);
      this.useridSetting = response;
    },
    validateExpiryDate(value) {
      if (value != null) {
        const today = new Date();
        const date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        const time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds() +
          " GMT";
        const dateTime = date + " " + time;

        const unixTimeNow = Date.parse(dateTime);
        console.log(unixTimeNow);

        //date expiry
        const expiryDate = this.model.USER_PASS_EXP;
        const dateExpiry =
          expiryDate.getFullYear() +
          "-" +
          (expiryDate.getMonth() + 1) +
          "-" +
          expiryDate.getDate();
        const timeExpiry =
          expiryDate.getHours() +
          ":" +
          expiryDate.getMinutes() +
          ":" +
          expiryDate.getSeconds() +
          " GMT";
        const dateTimeExpiry = dateExpiry + " " + timeExpiry;
        const unixTimeExpiryDate = Date.parse(dateTimeExpiry);
        console.log(unixTimeExpiryDate);

        //compare
        if (unixTimeExpiryDate < unixTimeNow) {
          console.log("expired");
          return ["Expired"];
        } else {
          console.log("not expired");
          // return ["Expired"];
        }
      } else {
        console.log("ssdfdsf");
      }
    },
    onModelUpdated(newVal, schema) {
      console.log(newVal);
      if (schema == "USER_CITIZEN") {
        if (newVal == 1) {
          this.visiblePassport = false;
          this.visibleIc = true;
        } else {
          this.visiblePassport = true;
          this.visibleIc = false;
        }
      }
    },
    async validateIC(value) {
      if (value.length != 12) {
        return ["Ic must contain 12 digit"];
      } else {
        const response = await services06Module1.checkDuplicateIC(value);
        return response.message;
      }
    },
    async validateEmail(value) {
      const response = await services06Module1.checkDuplicateEmail(value);
      return response.message;
    },
    async validateUserID(value) {
      // const response = await services06Module1.checkDuplicateUserID(value);
      // return response.message;

      if (
        this.useridSetting.UPPERCASE_LOWERCASE &&
        this.useridSetting.SPECIAL_CHARACTERS &&
        this.useridSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[_])([a-zA-Z0-9_]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one uppercase letter, one lower case letter, one number and underscore/'_'."
          ];
        }
      } else if (
        this.useridSetting.UPPERCASE_LOWERCASE &&
        this.useridSetting.SPECIAL_CHARACTERS &&
        !this.useridSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[_])([a-zA-Z0-9_]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one uppercase letter, one lower case letter, and underscore/'_'."
          ];
        }
      } else if (
        this.useridSetting.UPPERCASE_LOWERCASE &&
        !this.useridSetting.SPECIAL_CHARACTERS &&
        !this.useridSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9_]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one uppercase letter and one lower case letter"
          ];
        }
      } else if (
        this.useridSetting.UPPERCASE_LOWERCASE &&
        !this.useridSetting.SPECIAL_CHARACTERS &&
        this.useridSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9_]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one number, one uppercase letter and one lower case letter"
          ];
        }
      } else if (
        !this.useridSetting.UPPERCASE_LOWERCASE &&
        !this.useridSetting.SPECIAL_CHARACTERS &&
        this.useridSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9_]+)$/;
        if (!expression.test(value)) {
          return ["Password must contain at least one number and one letter"];
        }
      } else if (
        !this.useridSetting.UPPERCASE_LOWERCASE &&
        this.useridSetting.SPECIAL_CHARACTERS &&
        this.useridSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*?[_])([a-zA-Z0-9_]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one number, one letter and one and underscore/'_'."
          ];
        }
      } else if (
        !this.useridSetting.UPPERCASE_LOWERCASE &&
        !this.useridSetting.SPECIAL_CHARACTERS &&
        !this.useridSetting.ALPHANUMERIC
      ) {
        let expression = /^([a-zA-Z0-9_]+)$/;
        if (!expression.test(value)) {
          return [""];
        }
      } else if (
        !this.useridSetting.UPPERCASE_LOWERCASE &&
        this.useridSetting.SPECIAL_CHARACTERS &&
        !this.useridSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*?[_])([a-zA-Z0-9_]+)$/;
        if (!expression.test(value)) {
          return ["Password must contain at least one special character"];
        }
      }

      //** must contain letter only (lowercase and uppercase) */
      // let expression1 = /^[a-zA-Z]+$/;
      // let expression2 = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/;
      // //** must contain at least one uppercase letter, one lower case letter and one number */
      // let expression4 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/;
      // //** must contain at least one uppercase letter, one lower case letter, one number and one character */
      // let expression5 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
      // //** must contain at least one uppercase letter, one lower case letter, one number and one character with minimum length*/
      // let expression6 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+).{8}$/;
    },
    isEqualTo(value, field, model) {
      console.log(value);
      if (value != this.model.USER_EMAIL) {
        return ["Email do not match"];
      }
    },
    onsubmit: async function() {
      if (this.$refs.regForm.validate()) {
        const data = new FormData();
        data.append("USER_USER_ID", this.model.USER_USER_ID);
        data.append("USER_CITIZEN", this.model.USER_CITIZEN);
        data.append("USER_NRIC", this.model.USER_NRIC);
        data.append("USER_PASS_NUM", this.model.USER_PASS_NUM);
        data.append("USER_ISLOGIN", 0);
        if (this.model.USER_PASS_EXP != null) {
          data.append(
            "USER_PASS_EXP",
            moment(this.model.USER_PASS_EXP).format("YYYY-MM-DD")
          );
        }
        data.append("USER_EMAIL", this.model.USER_EMAIL);
        const response = await services06Module1.selfRegister(data);
        this.$toasts.success("This is my favorite toasts plugin.", {
          // width: "400px",
          // position: "bottom-right",
          // padding: "1rem"
        });
        this.model = {
          USER_USER_ID: "",
          USER_CITIZEN: "1",
          USER_NRIC: "",
          USER_PASS_NUM: "",
          USER_PASS_EXP: null,
          USER_EMAIL: "",
          confirmEmail: ""
        };
      } else {
      }
    }
  },
  computed: {
    // formReady() {
    //   return !(
    //     this.emailErrors.length ||
    //     this.passwordErrors.length ||
    //     this.agreedToTermsErrors.length
    //   );
    // }
  }
};
</script>

<style lang="scss">
.display-inline label {
  display: inline !important;
  padding: 5px;
}
</style>
<style scoped>
.widthModal {
  width: 50%;
}
</style>
