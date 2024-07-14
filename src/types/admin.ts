export type CheckLicense =  {
  id : string;
  user_id : string;
  user_name : string;
  user_birth : Date | string ;
  license_number : string;
  license_issue : Date | string ;
  license_sub_number : string;
  confirm_date : Date | string | null;
  is_confirm : boolean;
  license_check_id : string;
}

export interface ConfirmStateProps {
  setFilterData : (filter : string) => void
  filterData : string
}

export interface LicenseListsProps {
  handleConfirm: (license_check_id: string, is_confirm: boolean) => void;
  formatDate: (data: Date | string | null) => string | null;
  filteredLicenses: CheckLicense[];
}
