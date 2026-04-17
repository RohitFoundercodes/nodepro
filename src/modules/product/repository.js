const db = require('../../config/db');

exports.create = async(data)=>{
  const [res] = await db.query(
    "INSERT INTO products (name,price,stock) VALUES (?,?,?)",
    [data.name,data.price,data.stock]
  );
  return {id:res.insertId,...data};
};

exports.getAll = async()=>{
  const [rows] = await db.query("SELECT * FROM products");
  return rows;
};
