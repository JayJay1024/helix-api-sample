import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://apollo-test.helixbridge.app/graphql",
  // documents: "src/**/*.tsx",
  documents: "src/config/graphql-documents.ts",
  generates: {
    "src/gql/": {
      preset: "client",
    },
  },
};

export default config;
