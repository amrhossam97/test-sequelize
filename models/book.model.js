module.exports = (seq, Sequalize) => {
  const Book = seq.define(
    "Book",
    {
      title: {
        type: Sequalize.STRING,
      },
      description: {
        type: Sequalize.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Book;
};
