import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAthenaNamedQueryArgs {
  database: string;
  description?: string;
  name: string;
  query: string;
  workgroup?: string;
}

export class aws_athena_named_query extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAthenaNamedQueryArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_athena_named_query", resourceName);
  }

  get database(): string {
    return `${this.resourceType}.${this.resourceName}.database`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get query(): string {
    return `${this.resourceType}.${this.resourceName}.query`;
  }
}
