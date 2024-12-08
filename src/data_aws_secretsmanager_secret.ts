import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSecretsmanagerSecretArgs {
}

export class data_aws_secretsmanager_secret extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSecretsmanagerSecretArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_secretsmanager_secret", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get last_changed_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_changed_date`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
