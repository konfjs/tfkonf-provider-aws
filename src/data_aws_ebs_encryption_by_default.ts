import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEbsEncryptionByDefaultArgsTimeouts {
  read?: string;
}

export interface DataAwsEbsEncryptionByDefaultArgs {
  timeouts?: DataAwsEbsEncryptionByDefaultArgsTimeouts;
}

export class data_aws_ebs_encryption_by_default extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEbsEncryptionByDefaultArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ebs_encryption_by_default", resourceName);
  }

  get enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
