import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigRetentionConfigurationArgs {
  retention_period_in_days: number;
}

export class aws_config_retention_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConfigRetentionConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_config_retention_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get retention_period_in_days(): string {
    return `${this.resourceType}.${this.resourceName}.retention_period_in_days`;
  }
}
