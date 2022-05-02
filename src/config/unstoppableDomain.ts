import UAuth from '@uauth/js';


const testingCredentials = {
  clientID: '3uxE3Ap3b26HJnPmz0H0hhV7I2pnlk8aQmh5vWjbnOE=',
  clientSecret: 'QfTAU9rmrGxyAtOyuWWVyulqNLKoS4sFzi1EuU9/7Co=',
  scope: 'openid email wallet',
  redirectUri: 'https://candid-selkie-77e78e.netlify.app/callback',
  postLogoutRedirectUri: 'https://candid-selkie-77e78e.netlify.app/',
};

export const uauth = new UAuth(testingCredentials);