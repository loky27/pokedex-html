let element = document.getElementById('pokedex')
function getInfo(url,call ){
    fetch(`${url}`)
.then(respuesta => respuesta.json())
.then(pokemon => {
    call(pokemon)
})
.catch(err=>console.log(err));
}

const prin=(array)=>{ 
  let cont=[];
  array.forEach(element => {
    cont.push(element.url)   
  });
  return cont
}
const getPokes=(array)=>{
  var x =(prin(array.results)),text=""
  x.forEach(pokemon=>{
    getInfo(pokemon,(e)=>{
      text+=`
    <div class='p-3'>
      <div class=" card p-2 " style="width:8rem ;">
      <img src="${e.sprites.front_default}" class="  border border-primary card-img-top" alt="...">
      <div class="">
        <p class="font-weight-bold">${e.name}</p>
        <p>${e.weight}<p>
      </div>
      </div>
    </div>
      `
      
  element.innerHTML=`${text}`
    })
  })
}
const getPoke=(pokemon)=>{
  console.log(pokemon)
  element.innerHTML=`
  <div class='p-3'>
    <div class=" card p-2 " style="width:8rem ;">
    <img src="${pokemon.sprites.front_default}" class="  border border-primary card-img-top" alt="...">
    <div class="">
      <p class="font-weight-bold">${pokemon.name}</p>
      <p>${pokemon.weight}<p>
    </div>
    </div>
  </div>
    `
  

    }
    

const buscar=()=>{
  let pokemones=document.getElementById('pokemones'),pokemone=document.getElementById('pokemon');
  console.log( typeof(pokemone.value)!='<empty string>')
  if(   typeof(pokemone.value)!='<empty string>'){
    console.log(pokemone.value)
    getInfo(`https://pokeapi.co/api/v2/pokemon/${pokemone.value}`,getPoke)
    pokemone=undefined
  }
  else if(pokemones.value != undefined){

    getInfo(`https://pokeapi.co/api/v2/pokemon?limit=${pokemones.value}&offset=0`,getPokes)
  }

}




/*
 element.innerHTML = `
  
  <div class="card m-5" style="width:8rem ;">
  <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <p>${pokemon.weight}<p>
  </div>
</div>
  `;*/
 