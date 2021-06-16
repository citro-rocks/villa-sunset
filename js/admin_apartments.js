db.collection('apartments').get().then((snapshot) => {
    //kad dobijemo odgovor sa podacima
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        selectApartment(doc.data());
    })
}).catch((err) => {
    console.log('err');
});

const selectDrop = document.querySelector('option')

const selectApartment = (apartments) => {
    let html = `
    <option>${apartments.title}</option>
    `;

    selectDrop.innerHTML += html
}