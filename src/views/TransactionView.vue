<template>
  <div class="homeindex">
    <transaction-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import TransactionView from '@/components/TransactionComponent.vue'
/* eslint-disable no-new */
export default {
  name: 'TransactionIndex',
  components: {
    TransactionView
  }
}
</script>
