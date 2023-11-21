<template>
    <div class="form-group">
      <label :for="name" class="label">{{ label }}</label>
      <input :id="name" :name="name" :type="type" :value="value" :class="inputClass" :required="isRequired" @input="updateValue" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'text',
      },
      value: {
        type: [String, Number],
        default: '',
      },
      isRequired: {
        type: Boolean,
        default: false,
      },
      inputClass: {
        type: String,
        default: 'input',
      },
    },
    methods: {
      updateValue(event) {
        this.$emit('update:value', event.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  .label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  
  
  