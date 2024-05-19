const axios = require('axios');

const TODO_API_URL = 'https://jsonplaceholder.typicode.com/todos/';

async function fetchData() {
  const todoPromises = [];

  for (let i = 2; i <= 40; i += 2) {
    const response = axios.get(`${TODO_API_URL}${i}`);
    todoPromises.push(response);
  }

  try {
    const responses = await Promise.all(todoPromises);

    const todos = responses.map(response => response.data).map(todo => ({
      title: todo.title,
      completed: todo.completed,
    }));

    todos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.title} - Completed: ${todo.completed}`);
      console.log('\n')
    });
  } catch (error) {
    console.error('Error fetching TODO list:', error.message);
    throw new Error('Error fetching TODO list: ' + error.message);
  }
}

module.exports = fetchData;
