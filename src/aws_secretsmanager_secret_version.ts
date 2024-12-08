import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecretsmanagerSecretVersionArgs {
  secret_binary?: string;
  secret_id: string;
  secret_string?: string;
}

export class aws_secretsmanager_secret_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecretsmanagerSecretVersionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_secretsmanager_secret_version", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get secret_id(): string {
    return `${this.resourceType}.${this.resourceName}.secret_id`;
  }

  get version_id(): string {
    return `${this.resourceType}.${this.resourceName}.version_id`;
  }

  get version_stages(): string {
    return `${this.resourceType}.${this.resourceName}.version_stages`;
  }
}
