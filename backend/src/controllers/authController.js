const supabase = require("../config/supabaseClient");

// Register
exports.register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    user_metadata: { firstName, lastName },
    email_confirm: true,
  });

  if (error) return res.status(400).json({ error: error.message });

  const userId = data.user.id; // ได้ user id ที่สร้างมา

  // insert ลง table profiles ด้วย user id
  const { error: profileError } = await supabase.from("profiles").insert([
    {
      id: userId, // ต้องตรงกับ auth.users.id
      first_name: firstName,
      last_name: lastName,
    },
  ]);

  if (profileError) {
    return res.status(400).json({ error: profileError.message });
  }

  res.json({ message: "User created", user: data });
};

// Login
exports.login = async (req, res) => {
  console.log("login", req.body);
};
