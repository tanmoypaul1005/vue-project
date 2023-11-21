<template>
    <button :class="buttonClass" @click="$emit('click')">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      buttonClass: {
        type: String,
        default: 'common-button',
      },
    },
  };
  </script>
  
  <style scoped>
  .common-button {
    background-color: #3490dc;
    color: #fff;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .common-button:hover {
    background-color: #2779bd;
  }
  </style>
  