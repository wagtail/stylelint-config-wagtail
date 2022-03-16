const fs = require('fs');
const stylelint = require('stylelint');

const config = require('..');

describe('flags no warnings with valid css', () => {
  const code = fs.readFileSync('./__tests__/scss-valid.scss', 'utf-8');

  let result;

  beforeEach(() => {
    result = stylelint.lint({ code, config });
  });

  it('did not error', (done) => {
    expect.assertions(1);

    result.then((data) => {
      expect(data.errored).toBeFalsy();

      done();
    });
  });

  it('flags no warnings', (done) => {
    expect.assertions(1);

    result.then((data) => {
      expect(data.results[0].warnings).toHaveLength(0);

      done();
    });
  });
});

describe('flags warnings with invalid css', () => {
  const code = fs.readFileSync('./__tests__/scss-invalid.scss', 'utf-8');

  let result;

  beforeEach(() => {
    result = stylelint.lint({ code, config });
  });

  it('did error', (done) => {
    expect.assertions(2);

    result.then((data) => {
      expect(data.errored).toBeTruthy();

      // output unique error names to a snapshot
      expect([
        ...new Set(data.results[0].warnings.map(({ rule }) => rule)),
      ]).toMatchSnapshot();

      done();
    });
  });
});
