import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSecretsmanagerSecretsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsSecretsmanagerSecretsArgs {
  filter?: DataAwsSecretsmanagerSecretsArgsFilter[];
}

export class data_aws_secretsmanager_secrets extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSecretsmanagerSecretsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_secretsmanager_secrets", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }
}
