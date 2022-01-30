<template>
  <div class="app-reset-password">
    <div class="app-reset-password__content">
      <form
        class="app-reset-password__form"
        @submit.prevent="handlePasswordReset"
      >
        <h1 class="app-reset-password__form__title">Esqueceu sua senha?</h1>
        <span class="app-reset-password__form__description"
          >Digite seu email para receber as instruções para redefinir a
          senha</span
        >
        <div>
          <label class="app-reset-password__form__label" for="email"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            class="app-reset-password__form__input"
            type="text"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <button type="submit" class="app-reset-password__form__button">
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import useAuthUser from "../../composables/UseAuthUser";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const { sendPasswordRestEmail } = useAuthUser();

const email = ref("");

const handlePasswordReset = async () => {
  await sendPasswordRestEmail(email.value);
  router.push({ name: "login" });
  console.log(`Email de redefinição de senha enviado para: ${email.value}`);
};
</script>

<style lang="scss" scoped>
.app-reset-password {
  $this: &;
  @apply h-screen bg-gray-800 flex justify-center items-center;

  &__content {
    @apply lg:w-2/5 md:w-1/2 w-2/3;

    #{$this}__form {
      @apply bg-white p-10 rounded-lg shadow-lg min-w-full;

      &__title {
        @apply text-center text-2xl mb-6 text-gray-600 font-bold font-sans;
      }

      &__description {
        @apply text-center text-gray-500 font-sans;
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
    }
  }
}
</style>
