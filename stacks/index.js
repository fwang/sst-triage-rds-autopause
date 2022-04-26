import MyStack from "./MyStack";

export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  new MyStack(app, "my-stack");
}
