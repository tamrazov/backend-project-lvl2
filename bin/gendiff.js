#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import genDiff from '../index.js';

const program = new Command();

program
  .version('0.0.2')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((name, options) => {
    const [second, first] = options.rawArgs.reverse();
    const response = genDiff(first, second);
    console.log(response);
  });

program.parse(process.argv);
