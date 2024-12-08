import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbContributorInsightsArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDynamodbContributorInsightsArgs {
  index_name?: string;
  table_name: string;
  timeouts?: AwsDynamodbContributorInsightsArgsTimeouts;
}

export class aws_dynamodb_contributor_insights extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDynamodbContributorInsightsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dynamodb_contributor_insights", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get table_name(): string {
    return `${this.resourceType}.${this.resourceName}.table_name`;
  }
}
