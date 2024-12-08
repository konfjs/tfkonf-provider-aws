import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAcmpcaPolicyArgs {
  policy: string;
  resource_arn: string;
}

export class aws_acmpca_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAcmpcaPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_acmpca_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
