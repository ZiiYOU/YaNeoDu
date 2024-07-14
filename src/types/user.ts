export type User =  {
  id : string;
  user_id : string;
  password : string;
  name : string;
  nickname : string;
  birth : Date | string ;
  admin : boolean;
}