<template>
  <!-- <form @submit.prevent="onsubmit" class="login"> -->
  <div>
    <div class="row mb-2">
      <vue-form-generator
        :model="model"
        :schema="schema"
        :options="formOptions"
        ref="recoverPasswordForm"
      >
      </vue-form-generator>
    </div>
    <div class="row justify--center">
      <va-button v-on:click="recoverPass" class="my-0"
        >Recover Password</va-button
      >
    </div>
  </div>
  <!-- </form> -->
</template>

<script>
import * as services06Module1 from "../../../app/module1/services06";
import * as services06Module0 from "../../../app/module0/services06";
export default {
  name: "recover-password",
  props: {
    USER_ID: String
  },
  mounted() {
    this.securityQuestionList();
    this.getPasswordSetting();
  },
  data() {
    return {
      maxLength: 5,
      email: "",
      securityQuestion: [],
      passwordSetting: "",
      schema: {
        groups: [
          {
            styleClasses: "row",
            fields: [
              {
                type: "input",
                inputType: "password",
                label: "New Password",
                model: "USER_PASSWORD",
                placeholder: "Please enter password",
                required: true,
                validator: ["string", this.validatePassword],
                styleClasses: "col-md-12"
              },
              {
                type: "input",
                inputType: "password",
                label: "Confirm Password",
                model: "CONFIRM_PASSWORD",
                placeholder: "Confirm password",
                required: true,
                styleClasses: "col-md-12",
                validator: ["string", this.isEqualTo]
              },
              {
                labels: "Mobile Phone Number",
                model: "PHONE_NO",
                type: "vfg-the-mask",
                placeholder: "Enter telephone number",
                // mask: "######-##-####",
                mask: "0##-########",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                labels: "Request TAC",
                model: "SMS_TAC_NUMBER",
                type: "vfg-custom-Tacinput",
                placeholder: "Enter TAC number",
                styleClasses: "col-md-6",
                required: true,
                validator: "string"
              },
              {
                type: "vueMultiSelect",
                model: "USER_SECURITY_QUESTION",
                label: "Choose Security Question",
                placeholder: "Enter Your Country",
                required: true,
                validator: "required",
                styleClasses: "col-md-12",
                selectOptions: {
                  multiple: false,
                  key: "SECURITY_QUESTION",
                  label: "SECURITY_QUESTION",
                  searchable: true
                },
                values: (model, schema) => {
                  return this.securityQuestion;
                }
              },
              {
                type: "input",
                inputType: "text",
                model: "USER_SECURITY_ANSWER",
                placeholder: "Answer",
                required: true,
                validator: "string",
                styleClasses: "col-md-12"
              }
            ]
          }
        ]
      },
      model: {
        USER_PASSWORD: "",
        CONFIRM_PASSWORD: "",
        PHONE_NO: "",
        SMS_TAC_NUMBER: "",
        USER_SECURITY_QUESTION: "",
        USER_SECURITY_ANSWER: ""
      },
      formOptions: {
        // validationErrorClass: "has-error",
        // validationSuccessClass: "has-`success`",
        validateAfterChanged: true
      }
    };
  },
  methods: {
    async getPasswordSetting() {
      console.log("get pass sett");
      const response = await services06Module0.getPasswordSetting(0);
      this.passwordSetting = response;
    },
    validatePassword(value) {
      if (
        this.passwordSetting.UPPERCASE_LOWERCASE &&
        this.passwordSetting.SPECIAL_CHARACTERS &&
        this.passwordSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one uppercase letter, one lower case letter, one number and one character"
          ];
        }
      } else if (
        this.passwordSetting.UPPERCASE_LOWERCASE &&
        this.passwordSetting.SPECIAL_CHARACTERS &&
        !this.passwordSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one uppercase letter, one lower case letter, and one character"
          ];
        }
      } else if (
        this.passwordSetting.UPPERCASE_LOWERCASE &&
        !this.passwordSetting.SPECIAL_CHARACTERS &&
        !this.passwordSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9#?!@$%^&*-]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one uppercase letter and one lower case letter"
          ];
        }
      } else if (
        this.passwordSetting.UPPERCASE_LOWERCASE &&
        !this.passwordSetting.SPECIAL_CHARACTERS &&
        this.passwordSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9#?!@$%^&*-]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one number, one uppercase letter and one lower case letter"
          ];
        }
      } else if (
        !this.passwordSetting.UPPERCASE_LOWERCASE &&
        !this.passwordSetting.SPECIAL_CHARACTERS &&
        this.passwordSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9#?!@$%^&*-]+)$/;
        if (!expression.test(value)) {
          return ["Password must contain at least one number and one letter"];
        }
      } else if (
        !this.passwordSetting.UPPERCASE_LOWERCASE &&
        this.passwordSetting.SPECIAL_CHARACTERS &&
        this.passwordSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
        if (!expression.test(value)) {
          return [
            "Password must contain at least one number, one letter and one special character"
          ];
        }
      } else if (
        !this.passwordSetting.UPPERCASE_LOWERCASE &&
        !this.passwordSetting.SPECIAL_CHARACTERS &&
        !this.passwordSetting.ALPHANUMERIC
      ) {
        let expression = /^([a-zA-Z0-9#?!@$%^&*-]+)$/;
        if (!expression.test(value)) {
          return [""];
        }
      } else if (
        !this.passwordSetting.UPPERCASE_LOWERCASE &&
        this.passwordSetting.SPECIAL_CHARACTERS &&
        !this.passwordSetting.ALPHANUMERIC
      ) {
        let expression = /^(?=.*?[#?!@$%^&*-])([a-zA-Z0-9#?!@$%^&*-]+)$/;
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
      if (value != this.model.USER_PASSWORD) {
        return ["Password do not match"];
      }
    },
    async securityQuestionList() {
      console.log("sec quest");
      const response = await services06Module1.securityQuestion();
      this.securityQuestion = response;
      console.log("sec quest last" + JSON.stringify(this.securityQuestionList));
    },
    async recoverPass() {
      // if (this.$refs.recoverPasswordForm.validate()) {
      const data = new FormData();
      data.append("USER_ID", this.USER_ID);
      data.append("USER_PASSWORD", this.model.USER_PASSWORD);
      data.append("USER_MOBILE_NUM", "60" + this.model.PHONE_NO);
      data.append("SMS_TAC_NUMBER", this.model.SMS_TAC_NUMBER);
      data.append(
        "USER_SECURITY_QUESTION_ID",
        this.model.USER_SECURITY_QUESTION.SECURITY_ID
      );
      data.append("USER_SECURITY_ANSWER", this.model.USER_SECURITY_ANSWER);
      data.append("_method", "PUT");
      const response = await services06Module1.updateSelfReg(data);
      this.$router.go(-1);
      // } else {
      //   console.log("sdfsdfdsf");
      // }
    }
  }
};
</script>

<style lang="scss">
</style>
