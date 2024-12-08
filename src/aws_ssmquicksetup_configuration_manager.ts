import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmquicksetupConfigurationManagerArgsConfigurationDefinition {
  local_deployment_administration_role_arn?: string;
  local_deployment_execution_role_name?: string;
  parameters: { [key: string]: string };
  type: string;
}

export interface AwsSsmquicksetupConfigurationManagerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsSsmquicksetupConfigurationManagerArgs {
  name: string;
  tags?: { [key: string]: string };
  configuration_definition?: AwsSsmquicksetupConfigurationManagerArgsConfigurationDefinition[];
  timeouts?: AwsSsmquicksetupConfigurationManagerArgsTimeouts;
}

export class aws_ssmquicksetup_configuration_manager extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmquicksetupConfigurationManagerArgs) {
    const meta = {configuration_definition:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssmquicksetup_configuration_manager", resourceName);
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get manager_arn(): string {
    return `${this.resourceType}.${this.resourceName}.manager_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status_summaries(): string {
    return `${this.resourceType}.${this.resourceName}.status_summaries`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
