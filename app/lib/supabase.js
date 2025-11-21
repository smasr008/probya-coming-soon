import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mcgdnmmpoesrhtwrttvt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZ2Rtbm1wb3Nzcmh0d3d0dHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMTIzMTQsImV4cCI6MjA3ODg4ODMxNH0.2fUWckCbBZi_PbEA1aPHo6zWIrAdkzjQ6CliRejYW8Y'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
