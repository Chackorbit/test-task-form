function createOption() {
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("p");
    option.className = "select__item";
    option.innerHTML = `Option ${i}`;

    document.getElementById("practice").appendChild(option);
  }
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("p");
    option.className = "select__item";
    option.innerHTML = `Option ${i}`;

    document.getElementById("medicalprof").appendChild(option);
  }
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("p");
    option.className = "select__item";
    option.innerHTML = `Option ${i}`;

    document.getElementById("typeofinquiry").appendChild(option);
  }
}

createOption();

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

const select = () => {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });
  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest(".select");
    let currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
    currentText.classList.remove("select__item-disabled");
  }
};

select();
