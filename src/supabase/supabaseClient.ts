import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY as string

// Supabase client
const supabase = createClient('https://ucojoffkkofxinchkhtv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjb2pvZmZra29meGluY2hraHR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MTA5NTcsImV4cCI6MjAzNTk4Njk1N30.1Fm3TlBn0_3mLzXbzcF-ESciutQ3_XMVneluU-z3aqM');

export {supabase}