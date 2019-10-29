<template>
  <div id="app">
    <color-picker :swatches="['e3342f', '3490dc', 'f6993f', '38c172', 'fff', 'dae4e9']" />
  </div>
</template>

<script>
import ColorPicker from './components/ColorPicker'

export default {
  name: 'app',
  components: {
    ColorPicker
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}
</style>
