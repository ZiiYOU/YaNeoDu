import { LicensesType } from "../types/licensesType"
import { supabase } from "../utils/SupabaseClient"

// Promise<LicensesType[]>
export const getLicenses = async () : Promise<LicensesType[]>  => {
    const {data}  = await supabase.from('licenses').select('*');
    if (data){
       return data; 
    }
    return [];
}
