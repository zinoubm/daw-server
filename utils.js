const bcrypt = require("bcrypt");

async function hashPassword(password) {
  try {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw new Error("Password hashing failed");
  }
}

// const password = "myPassword123";

// hashPassword(password)
//   .then((hashedPassword) => {
//     console.log("Hashed Password:", hashedPassword);
//   })
//   .catch((err) => {
//     console.error("Error:", err.message);
//   });

module.exports = {
  hashPassword,
};
