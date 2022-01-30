<template>
  <div v-if="user">
    <div>Hello {{ user.user_metadata.name }}</div>
  </div>
  <span v-else>você nāo esta logado!</span>
</template>

<script setup>
import useAuthUser from "../../composables/UseAuthUser";
const { user } = useAuthUser();
</script>
