import { createClient } from "@/utils/supabase/client"

export async function insertPost(license: string, category: string, is_confirm: boolean, content: string) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('posts')
    .insert([
      { 
        license: "",
        category: "",
        is_confirm: "",
        content: "",
        comments: "",
        views: 0,
      },
    ])
    .select()
}

