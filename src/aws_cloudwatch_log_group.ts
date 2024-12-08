import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogGroupArgs {
  kms_key_id?: string;
  retention_in_days?: number;
  skip_destroy?: boolean;
  tags?: { [key: string]: string };
}

export class aws_cloudwatch_log_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchLogGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_log_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_group_class(): string {
    return `${this.resourceType}.${this.resourceName}.log_group_class`;
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
}
