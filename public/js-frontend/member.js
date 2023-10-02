const API_BASE_URL = "https://localhost/4025";

async function fetchMember() {
  try {
    const response = await fetch(`${API_BASE_URL}/member`);
    const data = await response.json();
    const memberList = document.querySelector(".member-list");

    data.forEach((member) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <div class="member-box">
            <img class="member-photo" src="${member.photo}" alt="${member.name}" />
            <p class="member-name">${member.name}</p>
            <p class="member-role">${member.role}</p>
          </div>
        `;
      memberList.appendChild(listItem);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchMember();
