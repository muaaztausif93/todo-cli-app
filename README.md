# Todo-cli-app
Built on Node.js, Its a command line tool that consumes the first 20 even numbered TODO's in most performant way and output the title and whether it is completed or not.

- TODO at index 1 can be accessed at: https://jsonplaceholder.typicode.com/todos/1

- TODO at index 2 can be accessed at: https://jsonplaceholder.typicode.com/todos/2

## Project Setup

- Clone the repo ```git clone https://github.com/muaaztausif93/todo-cli-app.git```
- Change directory ```cd todo-cli-app```
- Install the packages ```npm install```
- Install this as a global package on your machine, run ```npm install -g```
- To run as Node.js app ```npm run start```
- To run as a CLI tool ```todos fetch-list```

## Docker Setup

- Build the docker image ```docker build -t todo-cli```
- Run the container ```docker run --name todo-cli-container todo-cli```
- Verify container logs ```docker logs todo-cli-container``` and you should see the output of the ```todos fetch-list``` command.

## Test

- Run ```npm run test```
