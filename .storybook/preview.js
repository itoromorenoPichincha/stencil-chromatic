import { addParameters } from "@storybook/html";

addParameters({
  options: {
    storySort: (a, b) => {
      console.log(a);
    },
  },
});
