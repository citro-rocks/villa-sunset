db.collection('apartments').add().then(() => {
    //kad dobijemo odgovor sa podacima
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        addNewAccomodation(doc.data());
    })
}).catch((error) => {
    console.log(error);
});