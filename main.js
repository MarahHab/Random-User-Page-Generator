
class APIManager{
    fetchRandomUser(){
        return $.get("https://randomuser.me/api/?format=json")
    }
}



let randomPeopleList = []
class RandomPeople{    
    constructor(name,city,state){
        this.name = name
        this.city = city
        this.state = state
    }
}

const apiManager = new APIManager();

// Fetch 7 random users and add them to the list
for (let i = 0; i < 7; i++) {
  apiManager.fetchRandomUser()
    .then(data => {
      const user = data.results[0];
      const randomPerson = new RandomPeople(
        `${user.name.first} ${user.name.last}`,
        user.email,
        user.login.username
      );
      randomPeopleList.push(randomPerson);
    })
    .catch(error => {
      console.error("Error fetching random user:", error);
    });
}

// Wait for all requests to complete before displaying the list
Promise.all(randomPeopleList)
  .then(() => {
    // Display the list of random people
    console.log("Random People List:", randomPeopleList);
  })
  .catch(error => {
    console.error("Error while processing random people list:", error);
  });