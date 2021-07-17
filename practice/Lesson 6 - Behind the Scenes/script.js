'use strict';

function calcAge(birthYear) {
  const age = 2021 - birthYear;
  console.log(firstName); // firstName is a global variable, so we can reference it.

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const lastName = 'Smith';
      const str = `${firstName} ${lastName}, you are a millenial.`;
      console.log(str); // the lastName variable from within this block scope will be called
      output = 'Variables can be re-assigned from within child scopes.';
    }
    console.log(output); // Variables can be re-assigned from within child scopes.
  }
  //   console.log(str); // 'str' will not be accessible because it is block-scoped.
  printAge();
  return age;
}

const firstName = 'Ryan';
const lastName = 'Asta';
calcAge(1985);
// console.log(age); // outside of the function scope we CANNOT access the 'age' variable
