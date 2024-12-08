import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}

export class aws_dynamodb_resource_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDynamodbResourcePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dynamodb_resource_policy", resourceName);
  }

  get confirm_remove_self_resource_access(): string {
    return `${this.resourceType}.${this.resourceName}.confirm_remove_self_resource_access`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.revision_id`;
  }
}
