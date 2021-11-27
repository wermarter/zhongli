import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import database from '../services/database.js'
import config from '../config.js'

export const handleLogin = async (req, res) => {
  const { userId, password } = req.body

  const user = (
    await database.query(`SELECT * FROM "Users" WHERE id=$1`, [userId])
  ).rows[0]

  if (!user) {
    return res.status(401).json({
      message: 'Invalid user ID',
    })
  }

  const match = await bcrypt.compare(password, user.password)
  if (match) {
    const userInfo = {
      id: userId,
      name: user.name,
      psid: user.psid,
      role: user.role,
    }
    const token = jwt.sign(userInfo, config.jwtSecret, {
      expiresIn: config.tokenExpires,
    })
    res.json({
      ...userInfo,
      name: user.name,
      accessToken: token,
    })
  } else {
    return res.status(401).json({
      message: 'Wrong password',
    })
  }
}

export const verifyToken = (req, res, next) => {
  const { authorization } = req.headers
  const token = authorization?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({
      message: 'No token provided',
    })
  }

  jwt.verify(token, config.jwtSecret, (err, decodedUser) => {
    if (err) {
      console.log(err, token)

      return res.status(401).json({
        message: 'Invalid token',
      })
    }
    req.locals = {
      user: decodedUser,
    }
    next()
  })
}

export const permit = (permittedRoles) => {
  return (req, res, next) => {
    const { role } = req.locals.user
    if (permittedRoles.includes(role)) {
      next()
    } else {
      res.status(403).json({
        message: 'You are unauthorized to access this route',
      })
    }
  }
}
