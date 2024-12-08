import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbTableReplicaArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDynamodbTableReplicaArgs {
  global_table_arn: string;
  point_in_time_recovery?: boolean;
  table_class_override?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsDynamodbTableReplicaArgsTimeouts;
}

export class aws_dynamodb_table_replica extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDynamodbTableReplicaArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dynamodb_table_replica", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get global_table_arn(): string {
    return `${this.resourceType}.${this.resourceName}.global_table_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
