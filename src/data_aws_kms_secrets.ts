import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKmsSecretsArgsSecret {
  context?: { [key: string]: string };
  encryption_algorithm?: string;
  grant_tokens?: string[];
  key_id?: string;
  name: string;
  payload: string;
}

export interface DataAwsKmsSecretsArgs {
  secret: DataAwsKmsSecretsArgsSecret[];
}

export class data_aws_kms_secrets extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKmsSecretsArgs) {
    const meta = {secret:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_kms_secrets", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get plaintext(): string {
    return `data.${this.resourceType}.${this.resourceName}.plaintext`;
  }
}
