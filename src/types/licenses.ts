export type TLicense = {
  license_check_id: string;
  id: string;
  user_id: string;
  user_birth: string;
  user_name: string;
  license_name: string;
  license_number: string;
  license_issue: Date | string;
  license_sub_number: string;
  is_confirm: boolean;
};
