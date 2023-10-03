async function getMemberFromDatabase() {
  // URL endpoint dari API Anda
  const API_BASE_URL = "https://health-care-production.up.railway.app";
  // Mengambil data dari API
  const response = await fetch(`${API_BASE_URL}/member`);
  // Mengubah respons menjadi JSON dan mengambil properti data
  const data = (await response.json()).data;

  return data;
}

function createMemberElement(member) {
  const li = document.createElement("li");
  li.className = "member-box";

  const img = document.createElement("img");
  img.className = "member-photo";
  img.src = member.photo;
  img.alt = "";

  const pName = document.createElement("p");
  pName.className = "member-name";
  pName.textContent = member.name;

  const pRole = document.createElement("p");
  pRole.className = "member-role";
  pRole.textContent = member.role;

  li.appendChild(img);
  li.appendChild(pName);
  li.appendChild(pRole);

  return li;
}

// Fungsi untuk menampilkan data ke HTML
async function displayData() {
  const data = await getMemberFromDatabase();

  if (data.length === 0) {
    console.error("No data to display");
    return;
  }

  const container = document.getElementById("member-container");

  data.forEach((member) => {
    const memberElement = createMemberElement(member);
    container.appendChild(memberElement);
  });
}

// Panggil fungsi displayData saat halaman dimuat
window.onload = displayData;

// async function fetchMembers() {
//   try {
//     const response = await fetch(`${API_BASE_URL}/member`);
//     const data = await response.json();
//     console.log(data);
//     const memberContainer = document.getElementById("member-container");
//     memberContainer.innerHTML = "";

//     data.forEach((member) => {
//       const memberBox = document.createElement("li");
//       memberBox.textContent = `${member.name} by ${member.role}`;
//       memberContainer.appendChild(memberBox);
//       // memberBox.classList.add("member-box");

//       // const memberPhoto = document.createElement("img");
//       // memberPhoto.classList.add("member-photo");
//       // memberPhoto.src = `${member.photo}`;
//       // memberPhoto.alt = `${member.name}`;

//       // const memberName = document.createElement("p");
//       // memberName.classList.add("member-name");
//       // memberName.textContent = `${member.name}`;

//       // const memberRole = document.createElement("p");
//       // memberRole.classList.add("member-role");
//       // memberRole.textContent = `${member.role}`;

//       // memberBox.appendChild(memberPhoto);
//       // memberBox.appendChild(memberName);
//       // memberBox.appendChild(memberRole);

//       // memberContainer.appendChild(memberBox);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchMembers();
