<template>
  <div class="homeindex">
    <home-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeView from '@/components/HomeComponent.vue'
/* eslint-disable no-new */
export default {
  name: 'HomeIndex',
  components: {
    HomeView
  }
}
</script>
