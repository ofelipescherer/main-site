const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
}

// module.exports = {
//   // // Type check TypeScript files
//   // '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

//   // // Lint & Prettify TS and JS files
//   // '**/*.(ts|tsx|js)': (filenames) => [
//   //   `npx eslint ${filenames.join(' ')}`,
//   //   `npx prettier --write ${filenames.join(' ')}`
//   // ],

//   // // Prettify only Markdown and JSON files
//   // '**/*.(md|json)': (filenames) =>
//   //   `npx prettier --write ${filenames.join(' ')}`,

//   '**/*': ['npm run lint --fix'],
//   '*.js': 'eslint --cache --fix'
// }
