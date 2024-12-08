import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectPromptArgs {
  instance_id: string;
  name: string;
}

export class data_aws_connect_prompt extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsConnectPromptArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_prompt", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get prompt_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.prompt_id`;
  }
}
