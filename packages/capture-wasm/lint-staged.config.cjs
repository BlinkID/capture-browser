module.exports = {
  "*.{ts,mts,tsx}": [
    () => "tsc --skipLibCheck --emitDeclarationOnly false --noEmit",
  ],
  "*.{js,cjs,mjs,jsx,ts,mts,tsx,css,md}": ["prettier --write"],
};
