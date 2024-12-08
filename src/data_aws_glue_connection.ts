import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsGlueConnectionArgs {
  id: string;
}

export class data_aws_glue_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsGlueConnectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_glue_connection", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get catalog_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get connection_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_properties`;
  }

  get connection_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_type`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get match_criteria(): string {
    return `data.${this.resourceType}.${this.resourceName}.match_criteria`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get physical_connection_requirements(): string {
    return `data.${this.resourceType}.${this.resourceName}.physical_connection_requirements`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
