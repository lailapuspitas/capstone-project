// untuk membuat port tersembunyi di dalam file (.env)
require("dotenv").config();

////  file entry point dimana nanti server API bakal jalan
const express = require("express");

// untuk mengkoneksikan modul dengan module yang telah di buat sendiri
const { pool } = require("./config/db");
const { memberRoute } = require("./routes/member-routes");
const { doctorRoute } = require("./routes/doctor-routes");
const { appointmentRoute } = require("./routes/appointment-routes");

const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/member", memberRoute);
app.get("/doctor", doctorRoute);
// app.get("/appointment", appointmentRoute);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
