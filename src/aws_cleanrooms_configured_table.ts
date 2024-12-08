import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCleanroomsConfiguredTableArgsTableReference {
  database_name: string;
  table_name: string;
}

export interface AwsCleanroomsConfiguredTableArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCleanroomsConfiguredTableArgs {
  allowed_columns: string[];
  analysis_method: string;
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  table_reference: AwsCleanroomsConfiguredTableArgsTableReference;
  timeouts?: AwsCleanroomsConfiguredTableArgsTimeouts;
}

export class aws_cleanrooms_configured_table extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCleanroomsConfiguredTableArgs) {
    const meta = {table_reference:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cleanrooms_configured_table", resourceName);
  }

  get allowed_columns(): string {
    return `${this.resourceType}.${this.resourceName}.allowed_columns`;
  }

  get analysis_method(): string {
    return `${this.resourceType}.${this.resourceName}.analysis_method`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
