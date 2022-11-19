//Здесь динамически создаю Опшин для селекта если такой вариант
//предусмотрен и может меняться динамически
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
    <li class="list-item"><a href="tel:1-800-480-9597">
      <div>
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.375 9.16497V10.79C11.3763 11.095 11.2488 11.3864 11.0241 11.5926C10.7993 11.7989 10.498 11.9008 10.1942 11.8733C8.5274 11.6922 6.92632 11.1226 5.51961 10.2104C4.21085 9.37875 3.10125 8.26915 2.26961 6.96039C1.35418 5.54729 0.784494 3.93843 0.606695 2.26414C0.579327 1.96128 0.680509 1.66086 0.885527 1.43627C1.09054 1.21167 1.38052 1.08359 1.68461 1.08331H3.30961C3.85337 1.07795 4.31684 1.47654 4.39295 2.01497C4.46153 2.53501 4.58873 3.04562 4.77211 3.53706C4.92093 3.93295 4.82575 4.37924 4.52836 4.67997L3.84045 5.36789C4.61154 6.72398 5.73436 7.8468 7.09045 8.61789L7.77836 7.92997C8.07909 7.63259 8.52539 7.53741 8.92128 7.68622C9.41272 7.8696 9.92333 7.9968 10.4434 8.06539C10.988 8.14223 11.3887 8.61507 11.375 9.16497Z" stroke="#52514F" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
 
    1-800-480-9597</a></li>
    <li class="list-item"><a href="mailto:info@voodoo.com">
      <div>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H10C10.55 2 11 2.45 11 3V9C11 9.55 10.55 10 10 10H2C1.45 10 1 9.55 1 9V3C1 2.45 1.45 2 2 2Z" stroke="#52514F" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11 3L6 6.5L1 3" stroke="#52514F" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    info@voodoo.com</a></li>
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

// Создаю функцию которая работает с кастомным селектом
// сдесь сделан максимально простой функционал
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
