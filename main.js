var link = document.querySelector('.link');
var result = document.querySelector('.result');

function instagram() {
if(link.value != ""){
  var url =  `https://www.instagram.com/${link.value}/`;
  
  document.querySelector('.result').value = url;
}
}
let clipboardEl = document.querySelector(".clipboard");
clipboardEl.addEventListener('click', () => {
  if(result.value != ""){
  const textarea = document.createElement('textarea');
  const resultE = result.value;
  if (!result) { return; }
  textarea.value = resultE;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Link Copied to Clipboard => '+result.value);
}
});
