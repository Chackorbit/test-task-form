let select = document.querySelectorAll("select");
console.log("select: ", select);

function createCustomSelect() {
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.className = "option";
    option.innerHTML = `Option ${i}`;

    document.getElementById("practice").appendChild(option);
  }
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.innerHTML = `Option ${i}`;

    document.getElementById("medicalprof").appendChild(option);
  }
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.innerHTML = `Option ${i}`;

    document.getElementById("typeofinquiry").appendChild(option);
  }
}

createCustomSelect();

// Initialize and add the map
function initMap() {
  // The location of voodoo ,
  const voodoo = { lat: 43.4529620745219, lng: -80.51335245545778 };
  // The map, centered at voodoo
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: voodoo,
    disableDefaultUI: true,
  });

  const contentString =
    '<div class="map-info" id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h2 id="firstHeading" class="mapHeading">Voodoo</h2>' +
    '<div id="bodyContent">' +
    "<p>" +
    "137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine" +
    "</p>" +
    "</div>" +
    `<ul class="list">
    <li class="list-item"><a href="tel:1-800-480-9597"><img src="../helpers/Shape.svg" /> 1-800-480-9597</a></li>
    <li class="list-item"><a href="mailto:info@voodoo.com"><img src="../helpers/mail.svg" />info@voodoo.com</a></li>
    </ul>` +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Voodoo",
  });
  // The marker, positioned at voodoo
  const marker = new google.maps.Marker({
    position: voodoo,
    map: map,
    title: "Voodoo",
  });
  infowindow.open({
    anchor: marker,
    map,
  });
}

window.initMap = initMap;
