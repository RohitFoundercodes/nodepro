module.exports = {
  up: async(db)=>{
    await db.query(`CREATE TABLE products (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      price DECIMAL(10,2),
      stock INT
    )`);
  }
};
