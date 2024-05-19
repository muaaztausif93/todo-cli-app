#! /usr/bin/env node
const { program } = require('commander');
const fetchData = require('./commands/fetchData');

program
  .command('fetch-list')
  .description('Fetch the first 20 even-numbered TODO items')
  .action(fetchData)

program.parse(process.argv);
