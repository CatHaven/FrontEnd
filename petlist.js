const URL = "http://localhost:3000/api/users/cats";
function makeCard(text) {
  const card = document.createElement("card-text");
  card.innerText = text;
}
async function getCatWeek() {
  const result = await fetch(URL);
  result.json().then((data) => {
    console.log(data);
    const petlist = document.getElementById("petList");
    for (var i in data) {
      pet = data[i];
      console.log(pet);
      const petCard = document.createElement("div");
      petCard.classList.add("flex-container");
      petCard.append(makeCard(pet.CatName));
      petCard.append(makeCard(pet.Colour));
      petCard.append(makeCard(pet.Diet));
      petCard.append(makeCard(pet.Gender));
      petCard.append(makeCard(pet.Fee));
      petlist.appendChild(petCard);
    }
  });
}
getCatWeek();
