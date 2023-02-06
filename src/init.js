export default createBlock;

function createBlock() {
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'mainDiv');
  mainDiv.innerHTML = "This is a test"
  
  let body = document.getElementById('body');
  
  body.appendChild(mainDiv);
}