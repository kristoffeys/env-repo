#!/usr/bin/env node
import { Command } from 'commander';
import envWizard from './index.js';
const program = new Command();

program
    .option('-s, --source <source>', 'source file', '.env.example')
    .option('-t, --target <target>', 'target file', '.env');

program.parse(process.argv);

const options = program.opts();

envWizard(options.source, options.target);
