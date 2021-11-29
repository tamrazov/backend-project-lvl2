#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import getResult from '../index.js';

const program = new Command();

program
  .version('0.0.2')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<first_file> <second_file>')
  .action((firstFile, secondFile) => {
    const response = getResult(firstFile, secondFile);
    console.log(response);
  });

program.parse(process.argv);
