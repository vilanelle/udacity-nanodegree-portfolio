// select all project divs into array
const projectItems = Array.from(document.getElementsByClassName('a-projectBar__item'));

// enable and listen for toggling featured project class on project divs
const toggleFeature = (e) => {

	let currFeature = projectItems.find(el => el.classList.contains('a-projectBar__feature'));
	if ((e.target == currFeature) || (e.target.parentElement == currFeature) || (!e.target.classList.contains('a-projectBar__img'))) {
		return;
	}

	let newFeature = e.target.parentElement;
	projectItems.forEach(el => el.classList.remove('fade-in'))
	projectItems.forEach(el => el.classList.add('fade-out'))

	setTimeout(() => {
		currFeature.classList.remove('a-projectBar__feature');
		newFeature.classList.add('a-projectBar__feature');
		projectItems.forEach(el => el.classList.add('fade-in'))
	}, 300)
}

// toggle feature swap, feature styling on various screen sizes
const enableFeatureStyling = () => {
	if (window.innerWidth > 920) {
		projectItems.forEach(item => item.addEventListener('click', toggleFeature));
		if (!(projectItems.find(el => el.classList.contains('a-projectBar__feature')))) {
			projectItems[0].classList.add('a-projectBar__feature');
		}
	} else {
		projectItems.forEach(item => item.removeEventListener('click', toggleFeature));
		projectItems.forEach(item => {
			if (item.classList.contains('a-projectBar__feature')) {
				item.classList.remove('a-projectBar__feature');
			}
		});
	}
}
window.onload = enableFeatureStyling;
window.addEventListener('resize', enableFeatureStyling);


/// toggle menuIcon
const hamburger = document.getElementById('menuIcon');
const navLinks = Array.from(document.getElementsByClassName('a-sidebar__item'));
const sidebar = document.getElementById('sidebar');

const toggleMenu = () => {
	sidebar.classList.toggle('-open');
}

hamburger.addEventListener('click', toggleMenu);
navLinks.forEach(link => link.addEventListener('click', toggleMenu));

// remove sticky hover effect on touch devices
const scrollToTop = document.getElementById('scrollToTop');
const removeHoverEffect = () => {
	scrollToTop.classList.remove('hoverScroll');
}
scrollToTop.addEventListener('touchstart', removeHoverEffect);
