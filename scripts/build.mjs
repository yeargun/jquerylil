import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import {buildPackage} from './compiler-package.mjs'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
await buildPackage({root, profiles:[{name:'public',config:'lilscript.toml'}],
  aliases:{'jquery.raw.js':'jquery.esm.js','jquery.impl.js':'jquery.esm.js'},
  assets:[{source:'types/jquery.d.ts',destination:'jquery.d.ts'}],
})
