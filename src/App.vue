<template>
  <div id="app">
    <!-- isLoading -->
    <Loading :active.sync="isLoading"></Loading>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
}
</script>

<style>

</style>
