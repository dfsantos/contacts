<template>
  <el-form label-width="120px">
    <el-form-item label="Phone">
      <el-col :span="15">
        <el-input id="phone" type="tel" placeholder="Insert a phone number" title="New phone number"
                  v-model.lazy.trim="vm.newPhoneNumberInput"></el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button id="add-fone-button" title="Includes phone number" @click="handleAddPhoneClick">
          Add Phone
        </el-button>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-table :data="contactPhones" stripe empty-text="No data found.">
        <el-table-column prop="number" label="Phones"></el-table-column>
      </el-table>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'phone-tab',
    props: {
      phones: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        contactPhones: this.phones,
        vm: {
          newPhoneNumberInput: ''
        }
      }
    },
    methods: {
      handleAddPhoneClick: function () {
        let newPhone = {number: this.vm.newPhoneNumberInput}
        this.phones.push(newPhone)
        this.vm.newPhoneNumberInput = ''
      }
    }
  }
</script>
