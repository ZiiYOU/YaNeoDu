export type TLicense =  {
  id : number;
  user_id : string;
  license_number : string;
  license_issue : Date | string ;
  license_sub_number : string;
  is_confirm : boolean;
}
