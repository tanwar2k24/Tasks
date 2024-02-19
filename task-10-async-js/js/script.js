document.addEventListener("DOMContentLoaded", displayUser);

// const URL = "https://gorest.co.in/public/v2/users/";

// const check= async () => {
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data[0]);
//     // displayUser(users);
// }

fetch("https://gorest.co.in/public/v2/users/")
  .then((response) => response.json())
  .then((users) => displayUser(users))
  .catch((error) => console.error("Error fetching user data:", error));

function displayUser(users) {
  const emptyContainer = document.querySelector("#empty");
  emptyContainer.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "card mb-3";
    userCard.innerHTML = `
          <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">${user.name}</h5>
            <button class="btn btn-secondary " data-toggle="modal" data-target="#userDetailsModal" onclick="displayDetails(${user.id})">
            Details
           </button>  
          </div>
        `;
    emptyContainer.appendChild(userCard);
  });
}



const displayDetails = async function (userId) {
  try {
    const userDetailsResponse = await fetch(
      `https://gorest.co.in/public/v2/users/${userId}` )
      
    const userInfo = await userDetailsResponse.json();
    const infoContainer = document.getElementById("info");
    infoContainer.innerHTML = `
          <p><strong>Name :&emsp;</strong>${userInfo.name}</p>
          <p><strong>Email :&emsp;</strong>${userInfo.email}</p>
          <p><strong>Phone :&emsp;</strong>${userInfo.phone}</p>
          <p><strong>Gender :&emsp;</strong>${userInfo.gender}</p>
          <p><strong>Status :&emsp;</strong>${userInfo.status}</p>
        `;
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};