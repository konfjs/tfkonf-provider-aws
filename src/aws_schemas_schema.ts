import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSchemasSchemaArgs {
  content: string;
  description?: string;
  name: string;
  registry_name: string;
  tags?: { [key: string]: string };
  type: string;
}

export class aws_schemas_schema extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSchemasSchemaArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_schemas_schema", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get content(): string {
    return `${this.resourceType}.${this.resourceName}.content`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get registry_name(): string {
    return `${this.resourceType}.${this.resourceName}.registry_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }

  get version_created_date(): string {
    return `${this.resourceType}.${this.resourceName}.version_created_date`;
  }
}
