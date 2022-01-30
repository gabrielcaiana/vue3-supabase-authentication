import { ref } from "vue";

const user = ref(null);

export default function useAuthUser() {
  const login = async ({ email, password }) => {
    console.log(email, password);
  };

  const loginWithSocialProvider = (provider) => {
    console.log(provider);
  };

  const logout = async () => {};

  const isLoggedIn = () => {};

  const register = async ({ email, password, ...meta }) => {
    console.log(email, password, meta);
  };

  const update = async (data) => {
    console.log(data);
  };

  const sendPasswordRestEmail = async (email) => {
    console.log(email);
  };

  return {
    user,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
  };
}
