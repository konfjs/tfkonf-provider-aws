import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogDestinationArgs {
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  target_arn: string;
}

export class aws_cloudwatch_log_destination extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchLogDestinationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_log_destination", resourceName);
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

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_arn`;
  }
}
