import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(
  "https://cggpioxqwksvbbgnuyvc.supabase.co",
  process.env.REACT_APP_SUPABASE_KEY || ""
);

export default supabase;
