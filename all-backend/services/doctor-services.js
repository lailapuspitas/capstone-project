const { pool } = require("../config/db");

const getAllDoctor = async () => {
  const connection = await pool.getConnection();

  const [doctor] = await connection.query("SELECT * FROM doctor");
  return doctor;
};

module.exports = { getAllDoctor };
