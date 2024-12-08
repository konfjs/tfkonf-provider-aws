import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbTagArgs {
  key: string;
  resource_arn: string;
  value: string;
}

export class aws_dynamodb_tag extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDynamodbTagArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dynamodb_tag", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
