/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const execute = require('./lib/execute')

const TEST_DIR = process.env.TEST_DIR

let cmd = []

switch (TEST_DIR) {
  case 'lint':
    cmd.push('standard')
    break
  case 'codecov':
    cmd.push('bash tools/codecov.sh')
    break
  default:
    cmd.push(`mocha "test/${TEST_DIR}/**/*Test.js"`)
}

execute(cmd, process.env, (err) => {
  if (err) {
    console.error('failed', err)
    process.exit(1)
    return
  }
  console.log('done')
})
