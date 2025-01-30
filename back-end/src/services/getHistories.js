const { Firestore } = require('@google-cloud/firestore');

async function getHistories() {
  const db = new Firestore();
  const predictCollection = db.collection('prediction');
  const snapshot = await predictCollection.get();

  if (snapshot.empty) {
    return [];
  }

  return snapshot.docs.map(doc => ({
    id: doc.id,
    history: doc.data(),
  }));
}

module.exports = getHistories;
