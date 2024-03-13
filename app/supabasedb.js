import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cuulvoxihqareesxcwrq.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const Supabase = createClient(supabaseUrl, supabaseKey)

export default Supabase 