import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafv2WebAclArgs {
  name: string;
  scope: string;
}

export class data_aws_wafv2_web_acl extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsWafv2WebAclArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_wafv2_web_acl", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get scope(): string {
    return `data.${this.resourceType}.${this.resourceName}.scope`;
  }
}
