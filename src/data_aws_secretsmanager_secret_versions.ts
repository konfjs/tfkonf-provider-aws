import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSecretsmanagerSecretVersionsArgs {
  include_deprecated?: boolean;
  secret_id: string;
}

export class data_aws_secretsmanager_secret_versions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSecretsmanagerSecretVersionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_secretsmanager_secret_versions", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get secret_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_id`;
  }

  get versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.versions`;
  }
}
