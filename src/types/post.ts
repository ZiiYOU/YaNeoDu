export type Post = {
  post_id: number,
  created_at: string,
  user_id: string,
  nickname: string,
  license_name: string,
  is_confirm: boolean,
  category: string,
  title: string,
  content: string,
  views: number,
}

export type Send = {
  user_id: string,
  nickname: string,
  license_name: string,
  is_confirm: boolean,
  category: string,
  title: string,
  content: string,
  views: number,
}
