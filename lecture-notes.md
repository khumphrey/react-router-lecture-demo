Walk through app
functional component
	- cleaner
	- might give you a performance boost in the NEXT version of React
		- don’t have lifecycle hooks and no state
	* Always try to use this by default and when you need a hook or state then make it smarter. You want just a few components (higher level) with state usually


- add onClick to `I want a meower` (and barkers)
 	- make a fn in the class `navigateToMeowers () {this.setState(activeView: 'cats')}

SLIDES

- wikipedia URL bar then location.hash
- in our project
	- componentDidMount
	-	in functions after setState
	- What about validation? -- move on to RR4


- `npm install react-router-dom`
- import `HashRouter as Router` and `Route`
	- Router around components that depend on url into the Router 
	- Route with path `/` render={()=><AnimalList animals={[this.state.cats, ...this.state.dogs]} views="All Animales!" />}
	- add dogs route
		- error with multiple children, so add div
	- add `exact` keyword and see fix
	- add cats
- add `Link`
	- it is a wrapper around an `a` tag that navigates WITHOUT refreshing the page
	- MUST be in router
- get rid of hash with BrowserRouter -- uses modern Browser History API
	- What if we refresh?
	- fix with *
- NotFound
	- since we don't need to pass props, use `component` instead of `render`
		- component is faster internally, and what you should lean towards
	- add Switch -- matches the first path match and stops
- Profile -- `/profile/:id`
	- render={({ match }) => {match.params.id }}
- `About` 🐅🐆🐈🐺🐩🐕
