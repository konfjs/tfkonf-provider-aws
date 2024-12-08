import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSwfDomainArgs {
  description?: string;
  tags?: { [key: string]: string };
  workflow_execution_retention_period_in_days: string;
}

export class aws_swf_domain extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSwfDomainArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_swf_domain", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get workflow_execution_retention_period_in_days(): string {
    return `${this.resourceType}.${this.resourceName}.workflow_execution_retention_period_in_days`;
  }
}
