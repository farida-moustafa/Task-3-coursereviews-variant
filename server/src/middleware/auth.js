import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  //searched for header called authorization enta el bthoto fel fe
  const [, token] = authHeader.split(' '); // "Bearer <token>"
  if (!token) return res.status(401).json({ message: 'Missing token' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; //so controller can access the user info from the token
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

//jwt contains header (algorithm and type used) , payload {things u store in it} , signature (to verify the token is valid and not tampered with // jwt secret + expiration time)