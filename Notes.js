// Time remaining calc
// ----------------------

// min = 5+7+9+6+8+7+13+10+10+9+6+6+9+6+10+7+7+4
// console.log(min)
// sec = 10 + 57 + 56 + 28 + 12 + 27 + 2 + 15 + 55 + 53 + 53 + 7 + 54 + 0 + 37 + 59 + 16 + 59
// console.log(sec)
// min += Math.floor(sec/60)
//
// console.log(min + " Minutes " + (sec%60) + " Second")

/////////////////
//    Notes    //
/////////////////

// Ajax Requests made by Redux...also they are complicated
//    - part of the action creator cycle
//    - uses middleware

// middleware - function that takes an action, and depending on it's type, they can modify
//  stop the action, log it, manipulate it, or let it pass through before it hits the rootReducer
//     - can have many different steps of middleware

// Packages for ajax:
//    - Axios
//    - Redux Promise - handles promises for us
//      - Pauses an action, waits for promise, then creates and passes new action once promise is resolved

// reducers are always functions

//////////////////////////////////////////////
/// Spend time studying the container files///
//////////////////////////////////////////////
