export interface CheckLicense {
  id : number;
  user_id : string;
  user_name : string;
  user_birth : Date;
  license_number : string;
  license_issue : Date;
  license_sub_number : string;
  confirm_date : Date;
  is_confirm : boolean;
}
