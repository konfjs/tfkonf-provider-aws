import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEbsDefaultKmsKeyArgsTimeouts {
  read?: string;
}

export interface DataAwsEbsDefaultKmsKeyArgs {
  timeouts?: DataAwsEbsDefaultKmsKeyArgsTimeouts;
}

export class data_aws_ebs_default_kms_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEbsDefaultKmsKeyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ebs_default_kms_key", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_arn`;
  }
}
