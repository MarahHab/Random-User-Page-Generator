const renderer = new Renderer()
const randomPeopleInstance = new RandomPeople();
const randomQuoteInstance = new RandomQuote();
const randomBaconInstance = new RandomBacon();
const randomPokemonInstance = new RandomPokemon()

function render (){
  

  let randomPeople = randomPeopleInstance.getRandomPeople()
  let randomQuote = randomQuoteInstance.getRandomQuote()
  let randomBacon = randomBaconInstance.getRandomBacon()
  let randomPokemon = randomPokemonInstance.getRandomPokemon()


Promise.all([randomPeople, randomQuote,randomBacon,randomPokemon])
  .then((promiseResult) => {
    let [randomPeople, randomQuote,randomBacon,randomPokemon] = promiseResult
    console.log("Random People List:", randomPeople);
    renderer.renderImage({ mainUserImage: `${randomPeople[0].image}` })
    renderer.renderName({ mainUserName: `${randomPeople[0].name}` });
    renderer.renderLocation({mainUserLocation: `${randomPeople[0].city} , ${randomPeople[0].state}`,});
    const li = randomPeople.map((n) => ({ friendName: n.name }))
    li.splice(0,1)
    renderer.renderFriends(li);
    renderer.renderQuote({ quoteContent: randomQuote.quote });
    renderer.renderBacon({ baconContent: randomBacon[0] });
    renderer.renderPokemon({
      pokemonImage: randomPokemon.pokemonImg,
      pokemonName: randomPokemon.pokemonName
    });
  })
  .catch((error) =>{
    console.log(error)
  })
}
render()

function generate(){
  render()
}