const school = {
  name: "Daffodil International School",
  class: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  events: ["Science fair", "Others"],
  specialty: {
    students: 25000,
    classroom: 250,
    dressColor: "blue",
    result: {
      GPA: 5,
      merit: "top",
    },
  },
};
console.log(school.specialty.result.GPA);
school.events[1] = "Shawon";
console.log(school.events[1]);

delete school.class;

console.log(school);
