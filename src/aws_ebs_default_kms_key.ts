import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsDefaultKmsKeyArgs {
  key_arn: string;
}

export class aws_ebs_default_kms_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEbsDefaultKmsKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ebs_default_kms_key", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.key_arn`;
  }
}
