module.exports = (seq, Sequalize) => {
    const Sales = seq.define(
      "Sales",
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
        salary:{
            type: Sequalize.FLOAT
        }
      },
      {
        freezeTableName: true,
      }
    );
    return Sales;
  };
  