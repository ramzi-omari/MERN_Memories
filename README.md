# Full Stack MERN Memories

## Backend SETUP

in server folder:

- npm init -y to create an empty package.json
- npm i body-parser cors express mongoose nodemon
- add ` "type": "module", "scripts": { "start": "nodemon index.js" },` to package.json
- import express bodyParser mongoose cors in index.js

connect to DB
create mongodb cluster

## Frontend SETUP

npm i axios moment react-file-base64 redux redux-thunk

> NB: **set the state using an object**: when we have a state with multiple argument: we use a **spread operator '...'** to take all the arguments of prevState withoun any change, and then change only the argument we want 'message' in this example

```js
onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
```

## to create a new action:

(update):
1- we create a route for the action
2- in Controllers we set the logic with the mongoDB database
3- we handle the states & action in the frontend components (post posts & form)
4- api/index we implement api call for the action(updatePost for ex) route
5- actions/posts to implement the action using API (step 4)
6- import the action in the frontend (for step 3)
7- update the case in reducer
8- in the 'update' we fetch the data from the updated post using (useSelector)

(delete):

- backend:
  1- create new route
  2- create deletePost function in controllers
- frontend:
  3- implement api call
  4- create action creator and send the id as payload
  5- implement delete in the **reducer**
  6- import the reducer (usedispatch) and the action in the component
  7- use dispatch(deletePost(..id)) in the component's button

  ## Deployement

  - install heroku
  - create git in server folder
  - add Procfile and initial route in server/index.js
  - add and commit and then deploy to heroku
  - change url in API index.js

# INVALIDE HOOK CALL ERROR

https://reactjs.org/warnings/invalid-hook-call-warning.html
