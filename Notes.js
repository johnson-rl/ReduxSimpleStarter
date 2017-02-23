min = 6 + 13 + 2 + 5 + 4 + 5 + 8 + 5 + 5 + 6 + 2 + 5 + 6 + 5 + 4 + 10 + 7 + 7 + 8 + 8 + 12 + 4 + 7 + 5 + 5 + 7 + 2 + 7
sec = 49 + 26 + 35 + 33 + 39 + 16 + 2 + 4 + 50 + 29 + 38 + 43 + 50 + 23 + 25 + 12 + 37 + 51 + 28 + 51 + 37 + 31 + 09 + 45 + 31 + 7 + 25 + 2
min += Math.floor(sec/60)

console.log('minutes: ' + min + ' seconds: ' + sec%60)

///////////////
//// NOTES ////
///////////////

// reduxform takes over control of inputs, in fact it takes control of the submission of the entire form
//  -also gives rules for how a form should be set up and handled

// Redux-form object
// {
//   handleSubmit: function,
//   fields: {
//     title: {},
//     categories: {},
//     content: {}
//   }
// }


// context - passed from parent compoent to child, but not deliberate. passed automatically.
// CONTEXT SHOULD NOT BE ABUSED MIGHT BE CHANGE IN FUTURE VERSIONS
