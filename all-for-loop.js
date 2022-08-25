// All the Loops (for, for-in, for-of, forEach)

var names = ["for", "Loop", "in", "Javascript"];

// Using for loop
for ( i=0; i < names.length; i++) {
    console.log( "For loop:"+" " + names[i]);
}

// Using for in loop
const person = {
    Name: 'Suwetha',
    Age: 21,
    Gender: 'Female',
    Education: 'BCA'
};
for (var key in person) {
    console.log(key +":", person[key]);
}

// Using for of loop
const countries = ['India','South Korea','Indonesia', 'Philippines'];
for (var country of countries) {
    console.log( "Country Name:"+" "+ country);
}

//  Using forEach loop
  names.forEach(function(names) {
      console.log("Using forEach:"+" "+ names);
  });