const fs = require('fs');
const stylelint = require('stylelint');

const config = require('..');

const validScss = fs.readFileSync('./__tests__/scss-valid.scss', 'utf-8');
const invalidScss = fs.readFileSync('./__tests__/scss-invalid.scss', 'utf-8');

describe('flags no warnings with valid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validScss,
      config,
    });
  });

  it('did not error', () =>
    result.then((data) => expect(data.errored).toBeFalsy()));

  it('flags no warnings', () =>
    result.then((data) => expect(data.results[0].warnings).toHaveLength(0)));
});

describe('flags warnings with invalid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidScss,
      config,
    });
  });

  it('did error', () =>
    result.then((data) => expect(data.errored).toBeTruthy()));
});
