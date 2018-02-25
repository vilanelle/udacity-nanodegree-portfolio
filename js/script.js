// select all project divs into array
const projectItems = Array.from(document.getElementsByClassName('a-projectBar__item'));

// enable and listen for toggling featured project class on project divs
const toggleFeature = (e) => {

  // point to parent (item) if child (img) clicked
  let newFeature = e.target.classList.contains('a-projectBar__item') ? e.target : e.target.parentElement;
  let currFeature = projectItems.find(el => el.classList.contains('a-projectBar__feature'));

  console.log(currFeature, newFeature);
  // newFeature.classList.remove('fade-in');
  // currFeature.classList.remove('fade-in');
  // newFeature.classList.add('fade-out');
  // currFeature.classList.add('fade-out');
projectItems.forEach(el => el.classList.remove('fade-in'))
projectItems.forEach(el => el.classList.add('fade-out'))


  setTimeout(() => {
    currFeature.classList.remove('a-projectBar__feature');
    newFeature.classList.add('a-projectBar__feature');
    // newFeature.classList.add('fade-in');
    // currFeature.classList.add('fade-in');
    projectItems.forEach(el => el.classList.add('fade-in'))
  }, 300)
}

projectItems.forEach(item => item.addEventListener('click', toggleFeature));
