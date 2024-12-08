import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAthenaDataCatalogArgs {
  description: string;
  name: string;
  parameters: { [key: string]: string };
  tags?: { [key: string]: string };
  type: string;
}

export class aws_athena_data_catalog extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAthenaDataCatalogArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_athena_data_catalog", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parameters(): string {
    return `${this.resourceType}.${this.resourceName}.parameters`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
