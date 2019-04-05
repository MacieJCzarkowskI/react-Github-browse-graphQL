import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-28tqomp2.eu.auth0.com',
        clientID: 'WcGeM1q1MN7s-JBCeofjays0QTzaPihK',
        redirectUri: 'http://localhost:3000/page',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
        console.log(document.cookie)
    }
}
