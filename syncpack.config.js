// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  sortFirst: [
    "name",
    "description",
    "homepage",
    "repository",
    "private",
    "version",
    "author",
    "scripts",
    "type",
    "main",
    "module",
    "types",
    "exports",
    "files",
  ],
  dependencyTypes: ["!local"],
};

module.exports = config;
