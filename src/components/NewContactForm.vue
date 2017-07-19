<template>
  <form>
    <span v-if="isSubmitedDataReady">{{submitedData}}</span>
    <fieldset>
      <legend>Contact</legend>
      <label for="first-name">{{firstNameLabel}}</label>
      <input id="first-name" type="text" title="First name" v-model.lazy.trim="contact.firstName"/>
    </fieldset>

    <fieldset>
      <label for="second-name">{{secondNameLabel}}</label>
      <input id="second-name" type="text" title="Second name" v-model.lazy.trim="contact.secondName"/>
    </fieldset>

    <fieldset>
      <label for="phone">{{phoneLabel}}</label>
      <input id="phone" type="tel" placeholder="Insert a phone number" title="New phone number"
             v-model.lazy.trim="formTempData.newPhoneNumber"/>
      <button id="add-fone-button" title="Includes phone number" @click="handleAddPhoneClick">{{addPhoneButtonText}}
      </button>
      <ul id="phone-list">
        <li v-for="phone in contact.phones">{{phone.number}}</li>
      </ul>
    </fieldset>

    <fieldset>
      <label for="email">{{emailLabel}}</label>
      <input id="email" type="tel" placeholder="Insert an email address" title="New email address"
             v-model.lazy.trim="formTempData.newEmailAddress"/>
      <button id="add-email-button" title="Includes email address" @click="handleAddEmailClick">{{addEmailButtonText}}
      </button>
      <ul id="email-list">
        <li v-for="email in contact.emails">{{email.address}}</li>
      </ul>
    </fieldset>

    <section id="form-actions">
      <button id="save-contact-button" title="Save contact" @click="handleSaveContactClick">{{saveButtonText}}</button>
    </section>
  </form>
</template>

<script>
  export default {
    name: 'new-contact-form',
    data () {
      return {
        firstNameLabel: 'First name',
        secondNameLabel: 'Second name',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        addPhoneButtonText: 'Add Phone',
        addEmailButtonText: 'Add Email',
        saveButtonText: 'Save',
        formTempData: {newPhoneNumber: '', newEmailAddress: ''},
        contact: {firstName: '', secondName: '', phones: [], emails: []},
        submitedData: null
      }
    },
    methods: {
      handleAddPhoneClick: function () {
        let newPhone = {number: this.formTempData.newPhoneNumber}
        this.contact.phones.push(newPhone)
        this.formTempData.newPhoneNumber = ''
      },
      handleAddEmailClick: function () {
        let newEmail = {address: this.formTempData.newEmailAddress}
        this.contact.emails.push(newEmail)
        this.formTempData.newEmailAddress = ''
      },
      handleSaveContactClick: function () {
        this.submitedData = this.contact
      }
    },
    computed: {
      isSubmitedDataReady: function () {
        return !!this.submitedData
      }
    }
  }
</script>

<style scoped>
</style>
