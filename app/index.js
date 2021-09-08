"use strict";

const Generator = require("yeoman-generator");

module.exports = class GeneratorGolangPackages extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option("author", {
      type: String,
      desc: "Name of the author",
      required: false,
    });

    this.option("package_name", {
      type: String,
      desc: "Name of the package name",
      required: false,
    });

    this.option("package_title", {
      type: String,
      desc: "Name of the package title",
      required: false,
    });

    this.option("year", {
      type: String,
      desc: "Create at Year",
      required: false,
      defaults: new Date().getFullYear(),
    });

    this.option("package_description", {
      type: String,
      desc: "Name of the package description",
      required: false,
    });

    this.option("output", {
      type: String,
      desc: "Set the output path",
      required: false,
    });
  }

  initializing() {}

  prompting() {
    const prompts = [
      {
        name: "author",
        message: "Author Name:",
        default: this.options.author,
        when: this.options.author === undefined,
      },
      {
        name: "year",
        message: "Year:",
        default: this.options.year,
        when: this.options.year === undefined,
      },
      {
        name: "package_name",
        message: "Package Name:",
        default: this.options.package_name,
        when: this.options.package_name === undefined,
      },
      {
        name: "package_title",
        message: "Package Title:",
        default: this.options.package_title,
        when: this.options.package_title === undefined,
      },
      {
        name: "package_description",
        message: "Package Description:",
        default: this.options.package_description,
        when: this.options.package_description === undefined,
      },
      {
        name: "output",
        message: "Output Directory:",
        default: this.options.output,
        when: this.options.output === undefined,
      },
    ];

    return this.prompt(prompts).then((props) => {
      this.props = {
        author: this.options.author,
        year: this.options.year,
        package_name: this.options.package_name,
        package_title: this.options.package_title,
        package_description: this.options.package_description,
        output: this.options.output,
        ...props,
      };
    });
  }

  writing() {
    let files = [
      "gitignore",
      ".mergify.yml",
      "CODE_OF_CONDUCT.md",
      "CONTRIBUTING.md",
      "LICENSE",
      "Makefile",
      "README.md",
      "config.toml",
      "go.mod",
      "go.sum",
      "gopkg.go",
      "gopkg_test.go",
      "renovate.json",
      "bin/release.sh",
      "assets/logo.png",

      ".github/CODEOWNERS",
      ".github/dependabot.yml",
      ".github/FUNDING.yml",

      ".github/ISSUE_TEMPLATE/bug_report.md",
      ".github/ISSUE_TEMPLATE/feature_request.md",

      ".github/workflows/build.yml",
      ".github/workflows/release_pkg.yml",
    ];

    files.forEach((file) => {
      let target = file;

      if (target == "gopkg.go") {
        target = this.props.package_name + ".go";
      }

      if (target == "gopkg_test.go") {
        target = this.props.package_name + "_test.go";
      }

      if (target == "gitignore") {
        target = ".gitignore";
      }

      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(this.props.output + "/" + target),
        this.props
      );
    });
  }
};
