## Handling Async Tasks with Redux.
Sending HTTP requests and similar tasks.
Reducer functions must be <ins>pure</ins>, <ins>side-effect free</ins>, <ins>synchronous functions</ins>.

### Where should side-effects and async tasks be executed?
1) Directly inside the component (e.g. useEffect()).
2) We write own "action creator" functions, Thunks. 

#### What is an 'action creator'?

When you create a slice, "createSlice", which has reducer functions. The "action creator" will be created automatically when you create a reducer function, They are going to have the same name as reducer functions. For example,
  
<img width="1340" alt="Untitled" src="https://user-images.githubusercontent.com/51529613/235847888-75f185e0-6894-4db8-a041-e497cbedd5c8.png">

#### What is Redux Thunk?
a thunk, is an action creator that not return the action object, but return another function which return the action.
