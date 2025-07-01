const supabase = require("../config/supabaseClient");

// Register
exports.register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  console.log("register", email, password, firstName, lastName);
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    user_metadata: { firstName, lastName },
    email_confirm: true,
  });
  if (error) {
  }
  res.json({ message: "User created", user: data });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login failed  :", error.message);
    return;
  }

  const user = data.user;

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ last_login: new Date().toISOString() })
    .eq("id", user.id);

  if (updateError) {
    console.error("Failed to update last_login: ", updateError.message);
  } else {
    res.json({ message: "Login successful & last_login updated.", user: data });
  }
};


//Forget Password
exports.forgetPassword = async(req,res)=>{
  
}