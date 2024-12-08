import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudwatchLogGroupArgs {
  name: string;
}

export class data_aws_cloudwatch_log_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudwatchLogGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudwatch_log_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get log_group_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_group_class`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get retention_in_days(): string {
    return `data.${this.resourceType}.${this.resourceName}.retention_in_days`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
