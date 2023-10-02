const { pool } = require("../config/db");

const getAllMember = async () => {
  const connection = await pool.getConnection();

  const [member] = await connection.query("SELECT * FROM member");
  connection.release();
  return member;
};

module.exports = { getAllMember };
