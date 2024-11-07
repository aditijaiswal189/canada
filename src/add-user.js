// // addSingleUser.js
// const { createClient } = require("@supabase/supabase-js");

// const supabaseAdmin = createClient(
//   "https://fjyrfeptekrlxarzifcp.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeXJmZXB0ZWtybHhhcnppZmNwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTA5MDI1MSwiZXhwIjoyMDQwNjY2MjUxfQ.JTM61lC6DxQQGqA3q2Tg0B13FKTx2cHV8xntZwz40M8"
// );

// async function addUser() {
//   const email = "admin@icanrp.com"; // Set the user's email
//   const password = "vietnam54321***"; // Set the user's password

//   const { data, error } = await supabaseAdmin.auth.admin.createUser({
//     email,
//     password,
//     email_confirm: true, // Optional: set to true to skip email verification
//   });

//   if (error) {
//     console.error("Error creating user:", error.message);
//   } else {
//     console.log("User created successfully:", data);
//   }
// }

// addUser();
