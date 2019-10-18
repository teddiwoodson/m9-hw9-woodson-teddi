var accordionheaders = document.querySelectorAll('#accordion .accordion-headers');

//handles accordion dropdown action
function expandAccordionDescription() {

  //handles toggle indicator
  for (i = 0; i < accordionheaders.length; i++) {
    accordionheaders[i].childNodes[3].innerHTML = '+';
  }
  this.childNodes[3].innerHTML = '-';
}

//add event listener for accordion
for (i = 0; i < accordionheaders.length; i++) {
  accordionheaders[i].addEventListener('click', expandAccordionDescription);
}
