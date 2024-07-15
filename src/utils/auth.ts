import { createClient } from "@/supabase/client";

export async function getServerSession() {
  const supabase = createClient();
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) {
    return null;
  }

  return session;
}
