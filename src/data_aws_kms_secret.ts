import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKmsSecretArgsSecret {
  context?: { [key: string]: string };
  grant_tokens?: string[];
  name: string;
  payload: string;
}

export interface DataAwsKmsSecretArgs {
  secret: DataAwsKmsSecretArgsSecret[];
}

export class data_aws_kms_secret extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKmsSecretArgs) {
    const meta = {secret:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_kms_secret", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
