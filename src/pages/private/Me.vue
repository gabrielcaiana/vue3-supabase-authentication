<template>
  <div v-if="user">
    <div>Hello {{ user.user_metadata.name }}</div>
    {{ isLoggedIn() }}
    <router-link :to="{ name: 'Logout' }">Logout</router-link>
  </div>
  <span v-else>você nāo esta logado!</span>
</template>

<script setup>
import useAuthUser from "../../composables/UseAuthUser";
const { user, isLoggedIn } = useAuthUser();
</script>
