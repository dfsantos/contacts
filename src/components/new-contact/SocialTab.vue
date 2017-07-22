<template>
  <el-form label-width="120px" label-position="left">
    <el-row class="row-bg">
      <el-form-item label="Facebook">
        <el-input type="text" title="Facebook" v-model.lazy.trim="contactSocial.facebook"></el-input>
      </el-form-item>
      <el-form-item label="Twitter">
        <el-input type="text" title="Twitter" v-model.lazy.trim="contactSocial.twitter"></el-input>
      </el-form-item>
      <el-form-item label="Instagram">
        <el-input type="text" title="Instagram" v-model.lazy.trim="contactSocial.instagram"></el-input>
      </el-form-item>
      <el-form-item label="Google Plus">
        <el-input type="text" title="Google Plus" v-model.lazy.trim="contactSocial.googlePlus"></el-input>
      </el-form-item>
      <el-form-item label="GitHub">
        <el-input type="text" title="GitHub" v-model.lazy.trim="contactSocial.github"></el-input>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
  export default {
    name: 'social-tab',
    props: {
      social: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data () {
      return {
        contactSocial: this.social
      }
    }
  }
</script>
