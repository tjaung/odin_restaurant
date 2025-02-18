export function removeAllChildren(element) {
    const myNode = element
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
    return element
  }

export function createElementWithClass(elem, classes, innerhtml) {
  const out = document.createElement(elem);
  if(classes.length > 0){out.classList.add(...classes)}
  if(innerhtml !== undefined){ out.innerHTML = innerhtml}

  return out
}

export function toggleIndicator(on){
  const indicator = document.querySelector('#indicatorArrow')
  
  if(indicator !== undefined){
    if (on) {indicator.classList.remove("hide");} 
    else {indicator.classList.add('hide')}
  }
  else return

}

