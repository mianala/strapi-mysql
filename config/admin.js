module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b13a309e42c1fa388cdfe9d5f29ebde9'),
  },
});
