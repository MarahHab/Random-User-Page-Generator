class Renderer{

  renderImage (img) {
    const source = $("#main-user-image-template").html();
    const imgTemplate = Handlebars.compile(source);
    let newImageHTML = imgTemplate(img);
    $("#main-user-image").empty()
    $("#main-user-image").append(newImageHTML);
  };

  renderName(fullName) {
    const source = $("#main-user-template").html();
    const nameTemplate = Handlebars.compile(source);
    let newNameHTML = nameTemplate(fullName);
    $("#main-user").empty()
    $("#main-user").append(newNameHTML);
  };

  renderLocation(location) {
    const source = $("#main-user-template").html();
    const locationTemplate = Handlebars.compile(source);
    let newLocationHTML = locationTemplate(location);
    $("#main-user").append(newLocationHTML);
  };

  renderFriends(friends) {
    const source = $("#friends-template").html();
    const friendsTemplate = Handlebars.compile(source);
    $("#friends").empty()
    for (let i = 0; i < friends.length; i++) {
      let newFriendsHTML = friendsTemplate(friends[i]);
      $("#friends").append(newFriendsHTML);
    }
  };

  renderQuote(quote) {
    const quoteSource = $("#quote-template").html();
    const quoteTemplate = Handlebars.compile(quoteSource);
    let newQuoteHTML = quoteTemplate(quote);
    $("#quote-content").html(newQuoteHTML);
  };

  renderBacon(bacon) {
    const baconSource = $("#bacon-template").html();
    const baconTemplate = Handlebars.compile(baconSource);
    let newQuoteHTML = baconTemplate(bacon);
    $("#about-me-content").html(newQuoteHTML);
  };

  renderPokemon(pokemon) {
    const pokemonSource = $("#pokemon-template").html();
    const pokemonTemplate = Handlebars.compile(pokemonSource);
    let newPokemonHTML = pokemonTemplate(pokemon);
    $("#pokemon-container").html(newPokemonHTML);
  };

}



