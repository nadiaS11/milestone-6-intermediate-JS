let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          {
            school_name: "ABC Primary School",
          },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          {
            school_name: "ABC Secondary School",
          },
          { location: "St. Luis" },
        ],
      },
    ],
  },
};
console.log(data.Sophia.study[1].secondary[1].location);
