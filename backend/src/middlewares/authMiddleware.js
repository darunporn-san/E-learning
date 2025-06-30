const supabase = require('../config/supabaseClient')

// Register
exports.register = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' })
  }

  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) return res.status(400).json({ error: error.message })

  return res.status(201).json({ message: 'User registered successfully', user })
}

// Login
exports.login = async (req, res) => {
 console.log('login',req.body)
}