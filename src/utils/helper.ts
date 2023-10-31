import jwt from 'jsonwebtoken';

export const helper = {
  encode: async (jwtClaims: { sub: string; name: string; iat: number; exp: number }) => {
    return jwt.sign(jwtClaims, process.env['JWT_SECRET'], { algorithm: 'HS256' });
  },
  decode: async (token: string): Promise<{ sub: string; name: string; iat: number; exp: number }> => {
    //@ts-ignore
    return jwt.verify(token, process.env['JWT_SECRET'], { algorithms: ['HS256'] });
  },
};
