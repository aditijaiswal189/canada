import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  "https://fjyrfeptekrlxarzifcp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeXJmZXB0ZWtybHhhcnppZmNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwOTAyNTEsImV4cCI6MjA0MDY2NjI1MX0.tj-gr9vYCDuVMQSeElnHQGvo-ChGLAM1lDbwwEzaIdo",
  
);
