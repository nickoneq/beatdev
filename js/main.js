///////////////КАРТА/////////////

function initMap() {
	var pos = {lat: 53.861344, lng: 27.562146},
		pos2 = {lat: 53.861454, lng: 27.563964}
	var opt = {
		center: pos,
		zoom: 17
	}

	var map = new google.maps.Map(document.getElementById('map'), opt)
}

////////////////////МЕНЮ////////////

const icon = document.getElementById('icon-menu')
const menu = document.getElementById('menu')
const content = document.getElementById('content')

icon.addEventListener('click', () => {
	if (menu.classList.contains('active-menu')) {
		menu.classList.remove('active-menu')
		content.style.top = '50px'
	} else {
		menu.classList.add('active-menu')
		content.style.top = '100px'
	}
})