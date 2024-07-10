import { LicensesType } from "../types/licensesType"
import { supabase } from "../utils/SupabaseClient"

// Promise<LicensesType[]>
export const fetchLicenses = async () : Promise<LicensesType[]>  => {
    const {data}  = await supabase.from('licenses').select('*');
    if (data){
       return data; 
    }
    return [];
}
