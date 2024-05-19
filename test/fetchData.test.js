const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const fetchData = require('../commands/fetchData');

const TODO_API_URL = 'https://jsonplaceholder.typicode.com/todos/';

describe('fetchData', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  test('should fetch the first 20 even-numbered TODO items', async () => {
    const todos = [];
    for (let i = 2; i <= 40; i += 2) {
      todos.push({ id: i, title: `todo ${i}`, completed: i % 4 === 0 });
    }

    todos.forEach(todo => {
      mock.onGet(`${TODO_API_URL}${todo.id}`).reply(200, todo);
    });

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await fetchData();

    todos.forEach((todo, index) => {
      expect(logSpy).toHaveBeenCalledWith(
        `${index + 1}. ${todo.title} - Completed: ${todo.completed}`
      );
      expect(logSpy).toHaveBeenCalledWith('\n');
    });

    logSpy.mockRestore();
  });

  test('should handle errors gracefully', async () => {
    mock.onGet(`${TODO_API_URL}2`).reply(500);

    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await expect(fetchData()).rejects.toThrow('Error fetching TODO list: Request failed with status code 500');

    expect(errorSpy).toHaveBeenCalledWith('Error fetching TODO list:', 'Request failed with status code 500');

    errorSpy.mockRestore();
  });
});
