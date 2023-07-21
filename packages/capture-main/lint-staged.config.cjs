module.exports = {
  "*.{js,cjs,mjs,jsx,ts,mts,tsx}": [() => "eslint --max-warnings=0"],
  "*.{ts,mts,tsx}": [
    () => "tsc --skipLibCheck --emitDeclarationOnly false --noEmit",
  ],
  "*.{js,cjs,mjs,jsx,ts,mts,tsx,css,md}": ["prettier --write"],
};
