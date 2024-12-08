import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSecretsmanagerSecretRotationArgs {
  secret_id: string;
}

export class data_aws_secretsmanager_secret_rotation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSecretsmanagerSecretRotationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_secretsmanager_secret_rotation", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get rotation_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.rotation_enabled`;
  }

  get rotation_lambda_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.rotation_lambda_arn`;
  }

  get rotation_rules(): string {
    return `data.${this.resourceType}.${this.resourceName}.rotation_rules`;
  }

  get secret_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_id`;
  }
}
