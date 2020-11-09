// import * as passport from 'passport';
// import * as jwtStrategy from 'passport-jwt';
// import * as PassportLocal from 'passport-local';
// import db from '../db';
// import config from '../config';
// import { comparePassword } from '../utils/passwords';
// import type { IPayload } from '../utils/interfaces';

// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));

// passport.use(
//     new PassportLocal.Strategy({ usernameField: 'email'}, async (email, password, done) => {
//         try {
//             const [user] = await db.users.findUser('email', email);
//             if (user && comparePassword(password, user.password)) {
//                 delete user.password;
//                 done(null, user);
//             } else {
//                 done(null, false);
//             }
//         } catch (err) {
//             console.log(err);
//             done(err);
//         }
//     })
// );

// passport.use(
//     new jwtStrategy.Strategy(
//         {
//             jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
//             secretOrKey: config.jwt.secret
//         },
//         async (payload: IPayload, done) => {
//             try {
//                 const [user] = await db.users.findUser('id', payload.userid);
//                 if (user) {
//                     delete user.password;
//                     done(null, user);
//                 } else {
//                     done(null, false);
//                 }
//             } catch (err) {
//                 console.log(err);
//                 done(err);
//             }
//         }
//     )
// );