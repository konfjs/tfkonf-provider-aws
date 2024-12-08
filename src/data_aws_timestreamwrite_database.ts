import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsTimestreamwriteDatabaseArgs {
  name: string;
}

export class data_aws_timestreamwrite_database extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsTimestreamwriteDatabaseArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_timestreamwrite_database", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_time`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get last_updated_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get table_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.table_count`;
  }
}
