import auth from '@podiceps/auth'

export const {
  login,
  logout,
  middleware: authMiddleware,
} = auth()
