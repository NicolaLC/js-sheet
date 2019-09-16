const DOC_FOCUS_CLASSNAME = 'Focus';
const documentationWrapper = document.querySelector('.Documentation');
const documentationContent = documentationWrapper.querySelector('.DocumentationContent');
function elementInViewport(el) {
  var top = el.offsetTop;

  return (
    top >= window.pageYOffset
  );
}

function checkDocumentationInViewport() {
  if (!documentationWrapper.classList.contains(DOC_FOCUS_CLASSNAME) && elementInViewport(documentationWrapper)) {
    documentationWrapper.classList.add(DOC_FOCUS_CLASSNAME);
  }
}

function checkDocumentationContentScroll() {
  const { scrollTop } = documentationContent;
  console.log(scrollTop);
  if (scrollTop === 0 || scrollTop >= documentationContent.scrollHeight / 2) {
    documentationWrapper.classList.remove(DOC_FOCUS_CLASSNAME);
  }
}

(function () {
  window.addEventListener('scroll', checkDocumentationInViewport, true);
  documentationContent.addEventListener('scroll', checkDocumentationContentScroll, false)
})()