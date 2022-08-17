let data2;
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => fetchCard(data));

function fetchCard(data) {
  const cardContainer = document.querySelector(".card--wrapper");
  console.log(data.length);

  for (var i = 0; i < data.length; i++) {
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `
         <div class="card">
          <h3>${data[i].title}</h3>
          <p class="info">${data[i].description}</p>
          <img src=${data[i].image} alt=${data[i].alt} />
        </div>
    `
    );
  }
}
