#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import getResult from '../index.js';

const program = new Command();

program
  .version('0.0.2')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<first_file> <second_file>')
  .action((firstFile, secondFile) => {
    const result = getResult(firstFile, secondFile, program.opts().format);
    console.log(result);
  });

program.parse(process.argv);
