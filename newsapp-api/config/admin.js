module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3aaf2f547de2a4d6dd86eb0e7c9e49e3'),
  },
});
