import { createClient } from "@/supabase/client";

export async function getServerSession() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  return session;
}
