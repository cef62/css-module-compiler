# CSS Modules Compiler

> Compile css-modules to static css and remove non standard code from Javascript files

This module has been created to support a real project using [css-modules](https://github.com/css-modules/css-modules), [postcss](https://github.com/postcss/postcss) and [webpack](https://webpack.github.io/) to produce a library of reusable components. The project goal is to expose a rich set of components offering an easy way for other projects to use the desired components benefiting from the [tree-shaking](https://medium.com/@roman01la/dead-code-elimination-and-tree-shaking-in-javascript-build-systems-fb8512c86edf#.krdhto4gs) offered by modern bundlers. To achieve the goal the library must expose directly `es2015` modules, without usage of transpilers and file concatenation.

For a non-visual library this is a trivial problem to solve. For a component library using `css-modules` and `postcss` plugins is a real problematic situation. The fast and dirty solution is to consume directly the library source code from the consumer project, this approach bring several drawbacks: the consumer project must knows specific details on how to compile the library and must have all the library de-dependencies installed. It can be done but in the end is really better search for a clear separation between library and final project.
The ideal solution is to compile the `css-modules` and consume the `es2015` modules without css imports. Currently there are really few tools that compile `css-module` extracting and decoupling them from the Javascript modules and none of this tool allows the flexibility we want.

## What css-module-compiler can do for you

The compiler is a small autonomous node module that can be used programmatically from Javascript or directly from the CLI. To use the module is enough to invoke it passing a source folder, the folder will be traversed and all the css files will be compiled as `css-modules`, all the generated css files will be merged, deduped and optimized in a single css file. All the `es2015` modules will be checked using an AST parser and all the `css` import declaration will be substituted with a static object containing the generated css classnames.
The compile command accepts several options: postcss plugins to be used when compiling css files, a blacklist of patterns used to avoid compilation of non `css-modules` files, a target folder to duplicate the source and avoid changing the original sources and more.
