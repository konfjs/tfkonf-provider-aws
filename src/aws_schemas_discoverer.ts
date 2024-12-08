import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSchemasDiscovererArgs {
  description?: string;
  source_arn: string;
  tags?: { [key: string]: string };
}

export class aws_schemas_discoverer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSchemasDiscovererArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_schemas_discoverer", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get source_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
