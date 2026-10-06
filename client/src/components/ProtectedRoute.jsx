import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) { //taking the children of the current react component el ba3teno
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}
