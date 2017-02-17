// Functional Component -
//
// Class Component - used when you want internal record keeping.
//   - ie when you have an input
//
// State - Plain javascript object used to record and react to user events
//   - whenever a component's state is changed it rerenders
//   - all of its children rerender as well

//Controlled Component - has its value maintained by the state

YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
  this.setState({ videos }) //when key and property are same variable name, you can format like this
})

// It's the same as this.setState({videos: videos})

//Rare to pass callbacks more than a couple down

//Lodash - library for throttling, etc.
