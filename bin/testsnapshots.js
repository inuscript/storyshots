#!/usr/bin/env node
var requireHijack = require('require-hijack');

const fakeReactDom = {
  render: () => {}
}

// Need to use a fake react dom until react version 15.4
// https://github.com/facebook/react/issues/7386
requireHijack.replace('react-dom').with(fakeReactDom);

require('babel-register');
require('babel-polyfill');
require('../dist/cli').run();