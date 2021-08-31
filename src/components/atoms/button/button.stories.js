import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import "@storybook/addon-notes/register-panel";
import notes from "./readme.md";
import reactNotes from "./react.md";
import angularNotes from "./angular.md";
export default {
  title: "Atoms/Button",
  parameters: {
    notes: { Documentacion: notes, "Uso en React": reactNotes, "Uso en Angular": angularNotes },
  },
  decorators: [withKnobs],
};

export const Button = () =>
  `<pichincha-button color="${select(
    "Color",
    ["primary", "secondary", "tertiary", "complementary", "destructive"],
    "primary"
  )}" size="${select(
    "Size",
    ["medium", "small", "large", "extra-large"],
    "medium"
  )}"
  disabled=${boolean("disabled", false)}
  loading=${boolean("loading", false)}
  >
            texto
  </pichincha-button>`;
