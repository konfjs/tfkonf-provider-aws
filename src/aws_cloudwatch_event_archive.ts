import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventArchiveArgs {
  description?: string;
  event_pattern?: string;
  event_source_arn: string;
  name: string;
  retention_days?: number;
}

export class aws_cloudwatch_event_archive extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchEventArchiveArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_event_archive", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get event_source_arn(): string {
    return `${this.resourceType}.${this.resourceName}.event_source_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
