const SUPABASE_URL = "https://wmfgzugvijcnnmuoxves.supabase.co"

const SUPABASE_KEY = "sb_publishable_xiJkSB_YtRa4hU_MoMhGGQ_H2j6WHtK"

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
)

console.log("Supabase connected")
