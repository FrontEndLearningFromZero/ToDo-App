# ToDo-App

Requirements:
- Use React
- Use Node Js
- Create API for showing, creating, updating, deleting
- Use mySQL
- Create fake data for front-end

# Model instance:
const Todo = function (todo) {
  this.name = todo.name;
  this.description = todo.description;
  this.status = todo.status; // 0: delete, 1: active, 2: complete 
};


Examples:
- https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/
- https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks

Refer:
- https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
- https://www.digitalocean.com/community/tutorial-series/how-to-code-in-javascript

# UI Reference:
https://www.figma.com/community/file/1050122330859830585
https://www.figma.com/file/bWisWYpESnl2sJiwmJKUgh/To-Do-List-App-UI---FE?type=design&t=twVxPgqMpQsgiNDp-6

# useEffect: cannot compare 2 objs or arrays
https://codedamn.com/news/javascript/compare-2-arrays-javascript
https://www.30secondsofcode.org/js/s/array-comparison/

# Tailwind
https://dev.to/joserfelix/6-tips-for-tailwind-css-development-with-resources-33i4
https://al-az.me/blog/clsx-tailwind-template-literal

# Relationship
https://dev.to/elhamnajeebullah/mysql-how-to-create-one-to-many-relationship-4gph

# Custom Hooks

# Clone a specific directory in repo
https://www.baeldung.com/ops/git-clone-subdirectory

## Remote Localhost with Ngrok
Download and install ngrok https://dashboard.ngrok.com/get-started/setup/
Run this command to start ngrok server along with localhost app
```console
ngrok http --domain=genuinely-sensible-dinosaur.ngrok-free.app --config ngrok.yml 8080
```

# Access to app on another device
https://stackoverflow.com/questions/47412363/how-to-open-a-create-react-app-from-another-computer-connected-to-the-same-netwo