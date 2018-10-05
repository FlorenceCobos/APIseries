document.querySelector('button').addEventListener('click', function() {
  search();
})
document.querySelector('body').addEventListener('keydown',function(el) {
  if (el.key == "Enter") {
    search();
  }
})
document.querySelector('body').addEventListener('click',function (el){
  if(el.target.classList.contains('image')){
    el.target.nextSibling.classList.toggle('hidden');
    
  }
  
})

function search(){
  const inputValue =
  document.querySelector('input').value;
  
  if(inputValue === "") {
    
  } else {
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://api.tvmaze.com/search/shows?q=" + inputValue, false);
    xhttp.send();
    
    let results = JSON.parse(xhttp.response);
    
    document.querySelector('main').innerHTML ="";
    
    for (let i = 0; i < results.length; i++) {
      displaySerie(results[i]);
    }
  }
}

function displaySerie(serie) {
  let target = document.querySelector('main');
  
  let div = document.createElement('DIV');
  let name = document.createElement('H2');
  let image = document.createElement('IMG');
  let status = document.createElement('P');
  
  name.innerHTML = serie.show.name;
  if (serie.show.image === null) {
  }else{
    image.src = serie.show.image.medium;
    image.classList.add('image');
  }
  status.innerHTML = serie.show.status;
  status.classList.add('status');
  status.classList.add('hidden');
  
  div.appendChild(name);
  div.appendChild(image);
  div.appendChild(status);
  target.appendChild(div);
}
