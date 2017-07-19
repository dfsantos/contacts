<template>
  <div>
    <h1>My Component</h1>
    <p>{{ content }}</p>
    <button @click="clickMe('Parameter data')">Click me!</button>
  </div>
</template>

<script>
  export default {
    name: 'my-component',
    data () {
      return {
        content: 'This is the content'
      }
    },
    methods: {
      clickMe: function (param) {
        this.content = param
      }
    }
  }
</script>
