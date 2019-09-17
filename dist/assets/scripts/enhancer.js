const DOC_FOCUS_CLASSNAME = 'Focus';
const documentationWrapper = document.querySelector('.Documentation');

function elementInViewport(el) {
  var top = el.offsetTop;
  var height = el.offsetTop + el.offsetHeight - 550;
  return (
    window.pageYOffset >= top && window.pageYOffset <= height
  );
}

function checkDocumentationInViewport() {
  if (elementInViewport(documentationWrapper)) {
    documentationWrapper.classList.add(DOC_FOCUS_CLASSNAME);
  } else {
    documentationWrapper.classList.remove(DOC_FOCUS_CLASSNAME);
  }
}

(function () {
  window.addEventListener('scroll', checkDocumentationInViewport, true);
  checkDocumentationInViewport();
})()