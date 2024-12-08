import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecretsmanagerSecretRotationArgsRotationRules {
  automatically_after_days?: number;
  duration?: string;
  schedule_expression?: string;
}

export interface AwsSecretsmanagerSecretRotationArgs {
  rotate_immediately?: boolean;
  rotation_lambda_arn?: string;
  secret_id: string;
  rotation_rules: AwsSecretsmanagerSecretRotationArgsRotationRules;
}

export class aws_secretsmanager_secret_rotation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecretsmanagerSecretRotationArgs) {
    const meta = {rotation_rules:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_secretsmanager_secret_rotation", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get rotation_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.rotation_enabled`;
  }

  get secret_id(): string {
    return `${this.resourceType}.${this.resourceName}.secret_id`;
  }
}
