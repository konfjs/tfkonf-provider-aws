import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDynamodbTableArgsServerSideEncryption {
}

export interface DataAwsDynamodbTableArgs {
  name: string;
  server_side_encryption?: DataAwsDynamodbTableArgsServerSideEncryption;
}

export class data_aws_dynamodb_table extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDynamodbTableArgs) {
    const meta = {server_side_encryption:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_dynamodb_table", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get attribute(): string {
    return `data.${this.resourceType}.${this.resourceName}.attribute`;
  }

  get billing_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.billing_mode`;
  }

  get deletion_protection_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection_enabled`;
  }

  get global_secondary_index(): string {
    return `data.${this.resourceType}.${this.resourceName}.global_secondary_index`;
  }

  get hash_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.hash_key`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get local_secondary_index(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_secondary_index`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get point_in_time_recovery(): string {
    return `data.${this.resourceType}.${this.resourceName}.point_in_time_recovery`;
  }

  get range_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.range_key`;
  }

  get read_capacity(): string {
    return `data.${this.resourceType}.${this.resourceName}.read_capacity`;
  }

  get replica(): string {
    return `data.${this.resourceType}.${this.resourceName}.replica`;
  }

  get stream_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.stream_arn`;
  }

  get stream_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.stream_enabled`;
  }

  get stream_label(): string {
    return `data.${this.resourceType}.${this.resourceName}.stream_label`;
  }

  get stream_view_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.stream_view_type`;
  }

  get table_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.table_class`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get ttl(): string {
    return `data.${this.resourceType}.${this.resourceName}.ttl`;
  }

  get write_capacity(): string {
    return `data.${this.resourceType}.${this.resourceName}.write_capacity`;
  }
}
