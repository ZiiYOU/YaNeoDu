export type GetComment = {
  comment_id: number,
  created_at: string,
  post_id: number,
  user_id: string,
  nickname: string,
  content: string,
}

export type SendComment = {
  post_id: number,
  user_id: string,
  nickname: string,
  content: string,
}