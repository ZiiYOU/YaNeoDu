
import { supabase } from "../utils/SupabaseClient"
import { PostsType } from "../types/postsType";

export const fetchReviewPosts = async () :Promise<PostsType[]> => {
    const {data} = await supabase.from('posts').select().eq('category','후기');
    if (data){
        return data; 
     }
     return [];
}

export const fetchQuestionPosts = async () :Promise<PostsType[]> => {
    const {data} = await supabase.from('posts').select().eq('category','질문');
    if (data){
        return data; 
     }
     return [];
}