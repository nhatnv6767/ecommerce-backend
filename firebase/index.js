
const admin = require("firebase-admin");

const serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ecommerce-f1952.firebaseio.com",
});


module.exports = admin;
