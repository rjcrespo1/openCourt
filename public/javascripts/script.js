document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

window.addEventListener('load', () => {
  const randomPark = {
    lat: 26.302468,
    lng: -80.264888
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: randomPark
  });
});


function getParks() {
  axios
    .get('/parks/api')
    .then(response => {
      placeParks(response.data.parks);
    })
    .catch(error => {
      console.log(error);
    });
}

function placeParks(parks) {
  for (let park of parks) {
    const center = {
      lat: park.location.coordinates[1],
      lng: park.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: park.name
    });
    markers.push(pin);
  }
}
 
getParks();