import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueSchemaArgs {
  compatibility: string;
  data_format: string;
  description?: string;
  schema_definition: string;
  schema_name: string;
  tags?: { [key: string]: string };
}

export class aws_glue_schema extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlueSchemaArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_glue_schema", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get compatibility(): string {
    return `${this.resourceType}.${this.resourceName}.compatibility`;
  }

  get data_format(): string {
    return `${this.resourceType}.${this.resourceName}.data_format`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_schema_version(): string {
    return `${this.resourceType}.${this.resourceName}.latest_schema_version`;
  }

  get next_schema_version(): string {
    return `${this.resourceType}.${this.resourceName}.next_schema_version`;
  }

  get registry_arn(): string {
    return `${this.resourceType}.${this.resourceName}.registry_arn`;
  }

  get registry_name(): string {
    return `${this.resourceType}.${this.resourceName}.registry_name`;
  }

  get schema_checkpoint(): string {
    return `${this.resourceType}.${this.resourceName}.schema_checkpoint`;
  }

  get schema_definition(): string {
    return `${this.resourceType}.${this.resourceName}.schema_definition`;
  }

  get schema_name(): string {
    return `${this.resourceType}.${this.resourceName}.schema_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
