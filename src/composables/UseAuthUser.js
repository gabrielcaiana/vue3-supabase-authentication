import useSupabase from "./UseSuperbase";
import { ref } from "vue";

const user = ref(null);

export default function useAuthUser() {
  const { supabase } = useSupabase();

  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    return user;
  };

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signIn({ provider });
    if (error) throw error;
    return user;
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
