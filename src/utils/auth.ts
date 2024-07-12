import { createClient } from "@/supabase/client";

export async function getServerSession() {
  const supabase = createClient();
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) {
    console.error("세션 가져오기 오류:", error);
    return null;
  }

  console.log("세션 데이터:", session);
  return session;
}
