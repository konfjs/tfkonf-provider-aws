import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDirectoryServiceLogSubscriptionArgs {
  directory_id: string;
  log_group_name: string;
}

export class aws_directory_service_log_subscription extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDirectoryServiceLogSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_directory_service_log_subscription", resourceName);
  }

  get directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.log_group_name`;
  }
}
