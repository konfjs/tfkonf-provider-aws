import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsWafv2IpSetArgs {
  name: string;
  scope: string;
}

export class data_aws_wafv2_ip_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsWafv2IpSetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_wafv2_ip_set", resourceName);
  }

  get addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.addresses`;
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

  get ip_address_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address_version`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get scope(): string {
    return `data.${this.resourceType}.${this.resourceName}.scope`;
  }
}
