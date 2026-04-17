module.exports = {
  up: async(db)=>{
    await db.query(`CREATE TABLE users (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(150) UNIQUE,
      password VARCHAR(255)
    )`);
  }
};
