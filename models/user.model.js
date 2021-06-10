module.exports = (seq, Sequalize) => {
  const User = seq.define(
    "User",
    {
      name: {
        type: Sequalize.STRING,
      },
      age: {
        type: Sequalize.INTEGER,
      },
      address: {
        type: Sequalize.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return User;
};
