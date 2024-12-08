import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafv2IpSetArgs {
  addresses?: string[];
  description?: string;
  ip_address_version: string;
  name: string;
  scope: string;
  tags?: { [key: string]: string };
}

export class aws_wafv2_ip_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafv2IpSetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_wafv2_ip_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address_version(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address_version`;
  }

  get lock_token(): string {
    return `${this.resourceType}.${this.resourceName}.lock_token`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get scope(): string {
    return `${this.resourceType}.${this.resourceName}.scope`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
