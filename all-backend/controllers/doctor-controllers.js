// mengeksport module
// const { pool } = require("../db/database");
const doctorService = require("../services/doctor-services");
// const { doctorRoute } = require("../routes/doctor-routes");

// // menggunakan async funtion
// async function getAllDoctor(req, res) {
//   const connection = await pool.getConnection();

//   const [rows] = await connection.query("SELECT * FROM doctor");
//   console.log(rows);

//   res.status(200).json({
//     message: "Hello Laila!",
//     data: rows,
//   });
// }

// menggunakan arrow function
const getAllDoctor = async (req, res) => {
  const doctor = await doctorService.getAllDoctor();
  res.status(200).json({
    message: "Sukses dalam mengambil data!",
    data: doctor,
  });
};

module.exports = { getAllDoctor };
