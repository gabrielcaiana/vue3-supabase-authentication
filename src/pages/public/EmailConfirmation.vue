<template>
  <div class="app-email-confirmation">
    <div class="app-email-confirmation__content">
      <div class="app-email-confirmation__card">
        <h1 class="app-email-confirmation__title">
          Obrigado por se registrar!
        </h1>
        <p class="app-email-confirmation__description">
          Por favor, confirme o email para finalizar o cadastro
          <span class="app-email-confirmation__email">{{
            $route.query.email
          }}</span>
        </p>

        <router-link to="/">
          <button class="app-email-confirmation__button">
            Ir para o login
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-email-confirmation {
  $this: &;
  @apply h-screen bg-gray-800 flex justify-center items-center;

  &__content {
    @apply lg:w-2/5 md:w-1/2 w-2/3;

    #{$this}__card {
      @apply bg-white p-10 rounded-lg shadow-lg min-w-full;

      #{$this}__title {
        @apply text-center text-2xl mb-6 text-gray-600 font-bold font-sans;
      }

      #{$this}__description {
        @apply text-center text-base text-gray-500 font-sans;
      }

      #{$this}__email {
        @apply text-center text-base font-bold text-gray-500 font-sans;
      }
    }
  }

  &__button {
    @apply w-full mt-6 bg-green-700 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans;
  }
}
</style>
