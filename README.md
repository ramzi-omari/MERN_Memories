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

# INVALIDE HOOK CALL ERROR

https://reactjs.org/warnings/invalid-hook-call-warning.html
