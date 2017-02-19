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
