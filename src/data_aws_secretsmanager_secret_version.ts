import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSecretsmanagerSecretVersionArgs {
  secret_id: string;
  version_stage?: string;
}

export class data_aws_secretsmanager_secret_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSecretsmanagerSecretVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_secretsmanager_secret_version", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get secret_binary(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_binary`;
  }

  get secret_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_id`;
  }

  get secret_string(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_string`;
  }

  get version_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_id`;
  }

  get version_stages(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_stages`;
  }
}
