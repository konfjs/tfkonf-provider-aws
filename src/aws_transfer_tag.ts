import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferTagArgs {
  key: string;
  resource_arn: string;
  value: string;
}

export class aws_transfer_tag extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsTransferTagArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_transfer_tag", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
