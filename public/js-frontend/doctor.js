fetch("http://localhost:4025/doctor")
  .then((response) => response.json())
  .then((data) => {
    // Get the first doctor from the data (you may loop through data if you have multiple doctors)
    const doctor = data[0];

    // Update HTML elements with the data
    document.getElementById("doctor-photo").src = doctor.photo;
    document.getElementById("doctor-name").textContent = doctor.name;
    document.getElementById("doctor-role").textContent = doctor.role;
    document.getElementById("doctor-experience").textContent =
      doctor.experience;
    document.getElementById("doctor-timetable").textContent = doctor.timetable;
  })
  .catch((error) => {
    console.error("Error fetching data: " + error);
  });
