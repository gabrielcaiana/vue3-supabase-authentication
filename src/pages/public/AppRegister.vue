<template>
  <div class="app-register">
    <div class="app-register__content">
      <form class="app-register__form" @submit.prevent="handleSubmit">
        <h1 class="app-register__form__title">Cadastrar novo usuário</h1>
        <div>
          <label class="app-register__form__label" for="username">Nome</label>
          <input
            id="username"
            v-model="form.name"
            class="app-register__form__input"
            type="text"
            name="username"
            placeholder="nome"
            required
          />
        </div>
        <div>
          <label class="app-register__form__label" for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            class="app-register__form__input"
            type="text"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label class="app-register__form__label" for="password">Senha</label>
          <input
            id="password"
            v-model="form.password"
            class="app-register__form__input"
            type="text"
            name="password"
            placeholder="senha"
            required
          />
        </div>
        <button type="submit" class="app-register__form__button">
          Registrar
        </button>
        <router-link to="/">
          <button class="app-register__form__button--secondary">
            Voltar para o login
          </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useAuthUser from "../../composables/UseAuthUser";
import { useRouter } from "vue-router";

const router = useRouter();
const { register } = useAuthUser();

const form = ref({
  name: "",
  email: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    await register(form.value);

    router.push({
      name: "EmailConfirmation",
      query: { email: form.value.email },
    });
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<style lang="scss" scoped>
.app-register {
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
        @apply w-full mt-6 bg-green-700 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans;

        &--secondary {
          @apply w-full mt-6 mb-3 bg-gray-100 rounded-lg px-4 py-2 text-lg text-gray-500 tracking-wide font-semibold font-sans;
        }
      }
    }
  }
}
</style>
