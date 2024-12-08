import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerDefaultAutoScalingConfigurationVersionArgs {
  auto_scaling_configuration_arn: string;
}

export class aws_apprunner_default_auto_scaling_configuration_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApprunnerDefaultAutoScalingConfigurationVersionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apprunner_default_auto_scaling_configuration_version", resourceName);
  }

  get auto_scaling_configuration_arn(): string {
    return `${this.resourceType}.${this.resourceName}.auto_scaling_configuration_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
