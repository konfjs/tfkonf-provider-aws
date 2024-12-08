import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerAutoScalingConfigurationVersionArgs {
  auto_scaling_configuration_name: string;
  max_concurrency?: number;
  max_size?: number;
  min_size?: number;
  tags?: { [key: string]: string };
}

export class aws_apprunner_auto_scaling_configuration_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApprunnerAutoScalingConfigurationVersionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apprunner_auto_scaling_configuration_version", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_scaling_configuration_name(): string {
    return `${this.resourceType}.${this.resourceName}.auto_scaling_configuration_name`;
  }

  get auto_scaling_configuration_revision(): string {
    return `${this.resourceType}.${this.resourceName}.auto_scaling_configuration_revision`;
  }

  get has_associated_service(): string {
    return `${this.resourceType}.${this.resourceName}.has_associated_service`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get is_default(): string {
    return `${this.resourceType}.${this.resourceName}.is_default`;
  }

  get latest(): string {
    return `${this.resourceType}.${this.resourceName}.latest`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
