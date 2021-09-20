#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';

const program = new Command();
program
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')

program.parse(process.argv);

const options = program.opts();
if (options.version) console.log('1.0.0');
if (options.help) console.log(`
  Usage: gendiff [options]

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -h, --help           output usage information
`)
