import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointsmsvoicev2OptOutListArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_pinpointsmsvoicev2_opt_out_list extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsPinpointsmsvoicev2OptOutListArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_pinpointsmsvoicev2_opt_out_list", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
