<template>
  <div class="app-login">
    <div class="app-login__content">
      <form class="app-login__form" @submit.prevent="handleLogin">
        <h1 class="app-login__form__title">Login</h1>
        <div>
          <label class="app-login__form__label" for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            class="app-login__form__input"
            type="text"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label class="app-login__form__label" for="password">Senha</label>
          <input
            id="password"
            v-model="form.password"
            class="app-login__form__input"
            type="password"
            name="password"
            placeholder="senha"
            required
          />
        </div>
        <button type="submit" class="app-login__form__button">Entrar</button>
        <router-link
          to="/forgot-password"
          class="app-login__form__forgot-password"
          >Esqueceu sua senha?</router-link
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useAuthUser from "../../composables/UseAuthUser";
import { useRouter } from "vue-router";

const router = useRouter();
const { login } = useAuthUser(); // add loginWithSocialProvider to login socialMedia

const form = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
  try {
    await login(form.value);
    router.push({ name: "Me" });
  } catch (error) {
    alert(error.message);
  }
};
</script>

<style lang="scss" scoped>
.app-login {
  $this: &;
  @apply h-screen bg-gray-800 flex justify-center items-center;

  &__content {
    @apply lg:w-2/5 md:w-1/2 w-2/3;

    #{$this}__form {
      @apply bg-white p-10 rounded-lg shadow-lg min-w-full;

      &__title {
        @apply text-center text-2xl mb-6 text-gray-600 font-bold font-sans;
      }

      &__label {
        @apply text-gray-800 font-semibold block my-3;
      }

      &__input {
        @apply w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none;
      }

      &__button {
        @apply w-full mt-6 mb-4 bg-green-700 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans;
      }

      &__forgot-password {
        @apply text-gray-500 block;
      }
    }
  }
}
</style>
