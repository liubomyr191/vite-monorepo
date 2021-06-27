module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
      esbuild: {
        ...config.esbuild,
        jsxInject: `import React from 'react'`,
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          "@emotion/core",
          "@emotion/is-prop-valid",
          "@emotion/styled",
          "@mdx-js/react",
          "@storybook/addon-docs",
          "@storybook/client-api",
          "@storybook/client-logger",
          "@storybook/core",
          "@storybook/core/client",
          "@storybook/csf",
          "@storybook/react",
          "acorn-jsx",
          "acorn-walk",
          "acorn",
          "airbnb-js-shims",
          "ansi-to-html",
          "axe-core",
          "color-convert",
          "deep-object-diff",
          "doctrine",
          "doctrine",
          "emotion-theming",
          "escodegen",
          "estraverse",
          "fast-deep-equal",
          "global",
          "hoist-non-react-statics",
          "html-tags",
          "isobject",
          "jest-mock",
          "loader-utils",
          "lodash/cloneDeep",
          "lodash/isFunction",
          "lodash/isPlainObject",
          "lodash/isString",
          "lodash/mapKeys",
          "lodash/mapValues",
          "lodash/pick",
          "lodash/pickBy",
          "lodash/throttle",
          "lodash/uniq",
          "markdown-to-jsx",
          "memoizerific",
          "overlayscrollbars",
          "polished",
          "prettier/parser-babel",
          "prettier/parser-flow",
          "prettier/parser-typescript",
          "prop-types",
          "qs",
          "react-dom",
          "react-fast-compare",
          "react-textarea-autosize",
          "react",
          "refractor/core",
          "refractor/lang/bash.js",
          "refractor/lang/css.js",
          "refractor/lang/graphql.js",
          "refractor/lang/js-extras.js",
          "refractor/lang/json.js",
          "refractor/lang/jsx.js",
          "refractor/lang/markdown.js",
          "refractor/lang/markup.js",
          "refractor/lang/tsx.js",
          "refractor/lang/typescript.js",
          "refractor/lang/yaml.js",
          "regenerator-runtime/runtime.js",
          "stable",
          "store2",
          "telejson",
          "ts-dedent",
          "util-deprecate",
          "uuid-browser/v4",
          "warning",
        ],
      },
    };
  },
};
