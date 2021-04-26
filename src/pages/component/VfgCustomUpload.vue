  
<template>
  <!-- <div class="col-md-12"> -->
  <!-- <div id="app"> -->
  <!-- <template> -->
  <!-- <div class="width"> -->
  <VueFileAgent
    ref="vueFileAgentEdit"
    :theme="'grid'"
    :multiple="false"
    :deletable="true"
    :meta="true"
    :accept="'image/*'"
    :maxSize="'10MB'"
    :maxFiles="14"
    :helpText="'Upload company logo'"
    :errorText="{
      type: 'Invalid file type. Only excel Allowed',
      size: 'Files should not exceed 10MB in size'
    }"
    @select="editfilesSelected($event)"
    @beforedelete="editonBeforeDelete($event)"
    @delete="editfileDeleted($event)"
    v-model="value"
  ></VueFileAgent>
  <!-- </template>
    </div> -->
  <!-- </div> -->
</template>
<script>
import { abstractField } from "vue-form-generator";
export default {
  mixins: [abstractField],
  methods: {
    info(info) {
      console.log("infooo");
      alert(info);
    }
  }
};
</script>

<style scoped>
.width {
  width: 50%;
}
</style>