export default (plop) => {
  plop.setHelper("kebab-case", function (text) {
    // Use a single regex to replace uppercase letters with kebab-case
    return text
      .replace(/[A-Z]/g, (match, index) => (index > 0 ? "-" : "") + match.toLowerCase())
      .replace(/^-+|-+$/g, ""); // Clean up any leading or trailing hyphens
  });
  

  plop.setGenerator("component", {
    description:
      "Generate a React component with Emotion styles and a test file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "app/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
        templateFile: "plop-templates/styles.hbs",
      },
      {
        type: "add",
        path: "tests/components/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/test.hbs",
      },
    ],
  });
};
