const URL = "http://localhost:3000/api/users/cats";
//add styling class to text
function makeCardText(text) {
  const card = document.createElement("card-text");
  console.log(text);
  card.innerText = text;
  return card;
}
//generates elements from the cats retrieved from the api
async function getCats() {
  const result = await fetch(URL);
  result.json().then((data) => {
    console.log(data);
    const petlist = document.getElementById("petlist");
    for (var i in data) {
      pet = data[i];
      pet_img = document.createElement("img");
      pet_img.src = `images/${pet.CatName}.jpg`;
      pet_img.width = 150;
      pet_img.height = 225;
      let petCard = document.createElement("div");
      petCard.classList.add("flex-container");
      petCard.classList.add("petlistcard");

      petCard.append(pet_img);
      petCard.append(makeCardText(pet.CatName));
      petCard.append(makeCardText(pet.Colour));
      petCard.append(makeCardText(pet.Diet));
      petCard.append(makeCardText(pet.Gender));
      petCard.append(makeCardText(pet.Fee));

      //eventlistener which will go to petpage for each pet
      petCard.addEventListener("click", () => {
        window.location.assign(`petspage.html?name=${pet.CatName}`);
      });
      petlist.appendChild(petCard);
    }
  });
}
getCats();
document.getElementById("featured").addEventListener("click", () => {
  const URL = "http://localhost:3000/api/users/catweek";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      window.location.assign(`petspage.html?name=${data[0].CatName}`);
    });
});
