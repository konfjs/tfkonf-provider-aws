import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigConfigurationRecorderStatusArgs {
  is_enabled: boolean;
  name: string;
}

export class aws_config_configuration_recorder_status extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConfigConfigurationRecorderStatusArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_config_configuration_recorder_status", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get is_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.is_enabled`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
