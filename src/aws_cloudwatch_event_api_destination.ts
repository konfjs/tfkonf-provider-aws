import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventApiDestinationArgs {
  connection_arn: string;
  description?: string;
  http_method: string;
  invocation_endpoint: string;
  invocation_rate_limit_per_second?: number;
  name: string;
}

export class aws_cloudwatch_event_api_destination extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchEventApiDestinationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_event_api_destination", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get connection_arn(): string {
    return `${this.resourceType}.${this.resourceName}.connection_arn`;
  }

  get http_method(): string {
    return `${this.resourceType}.${this.resourceName}.http_method`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invocation_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.invocation_endpoint`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
