import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSecretsmanagerRandomPasswordArgs {
  exclude_characters?: string;
  exclude_lowercase?: boolean;
  exclude_numbers?: boolean;
  exclude_punctuation?: boolean;
  exclude_uppercase?: boolean;
  include_space?: boolean;
  password_length?: number;
  require_each_included_type?: boolean;
}

export class data_aws_secretsmanager_random_password extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSecretsmanagerRandomPasswordArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_secretsmanager_random_password", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get random_password(): string {
    return `data.${this.resourceType}.${this.resourceName}.random_password`;
  }
}
