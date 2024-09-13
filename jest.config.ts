module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      // ts-jest configuration options
    }],
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json", // Use your new Jest-specific TypeScript config
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["node_modules/(?!.*.mjs$)"],
};
