import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new sst.RDS(this, "RDS", {
      engine: "postgresql10.14",
      defaultDatabaseName: "acme",
      scaling: {
        autoPause: true,
      }
    });
  }
}
