let data;
let body = document.querySelector('body')
fetch("https://api.trello.com/1/lists/650f9d4d8cc99e5c31ab626f/cards?key=93479807315173ef481da8dd8dd19258&token=ATTAe0e7f87f805f49824222390c19d11035383a85b1445065c23d7e26dbb3d005bcA4CC952E")
  .then((response) => response.json())
  .then((json) => {
    data = json
    
    for (i in data)
    {
    let d = document.createElement('div')
    d.textContent = data[i].desc
    body.appendChild(d)
    console.log(1)
    }

});

