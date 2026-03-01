import 'dotenv/config';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
)

export default async function handler(req, res) {
  const { count: total } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })

  const { count: gcse } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .eq('exam', 'gcse')

  const { count: plus } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })
    .eq('exam', '11plus')

  return res.status(200).json({ total, gcse, plus })
}
