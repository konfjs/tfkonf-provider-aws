import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppconfigDeploymentArgs {
  application_id: string;
  configuration_profile_id: string;
  configuration_version: string;
  deployment_strategy_id: string;
  description?: string;
  environment_id: string;
  kms_key_identifier?: string;
  tags?: { [key: string]: string };
}

export class aws_appconfig_deployment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppconfigDeploymentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appconfig_deployment", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_profile_id`;
  }

  get configuration_version(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_version`;
  }

  get deployment_number(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_number`;
  }

  get deployment_strategy_id(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_strategy_id`;
  }

  get environment_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
