// Compatibility shim: framer-motion v12 exported a `Variants` type that v14
// removed. fancy components were written against v12, so provide the type here
// (it is only used in type positions, never at runtime).
export type Variants = Record<string, any>;