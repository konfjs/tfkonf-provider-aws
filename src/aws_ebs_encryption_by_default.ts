import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsEncryptionByDefaultArgs {
  enabled?: boolean;
}

export class aws_ebs_encryption_by_default extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEbsEncryptionByDefaultArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ebs_encryption_by_default", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
