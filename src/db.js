const admin = require('firebase-admin');
//var serviceAccount = require("./db-service-account.json");

var serviceAccount = process.env.DB_SERVICE_ACCOUNT;


admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccount)),
  databaseURL: "https://rotation.firebaseio.com"
});
const db = admin.firestore();

const store = {
async getRotations () {
  let rotations = db.collection('rotations');
  let allRotations = await rotations.get();
  const arr = [];
  for(const doc of allRotations.docs){
    arr.push(doc.id, '=>', doc.data());
  }
  return(arr);
}
};

module.exports = store
