export type Post = {
  license: string
  category: string,
  is_confirm: boolean,
  content: string,
  comments: [],
  views: number,
}

export type SupabaseResponse = {
  [key: string] : unknown 
}