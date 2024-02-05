const cardContainer = document.querySelector(".lastest_review"); // Assuming you have a container for the cards
const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
function generateCard(user) {
  const random = Math.floor(Math.random() * 5 + 1);
  const card = document.createElement("div");

  card.style = "width: 18rem;";
  card.classList.add("card");

  const avatar = document.createElement("img");
  avatar.classList.add("card-img-top", "rounded-circle");
  avatar.src = user[0].picture.large;
  card.appendChild(avatar);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const name = document.createElement("h5");
  name.classList.add("card-title");
  name.textContent = user[0].name.first + " " + user[0].name.last;

  cardBody.appendChild(name);

  const latestDate = document.createElement("p");
  latestDate.classList.add("card-text");
  latestDate.innerHTML = `${random} / 5`;

  cardBody.appendChild(latestDate);

  card.appendChild(cardBody);
  cardContainer.appendChild(card);
}
async function FetchUser() {
  try {
    const apiData = await fetchData();
    console.log("Fetched data:", apiData.results);
    // Now you can use the 'apiData' in your main.js file
    generateCard(apiData.results);
  } catch (error) {
    console.error("Error in main:", error);
  }
}


// Export the fetchData function
export { fetchData, generateCard, FetchUser };
