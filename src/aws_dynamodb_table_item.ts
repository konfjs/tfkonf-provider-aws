import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbTableItemArgs {
  hash_key: string;
  item: string;
  range_key?: string;
  table_name: string;
}

export class aws_dynamodb_table_item extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDynamodbTableItemArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dynamodb_table_item", resourceName);
  }

  get hash_key(): string {
    return `${this.resourceType}.${this.resourceName}.hash_key`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get item(): string {
    return `${this.resourceType}.${this.resourceName}.item`;
  }

  get table_name(): string {
    return `${this.resourceType}.${this.resourceName}.table_name`;
  }
}
