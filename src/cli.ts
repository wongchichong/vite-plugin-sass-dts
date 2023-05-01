import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

// import { Aliases, NAME_FORMATS } from "./sass"
// import { EXPORT_TYPES, QUOTE_TYPES, LOG_LEVELS } from "./typescript"
import { main } from './main'
import type { CSS, FinalConfig, PluginOptions } from './type'
// import { IMPLEMENTATIONS } from "./implementations"

const { _: patterns, ...rest } = yargs(hideBin(process.argv))
  .usage(
    'Generate .scss.d.ts from SCSS *.module.scss files.\nUsage: $0 <glob pattern> [options]'
  )
  .example('$0 src', 'All .scss files at any level in the src directory')
  .example(
    '$0 src/**/*.scss',
    'All .scss files at any level in the src directory'
  )
  // .example(
  //     "$0 src/**/*.scss --watch",
  //     "Watch all .scss files at any level in the src directory that are added or changed"
  // )
  // .example(
  //     "$0 src/**/*.scss --includePaths src/core src/variables",
  //     'Search the "core" and "variables" directory when resolving imports'
  // )
  // .example(
  //     "$0 src/**/*.scss --aliases.~name variables",
  //     'Replace all imports for "~name" with "variables"'
  // )
  // .example(
  //     "$0 src/**/*.scss --aliasPrefixes.~ ./node_modules/",
  //     'Replace the "~" prefix with "./node_modules/" for all imports beginning with "~"'
  // )
  // .example(
  //     "$0 src/**/*.scss --ignore **/secret.scss",
  //     'Ignore any file names "secret.scss"'
  // )
  // .example(
  //     "$0 src/**/*.scss --implementation sass",
  //     "Use the Dart SASS package"
  // )
  // .example(
  //     "$0 src/**/*.scss -e default --quoteType double",
  //     "Use double quotes around class name definitions rather than single quotes."
  // )
  // .example("$0 src/**/*.scss --logLevel error", "Output only errors")
  .demandCommand(1)
  // enabledMode
  // global : global?: { generate: boolean; outFile: string }
  // typeName: { replacement: string | ((fileName: string) => string) }
  // oneFile
  .option('enabledMode', {
    string: true,
    type: 'array',
    choices: ['development', 'production'],
    describe: `Create d.ts files for css modules of file extension css, sass, scss included in the project at build time.

Valid enumerations 'development' and 'production'. By default it is enabled only for development.
We recommend that you turn off the flag once you have created the d.ts file, as it will take a long time to build. (default development)
--enabledMode=development --enabledMode=production
for both
        `,
  })
  .option('global.generate', {
    type: 'boolean',
    describe:
      'Outputs the common style set in additionalData of preprocessorOptions as a global type definition file.',
  })
  .option('global.outFile', {
    type: 'boolean',
    describe:
      'Specify the file that outputs the global common style with an absolute path.Relative paths will be supported.',
  })
  .option('typeName.replacement', {
    string: true,
    describe: 'The name format that should be used to transform class names.',
  })
  .option('oneFile', {
    type: 'boolean',
    describe: 'Output to one file',
  })
  .parseSync()

console.log(patterns, rest)

// let cacheConfig: FinalConfig
// const enabledMode = option.enabledMode || ['development']
// return {
//     name: 'vite-plugin-sass-dts',
//     async configResolved(config) {
//         const prettierOptions = (await resolveConfig(config.root)) || {}
//         cacheConfig = {
//             ...config,
//             prettierOptions: { ...prettierOptions, filepath: '*.d.ts' },
//         }
//     },

main(
  patterns[0] as string,
  { root: 'D:/Developments/FengShui/su-yen/packages/core-ex/src/' } as any,
  rest as any
)
