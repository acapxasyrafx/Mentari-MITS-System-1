  
<template>
  <div class="width">
    <!-- {{ schema.dataValue }} -->
    <label>
      <span class="color" @click="requestTac">
        {{ schema.labels }}
      </span>
    </label>
    <br />
    <input
      type="text"
      v-model="value"
      :placeholder="schema.placeholder"
      class="form-control form-control-md"
    />
  </div>
</template>
<script>
import { abstractField } from "vue-form-generator";
import * as services06Module1 from "../../app/module0/services06";
export default {
  mixins: [abstractField],
  methods: {
    async requestTac() {
      //alert("60" + this.model.PHONE_NO);
      var data = {
        phoneNo: "60" + this.model.PHONE_NO
      };
      const response = await services06Module1.getTAC(data);
    }
  }

  // data() {} -commented 2/4/21 Haizad
};
</script>
<style lang="scss">
.color {
  color: blue;
}

.width {
  width: 175%;
}
</style>