import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TagArgs {
  key: string;
  resource_id: string;
  value: string;
}

export class aws_ec2_tag extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2TagArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_tag", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
