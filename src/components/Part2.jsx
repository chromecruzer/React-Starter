import React from "react";
import _ from "lodash";


const Part2 = () => {
  const fruits = ["apple", "orange", "banana", "mango"];
  const person = {
    name: "John",
    age: 30,
    city: "New York",
  };
  const people = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
  ];

  ///////////////////////////////////////////////////////////////////////////////
  const sortLodFruits = _.sortBy(fruits);
  const tester = _.map(sortLodFruits, (sl, index) => <li key={index}>{sl}</li>); // put reverse() for descending
  const objs = [
    {
      id: 1,
      name: "Object 1",
      test: [1, 2, 3, [50], { Mani: "he is a potta" }],
    },
    { id: 2, name: "Object 2" },
    { id: 3, name: "Object 3" },
  ];
  // lodash map
  const mapperLod = _.map(fruits, (f, index) => (
    <li key={index}>{f + " * "}</li>
  ));
  const mapper = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
  const objmapperLod = _.map(objs, (obj, index) => (
    <li key={index}>
      {obj.id + " is"}-{obj.name}
    </li>
  ));
  // lodash filter
  const filLodfruits = _.filter(fruits, (f) => f !== "mango" && f !== "apple");

  const nativeLodFilter = _.filter(people, (p) => p.age < 30);
  const filterLodvals = _.map(nativeLodFilter, (a, index) => (
    <li key={index}>{a.name}</li>
  ));

  const cws = _.join(filLodfruits, [", "]);

  // sort and filter method both native and lodash vagera
  fruits.sort((a, b) => a.localeCompare(b)); //alphabetical
  fruits.sort((a, b) => b.localeCompare(a)); // reverse alphabetical
  fruits.sort((a, b) => b - a); // number wise and vise versa
  const nativeFilter = people.filter((a) => a.age < 30);
  const filtervals = nativeFilter.map((a, b) => <li key={b}>{a.name}</li>);

  return (
    <>
      <div>
        <h2>List of Fruits</h2>
        <ol>
          {/* Use _.map to iterate over the fruits array and render each fruit as a list item */}
          {_.map(fruits, (fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ol>

        <big>
          <ul>{tester}</ul>
        </big>
        <ul>{mapperLod}</ul>
        <h2>JSON Data</h2>
        <ul>{objmapperLod}</ul>

        <h1>{cws}</h1>
        <h2>{filtervals}</h2>
        <h3>{filterLodvals}</h3>
      </div>
    </>
  );
};

export default Part2;
