import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAthenaNamedQueryArgs {
  name: string;
  workgroup?: string;
}

export class data_aws_athena_named_query extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsAthenaNamedQueryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_athena_named_query", resourceName);
  }

  get database(): string {
    return `data.${this.resourceType}.${this.resourceName}.database`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get querystring(): string {
    return `data.${this.resourceType}.${this.resourceName}.querystring`;
  }
}
