class APIManager {
  fetchRandomUser() {
    return $.get("https://randomuser.me/api/?format=json");
  }

  fetchRandomQuote() {
    return $.get("https://api.kanye.rest");
  }

  fetchRandomBaconIpsum() {
    return $.get(
      "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
    );
  }

  fetchRandomPokemon() {
    const randomPokemonID = Math.floor(Math.random() * 100);
    return $.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonID}/`);
  }
}

const apiManager = new APIManager();

// Define People
class RandomPeople {
  async getRandomPeople() {
    const randomPeopleList = [];
    for (let i = 0; i < 7; i++) {
      const data = await apiManager.fetchRandomUser();
      const user = data.results[0];
      const randomPerson = {
        name: `${user.name.first} ${user.name.last}`,
        city: user.location.city,
        state: user.location.state,
        image: user.picture.large,
      };
      randomPeopleList.push(randomPerson);
    }

    return randomPeopleList;
  }
}

// Define Quotes
class RandomQuote {
  getRandomQuote() {
    return apiManager
      .fetchRandomQuote()
      .then((quote) => {
        return quote;
      })
      .catch((error) => {
        console.error("Error while fetching random quote:", error);
        return Promise.reject(error);
      });
  }
}

// Define Bacon
class RandomBacon {
  async getRandomBacon() {
    try {
      const bacon = await apiManager.fetchRandomBaconIpsum();
      return bacon;
    } catch (error) {
      console.log("Error while fetching random bacon:", error);
      throw error;
    }
  }
}

// Define Pokemon
class RandomPokemon {
  getRandomPokemon() {
    return apiManager
      .fetchRandomPokemon()
      .then((pokemon) => {
        const pokemonObj = {
          pokemonName: pokemon.name,
          pokemonImg: pokemon.sprites.front_default,
        };
        return pokemonObj;
      })
      .catch((error) => {
        console.error("Error while fetching random Pokémon:", error);
        return Promise.reject(error);
      });
  }
}
