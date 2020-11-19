/* ********************************* */

const imageUrls = getImages();
const parent = document.querySelector("#list");
imageUrls.forEach(function addImageToDOM(url) {
  const image = createImageEl(url);
  parent.appendChild(image);
});

function getImages() {
  const imageString = getUrlParam("images");
  const imageUrls = imageString.split(",");
  console.log(imageUrls);
  return imageUrls;
}

function createImageEl(url) {
  const el = document.createElement("li");
  el.innerHTML = `<img src=${url}/>`;
  return el;
}
/* ********************************* */

function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue;

  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }

  return urlparameter;
}

// this is a modified to ignore `&` as a separator
function getUrlVars() {
  var vars = {};

  window.location.href.replace(/[?&]+([^=&]+)=(.*)/gi, function (
    m,
    key,
    value
  ) {
    vars[key] = value;
  });

  return vars;
}
console.log(process.env.NODE_ENV);
