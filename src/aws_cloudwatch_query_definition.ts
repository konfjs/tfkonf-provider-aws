import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchQueryDefinitionArgs {
  log_group_names?: string[];
  name: string;
  query_string: string;
}

export class aws_cloudwatch_query_definition extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchQueryDefinitionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_query_definition", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get query_definition_id(): string {
    return `${this.resourceType}.${this.resourceName}.query_definition_id`;
  }

  get query_string(): string {
    return `${this.resourceType}.${this.resourceName}.query_string`;
  }
}
