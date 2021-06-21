// Select the apartment
db.collection('apartments').get().then((snapshot) => {
    //kad dobijemo odgovor sa podacima
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        selectApartment(doc.data());
    })
}).catch((error) => {
    console.log(error);
});

const apartmentSelect = document.getElementById('apSelection')
apartmentSelect.addEventListener('change', filterByApartment)

const selectApartment = (apartments) => {
    let html = `<option value="${apartments.title}">${apartments.title}</option>`;
    apartmentSelect.innerHTML += html
}

function filterByApartment(event) {
    console.log(event.currentTarget.value);
    const selectedValue = event.currentTarget.value
    const filterApartment = apartments.filter(apartments => apartments.id === selectedValue)

    selectApartment(filterApartment)
}


// Select the apartment size
db.collection('apartments').get().then((snapshot) => {
    //kad dobijemo odgovor sa podacima
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        selectSize(doc.data());
    })
}).catch((error) => {
    console.log(error);
});

const apartmentSize = document.getElementById('sizeSelection')

const selectSize = (apartments) => {
    let html = `<option>${apartments.m2}</option>`;

    apartmentSize.innerHTML += html
}


// Select the number of bedrooms
db.collection('apartments').get().then((snapshot) => {
    //kad dobijemo odgovor sa podacima
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        selectBedrooms(doc.data());
    })
}).catch((error) => {
    console.log(error);
});

//Select bedrooms
const bedroomSelect = document.getElementById('bedroomNo')

const selectBedrooms = (apartments) => {
    let html = `<option>${apartments.bedrooms}</option>`;
    bedroomSelect.innerHTML += html
}


// Select the number of bathrooms
db.collection('apartments').get().then((snapshot) => {
    //kad dobijemo odgovor sa podacima
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        selectBathrooms(doc.data());
    })
}).catch((error) => {
    console.log(error);
});

// Select number of bathrooms
const bathroomSelect = document.getElementById('bathroomNo')

const selectBathrooms = (apartments) => {
    let html = `<option>${apartments.bathrooms}</option>`;

    bathroomSelect.innerHTML += html
}


//Apartment description preview
db.collection('apartments').get().then((snapshot) => {
    //kad dobijemo odgovor sa podacima
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        appartmentDescription(doc.data());
    })
}).catch((error) => {
    console.log(error);
});

// Apartment description preview
const apartDscrPreview = document.getElementById('apDscrPrvw')

const appartmentDescription = (apartments) => {
    let html = `<p>${apartments.description}</p>`;

    apartDscrPreview.innerHTML += html
}

// Apartment title preview
db.collection('apartments').get().then((snapshot) => {
    //kad dobijemo odgovor sa podacima
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        appartmentTitle(doc.data());
    })
}).catch((error) => {
    console.log(error);
});

// Apartment description preview
const apartTitlePreview = document.getElementById('apTitlePrvw')

const appartmentTitle = (apartments) => {
    let html = `<p>${apartments.title}</p>`;

    apartTitlePreview.innerHTML += html
}