import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsTimestreamwriteTableArgs {
  database_name: string;
  name: string;
}

export class data_aws_timestreamwrite_table extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsTimestreamwriteTableArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_timestreamwrite_table", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get database_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.database_name`;
  }

  get last_updated_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get magnetic_store_write_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.magnetic_store_write_properties`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get retention_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.retention_properties`;
  }

  get schema(): string {
    return `data.${this.resourceType}.${this.resourceName}.schema`;
  }

  get table_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.table_status`;
  }
}
