## Handling Async Tasks with Redux.
Sending HTTP requests and similar tasks.
Reducer functions must be <ins>pure</ins>, <ins>side-effect free</ins>, <ins>synchronous functions</ins>.

### Where should side-effects and async tasks be executed?
1) Directly inside the component (e.g. useEffect()).
2) We write own "action creator" functions, Thunks. 

#### What is an 'action creator'?

When you created a slice, "createSlice", with reducer functions. The "action creators" will be created automatically, They are going to have the same name as reducer functions. For example,
  
<img width="1340" alt="Untitled" src="https://user-images.githubusercontent.com/51529613/235847888-75f185e0-6894-4db8-a041-e497cbedd5c8.png">
