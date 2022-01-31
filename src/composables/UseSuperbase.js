import { createClient } from "@supabase/supabase-js";
import useAuthUser from "./UseAuthUser";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange(async (event, session) => {
  if (event === "PASSWORD_RECOVERY") {
    const { logout } = useAuthUser();
    await logout();
    return;
  }

  const { user } = useAuthUser();
  user.value = session?.user || null;
});

export default function useSupabase() {
  return { supabase };
}
