import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDynamodbTableItemArgs {
  expression_attribute_names?: { [key: string]: string };
  key: string;
  projection_expression?: string;
  table_name: string;
}

export class data_aws_dynamodb_table_item extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDynamodbTableItemArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dynamodb_table_item", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get item(): string {
    return `data.${this.resourceType}.${this.resourceName}.item`;
  }

  get key(): string {
    return `data.${this.resourceType}.${this.resourceName}.key`;
  }

  get table_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.table_name`;
  }
}
