<p align="center">
    <img src="https://raw.githubusercontent.com/clivern/generator-gopkg/main/app/templates/assets/logo.png?v=1.0.7" width="110" />
    <p align="center">Yeoman Generator for Golang Packages</p>
    <p align="center">
        <a href="https://www.npmjs.com/package/generator-gopkg">
            <img src="https://img.shields.io/badge/Version-1.0.7-cyan.svg">
        </a>
        <a href="https://github.com/clivern/generator-gopkg/blob/master/LICENSE">
            <img src="https://img.shields.io/badge/LICENSE-MIT-pink.svg">
        </a>
    </p>
</p>

## Documentation

#### Usage

Install Yeoman

```zsh
$ npm install -g yo
```

Install with NPM

```zsh
$ npm install generator-gopkg

$ yo gopkg

? Author Name: clivern
? Package Name: helmet
? Package Title: Helmet
? Package Description: A standard library for microservices.
? Output Directory: helmet
   create helmet/.gitignore
   create helmet/.mergify.yml
   create helmet/CODE_OF_CONDUCT.md
   create helmet/CONTRIBUTING.md
   create helmet/LICENSE
   create helmet/Makefile
   create helmet/README.md
   create helmet/config.toml
   create helmet/go.mod
   create helmet/go.sum
   create helmet/helmet.go
   create helmet/helmet_test.go
   create helmet/renovate.json
   create helmet/bin/release.sh
   create helmet/assets/logo.png
   create helmet/.github/CODEOWNERS
   create helmet/.github/dependabot.yml
   create helmet/.github/FUNDING.yml
   create helmet/.github/ISSUE_TEMPLATE/bug_report.md
   create helmet/.github/ISSUE_TEMPLATE/feature_request.md
   create helmet/.github/workflows/build.yml
   create helmet/.github/workflows/release_pkg.yml
```

Or with Yeoman

```zsh
$ yo

? 'Allo Clivern! What would you like to do? Install a generator
? Search npm for generators: generator-gopkg
```

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, generator-gopkg is maintained under the [Semantic Versioning guidelines](https://semver.org/) and release process is predictable and business-friendly.

See the [Releases section of our GitHub project](https://github.com/clivern/generator-gopkg/releases) for changelogs for each release version of generator-gopkg. It contains summaries of the most noteworthy changes made in each release.

## Bug tracker

If you have any suggestions, bug reports, or annoyances please report them to our issue tracker at https://github.com/clivern/generator-gopkg/issues

## Security Issues

If you discover a security vulnerability within generator-gopkg, please send an email to [hello@clivern.com](mailto:hello@clivern.com)

## Contributing

We are an open source, community-driven project so please feel free to join us. see the [contributing guidelines](CONTRIBUTING.md) for more details.

## License

© 2021, Clivern. Released under [MIT License](https://opensource.org/licenses/mit-license.php).

**generator-gopkg** is authored and maintained by [@Clivern](http://github.com/clivern).
