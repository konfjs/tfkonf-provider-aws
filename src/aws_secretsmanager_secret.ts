import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecretsmanagerSecretArgsReplica {
  region: string;
}

export interface AwsSecretsmanagerSecretArgs {
  description?: string;
  force_overwrite_replica_secret?: boolean;
  kms_key_id?: string;
  recovery_window_in_days?: number;
  tags?: { [key: string]: string };
  replica?: AwsSecretsmanagerSecretArgsReplica[];
}

export class aws_secretsmanager_secret extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecretsmanagerSecretArgs) {
    const meta = {replica:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_secretsmanager_secret", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
