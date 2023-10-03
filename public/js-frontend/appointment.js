const API_BASE_URL = "https://health-care-production.up.railway.app";

document
  .querySelector(".appointment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const service = document.getElementById("service").value;
    const complaint = document.getElementById("complaint").value;

    const appointmentData = {
      name: name,
      email: email,
      date: date,
      time: time,
      service: service,
      complaint: complaint,
    };

    fetch(`${API_BASE_URL}/appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert("Appointment added successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error adding the appointment");
      });
  });

// function addAppointment() {
//   // URL endpoint dari API Anda
//   const API_BASE_URL = "https://health-care-production.up.railway.app";

//   // Mengambil nilai dari form
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const date = document.getElementById("date").value;
//   const time = document.getElementById("time").value;
//   const service = document.getElementById("service").value;
//   const complaint = document.getElementById("complaint").value;

//   // Membuat objek appointment baru
//   const newAppointment = {
//     name: name,
//     email: email,
//     date: date,
//     time: time,
//     service: service,
//     complaint: complaint,
//   };

//   // Mengirim data ke API
//   fetch(`${API_BASE_URL}/appointment`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newAppointment),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// const API_BASE_URL = "https://health-care-production.up.railway.app";

// async function addAppointment() {
//   const AppointmentName = document.getElementById("name").value;
//   const AppointmentEmail = document.getElementById("email").value;
//   const AppointmentDate = document.getElementById("date").value;
//   const AppointmentTime = document.getElementById("time").value;
//   const AppointmentCategories = document.getElementById("service").value;
//   const AppointmentComplaint = document.getElementById("complaint").value;

//   try {
//     const response = await fetch(`${API_BASE_URL}/appointment`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: AppointmentName,
//         email: AppointmentEmail,
//         date: AppointmentDate,
//         time: AppointmentTime,
//         categories: AppointmentCategories,
//         complaint: AppointmentComplaint,
//       }),
//     });

//     if (response.ok) {
//       // Data berhasil dikirim
//       const data = await response.json();
//       // Tampilkan data atau lakukan apa yang diperlukan
//     } else {
//       // Permintaan tidak berhasil
//       const errorMessage = await response.json();
//       document.getElementById("error-message").textContent =
//         errorMessage.message;
//     }
//   } catch (error) {
//     console.error("Error adding appointment:", error);
//     document.getElementById("error-message").textContent =
//       "Failed to add appointment.";
//   }
// }
