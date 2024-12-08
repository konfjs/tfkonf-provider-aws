import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGluePartitionIndexArgsPartitionIndex {
  index_name?: string;
  keys?: string[];
}

export interface AwsGluePartitionIndexArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsGluePartitionIndexArgs {
  database_name: string;
  table_name: string;
  partition_index: AwsGluePartitionIndexArgsPartitionIndex;
  timeouts?: AwsGluePartitionIndexArgsTimeouts;
}

export class aws_glue_partition_index extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGluePartitionIndexArgs) {
    const meta = {partition_index:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_partition_index", resourceName);
  }

  get catalog_id(): string {
    return `${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get table_name(): string {
    return `${this.resourceType}.${this.resourceName}.table_name`;
  }
}
