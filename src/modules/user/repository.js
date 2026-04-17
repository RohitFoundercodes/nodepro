const db = require('../../config/db');

exports.create = async(data)=>{
  const [res] = await db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [data.name,data.email,data.password]
  );
  return {id:res.insertId,...data};
};

exports.findByEmail = async(email)=>{
  const [rows] = await db.query("SELECT * FROM users WHERE email=?",[email]);
  return rows[0];
};
