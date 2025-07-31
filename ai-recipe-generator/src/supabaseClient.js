// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://drlxdcjidqkwpznokpcd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRybHhkY2ppZHFrd3B6bm9rcGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDUwNjUsImV4cCI6MjA2OTQ4MTA2NX0.0Jdg9Hj2lmfbMh6j89KnEo4u42TLCA1cUGhlEim1Qew';
export const supabase = createClient(supabaseUrl, supabaseKey);
