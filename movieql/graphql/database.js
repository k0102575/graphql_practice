export const people = [
  { id: 1, name: "kim", age: 21, gender: "male" },
  { id: 2, name: "na", age: 33, gender: "female" },
  { id: 3, name: "park", age: 18, gender: "male" },
  { id: 4, name: "lee", age: 38, gender: "female" },
];

export const getById = (id) => {
  const filterdPeople = people.filter((p) => p.id === id);
  return filterdPeople[0];
};
