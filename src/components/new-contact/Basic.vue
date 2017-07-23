<template>
  <el-form label-width="120px" label-position="left">
    <el-row class="row-bg">
      <el-col :span="15" align="start">
        <el-row class="row-bg">
          <span class="main-title">{{fullname}}</span>
        </el-row>
        <el-row class="row-bg">
          <span class="small-title">{{contactBasicData.relation}}</span>
        </el-row>
        <el-row class="row-bg">
          <span class="small-title">{{contactBasicData.age}}</span>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="row-bg">
      <el-form-item label="First name">
        <el-input type="text" title="First name" v-model.lazy.trim="contactBasicData.firstName"></el-input>
      </el-form-item>
      <el-form-item label="Second name">
        <el-input type="text" title="Second name" v-model.lazy.trim="contactBasicData.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Groups">
        <el-select placeholder="Choose or create new" v-model.lazy.trim="contactBasicData.groups" multiple filterable
                   allow-create>
          <el-option v-for="group in vm.groups" :key="group.key" :label="group.label" :value="group.value"></el-option>
        </el-select>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
  export default {
    name: 'basic',
    props: {
      basicData: {
        type: Object,
        default: function () {
          return {
            firstName: '',
            lastName: '',
            groups: [],
            relation: '',
            age: null
          }
        }
      }
    },
    data () {
      return {
        contactBasicData: this.basicData,
        vm: {
          groups: [
            {key: 1, label: 'Family', value: 'FAMILY'},
            {key: 2, label: 'Work', value: 'WORK'},
            {key: 3, label: 'School', value: 'SCHOOL'},
            {key: 4, label: 'Friends', value: 'FRIENDS'},
            {key: 5, label: 'Other', value: 'OTHER'}
          ],
          selectedGroup: ''
        }
      }
    },
    computed: {
      fullname: function () {
        return this.contactBasicData.firstName + ' ' + this.contactBasicData.lastName
      }
    }
  }
</script>

<style scoped>
  .main-title {
    font-size: 20px;
  }

  .small-title {
    font-size: 14px;
  }

  .row-bg {
    padding: 5px;
    min-height: 33px;
  }
</style>
