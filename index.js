
if (typeof window.FileReader === 'undefined')
  alert('File API & FileReader not supported');

var holder = document.getElementById("holder");
var results = document.getElementById("results");

holder.ondragover = function () { this.className = 'hover'; return false; };
holder.ondragend = function () { this.className = ''; return false; };
holder.ondrop = function (e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0],
      reader = new FileReader();
  reader.onload = function(event) {
    fileLoaded(file, event.target.result);
  };
  reader.readAsDataURL(file);
  return false;
};

function fileLoaded(file, dataUri) {

  var div = document.createElement("div");
  div.className = 'item';

  var name = document.createElement("div");
  name.innerHTML = file.name;
  div.appendChild(name);

  var imgDiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = dataUri;
  img.style['max-width'] = '100px';
  img.style['height-width'] = '100px';
  imgDiv.appendChild(img);
  div.appendChild(imgDiv);

  var pre = document.createElement("pre");
  pre.innerHTML = dataUri;
  div.appendChild(pre);

  results.appendChild(div);

}