<template>
  <main-layout>
  <div class="content-container">
  	<p>Page not found</p>
  </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  export default {
    components: {
      MainLayout
    }
  }
</script>
<style scoped>
.content-container{
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	min-height: 300px;
}
</style>