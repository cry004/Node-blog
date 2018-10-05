const firebaseAdmin = require('firebase-admin');
require('dotenv').config();


firebaseAdmin.initializeApp({
  credential: admin.credential.cert({
    type: 'service_account',
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CKIENT_ID,
    auth_uri: process.env.AUTH_URL,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
    client_x509_cert_url: process.env.CLIENT_X509

  }),
  databaseURL: "https://node-blog-ae4c1.firebaseio.com"
});

const db = firebaseAdmin.database();