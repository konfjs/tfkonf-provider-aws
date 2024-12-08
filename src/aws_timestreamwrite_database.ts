import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTimestreamwriteDatabaseArgs {
  database_name: string;
  tags?: { [key: string]: string };
}

export class aws_timestreamwrite_database extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsTimestreamwriteDatabaseArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_timestreamwrite_database", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get table_count(): string {
    return `${this.resourceType}.${this.resourceName}.table_count`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
