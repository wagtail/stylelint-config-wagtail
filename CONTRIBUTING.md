# Contribution Guidelines

We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more.

## Development

### Install

> Clone the project on your computer, and install [Node](https://nodejs.org) and [fnm](https://github.com/Schniz/fnm).

```sh
# Switch to the right version of Node.
fnm use
# Then, install all project dependencies.
npm install
```

Also take the time to integrate [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) with your code editor.

### Working on the project

> Everything mentioned in the installation process should already be done.

```sh
# Make sure you use the right node version.
fnm use
# View available commands with:
npm run
# Most used commands:
npm run test:watch
npm run lint
```

### Releasing a new version

- Make a new branch for the new release.
- Follow [stylelint’s semantic versioning policy](https://stylelint.io/about/semantic-versioning) to determine what new version to create.
- Update the [CHANGELOG](CHANGELOG.md).
- If there are breaking changes, make sure to document them separately, and add any upgrade considerations.
- Update the version number in `package.json`, following semver.
- Make sure the documentation is up-to-date (`npm run write-rules`)
- Make a PR and squash merge it.
- Tag the release commit with the version number prefixed with `v`.
- Push
- GitHub Actions is set up for [Trusted publishing for npm packages](https://docs.npmjs.com/trusted-publishers)

Done! Verify all is well in GitHub Actions / npm after the publish job ran.

As a last step, you may want to go update a project using this library to check that all is well in a fully separate environment.
