#!/usr/bin/env node

const path = require('path');
const Copier = require('../dist/index');
const { exec } = require('../lib/utils/fs-promises');

const fromFolder = path.join(
  process.cwd(),
  'node_modules',
  '@mihanizm56/redux-core-modules',
  'execute',
);

const argumentPath = process.argv[2];

const toFolder = path.join(process.cwd(), argumentPath);

const arrayToCopy = [{ from: fromFolder, to: toFolder }];

const copierStatic = new Copier({ arrayToCopy });

const runPackage = async () => {
  try {
    await exec('npm i @mihanizm56/redux-core-modules');

    copierStatic.activate();
  } catch (error) {
    console.log('error when executing the package', error); // eslint-disable-line
  }
};

runPackage();
