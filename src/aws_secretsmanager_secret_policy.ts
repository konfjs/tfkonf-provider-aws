import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecretsmanagerSecretPolicyArgs {
  block_public_policy?: boolean;
  policy: string;
  secret_arn: string;
}

export class aws_secretsmanager_secret_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecretsmanagerSecretPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_secretsmanager_secret_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get secret_arn(): string {
    return `${this.resourceType}.${this.resourceName}.secret_arn`;
  }
}
