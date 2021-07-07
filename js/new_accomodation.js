// Saving data intoo database

const newAccomodation = document.querySelector('#addNew')

newAccomodation.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('accomodation').add({
        name: newAccomodation.name.value,
        description: newAccomodation.description.value,
        size: newAccomodation.size.value,
        bathrooms: newAccomodation.bathrooms.value,
        bedrooms: newAccomodation.bedrooms.value,
        prices: {
            season: {
                seasonName: newAccomodation.seasonName.value,
                price: newAccomodation.price.value,
            },
        },
        amanities: {
            amenity: {
                title: newAccomodation.title.value,
                amntDescription: newAccomodation.amntDescription.value,
            },
        },
    })

    newAccomodation.name.value = ''
    newAccomodation.description.value = ''
    newAccomodation.size.value = ''
    newAccomodation.bedrooms.value = ''
    newAccomodation.bathrooms.value = ''
    newAccomodation.seasonName.value = ''
    newAccomodation.price.value = ''
    newAccomodation.title.value = ''
    newAccomodation.amntDescription.value = ''

});


// Prices

const previewSasonsPrices = document.querySelector('#seasonsPrices')

function renderPrices(doc) {
    let prices = document.createElement('div');
    prices.setAttribute("class", "col-md-3 preview-prices")
    prices.setAttribute("id", doc.id);
    let pricesCard = document.createElement('div')
    pricesCard.setAttribute("class", "card d-flex align-items-center p-1")
    let seasonPrice = document.createElement('p');
    seasonPrice.textContent = doc.data().price + ` EUR`
    let seasonTitle = document.createElement('h5');
    seasonTitle.textContent = doc.data().title

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'btn btn-outline-primary btn-md')
    editBtn.innerHTML = 'Edit'

    pricesCard.appendChild(seasonTitle)
    pricesCard.appendChild(seasonPrice)
    pricesCard.appendChild(editBtn)
    prices.appendChild(pricesCard)

    previewSasonsPrices.appendChild(prices)
}

db.collection('prices').get().then((snapshot) => {
    // console.log(snapshot.docs)
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        renderPrices(doc)
    })
})




// Amenities

const previewAmenity = document.querySelector('#amenity-preview')
    //     //create elements and render amenities
function renderAmenities(doc) {
    let amanities = document.createElement('div');
    amanities.setAttribute("class", "col-md-3 preview-prices")
    amanities.setAttribute("id", doc.id);
    let amanitiesCard = document.createElement('div')
    amanitiesCard.setAttribute("class", "card d-flex align-items-center p-1")
    let amenityTitle = document.createElement('h5');
    amenityTitle.textContent = doc.data().title
    let amanityDescription = document.createElement('p');
    amanityDescription.textContent = doc.data().description

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'btn btn-outline-primary btn-md')
    editBtn.innerHTML = 'Edit'

    amanitiesCard.appendChild(amenityTitle)
    amanitiesCard.appendChild(amanityDescription)
    amanitiesCard.appendChild(editBtn)
    amanities.appendChild(amanitiesCard)

    previewAmenity.appendChild(amanities)

}


db.collection('amanities').get().then((snapshot) => {
    // console.log(snapshot.docs)
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        renderAmenities(doc)
    })
})



//  Upload Accomodation images (Exp. 1)

// const uploader = document.getElementById('uploader')
// let upload = document.getElementById('image')

// upload = document.addEventListener('change', function(e) {
//     // Get file
//     var file = e.target.files[0];
//     // Create storage ref
//     var storageRef = firebase.storage().ref('accomodation/' + file.name)


//     // Upload a file
//     var task = storageRef.put(file);

//     // Update progress bar
//     task.on('state_changed',

//         function progress(snapshot) {
//             let percentage = (snapshot.bytesTransferred /
//                 snapshot.totalBytes) * 100;
//             uploader.value = percentage;
//         },

//         function error(err) {

//         },

//         function complete() {

//         }

//     );
// });


// Upload accomodation images

// Example 2
const uploader = document.getElementById('uploader')

function uploadImage() {
    const ref = firebase.storage().ref()

    const file = document.querySelector("#image").files[0]

    // const name = new Date() + '-' + file.name
    const name = 'accomodation/' + file.name

    const metadata = {
        contentType: file.type
    }

    const task = ref.child(name).put(file, metadata)

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url)
            alert("Image uploaded succsesfuly")
        })

    task.on('state_changed',

        function progress(snapshot) {
            let percentage = (snapshot.bytesTransferred /
                snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },

        function error(err) {

        },

        function complete() {

        }

    );

}


// Show images from firebase