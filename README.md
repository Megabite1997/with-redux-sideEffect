## Handling Async Tasks with Redux.
Sending HTTP requests and similar tasks.
Reducer functions must be pure, side-effect free, synchronous functions.

### Where should side-effects and async tasks be executed?
1) Directly inside the component (e.g. useEffect())
2) We write own "action creator" functions, 

### The Redux DevTools
