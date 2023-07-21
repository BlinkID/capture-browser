module.exports = {
  "!(*.nolint).{js,jsx,ts,tsx}": [() => "eslint --max-warnings=0"],
  "!(*.nolint).{ts,tsx}": [
    () => "tsc-files --skipLibCheck --emitDeclarationOnly false --noEmit",
  ],
  "!(*.nolint).{js,jsx,ts,tsx,css,md}": ["prettier --write"],
};
