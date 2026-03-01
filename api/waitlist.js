import 'dotenv/config';
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
)

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  try {
    const { email, exam } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email required' })
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email, exam }])

    if (error) {
    return res.status(200).json({ success: true })
  }

    // Send confirmation email
    await resend.emails.send({
      from: 'Pass AI <hello@pass-ai.co.uk>',
      to: email,
      subject: 'You’re on the Pass AI early access list',
      html: `
        <h2>Welcome to Pass AI</h2>
        <p>You’ve successfully joined the early access list for ${exam.toUpperCase()}.</p>
        <p>We’ll be in touch soon.</p>
        <br/>
        <p>– The Pass AI Team</p>
      `
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Server error' })
  }
}
