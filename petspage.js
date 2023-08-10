const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const catName = params.get("name");
document.getElementById("meetname").textContent = `Meet ${catName}`;
document.getElementById("statsname").textContent = `${catName}'s Stats`;
fetch(`http://localhost:3000/api/users/cat/${catName}`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "birthday"
    ).textContent = `${data.BirthYear}/${data.BirthMonth}/${data.BirthDay}`;
    document.getElementById("age").textContent = `${2023 - data.BirthYear}`;
    document.getElementById("personality").textContent = `${data.Personality}`;
    document.getElementById("diet").textContent = `${data.Diet}`;
    document.getElementById("colour").textContent = `${data.Colour}`;
    document.getElementById("fee").textContent = `${data.Fee}`;
    document.getElementById("location").textContent = `${data.Location}`;
    document.getElementById(
      "description"
    ).textContent = `${catName} is a ${data.Personality.toLowerCase()} cat looking for a loving home. She loves to
            play with toys and enjoys lounging around the house.`;
  });
