<template>
  <AccountTemplate/>
</template>

<script>

export default {
  name: 'AccountPage',
    beforeRouteEnter(to, from, next) {
    const q = 1;
    if (!q) next();
  },
}
</script>
