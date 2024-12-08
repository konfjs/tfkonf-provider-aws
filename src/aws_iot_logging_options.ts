import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotLoggingOptionsArgs {
  default_log_level: string;
  disable_all_logs?: boolean;
  role_arn: string;
}

export class aws_iot_logging_options extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIotLoggingOptionsArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iot_logging_options", resourceName);
  }

  get default_log_level(): string {
    return `${this.resourceType}.${this.resourceName}.default_log_level`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }
}
