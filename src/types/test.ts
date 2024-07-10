export interface CheckLicense {
  id : number;
  user_id : string;
  user_name : string;
  user_birth : Date | string ;
  license_number : string;
  license_issue : Date | string ;
  license_sub_number : string;
  confirm_date : Date | null;
  is_confirm : boolean;
}
