import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigRemediationConfigurationArgsExecutionControlsSsmControls {
  concurrent_execution_rate_percentage?: number;
  error_percentage?: number;
}

export interface AwsConfigRemediationConfigurationArgsExecutionControls {
  ssm_controls?: AwsConfigRemediationConfigurationArgsExecutionControlsSsmControls;
}

export interface AwsConfigRemediationConfigurationArgsParameter {
  name: string;
  resource_value?: string;
  static_value?: string;
}

export interface AwsConfigRemediationConfigurationArgs {
  automatic?: boolean;
  config_rule_name: string;
  maximum_automatic_attempts?: number;
  resource_type?: string;
  retry_attempt_seconds?: number;
  target_id: string;
  target_type: string;
  target_version?: string;
  execution_controls?: AwsConfigRemediationConfigurationArgsExecutionControls;
  parameter?: AwsConfigRemediationConfigurationArgsParameter[];
}

export class aws_config_remediation_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConfigRemediationConfigurationArgs) {
    const meta = {execution_controls:{isBlock:true,ssm_controls:{isBlock:true}},parameter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_config_remediation_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get config_rule_name(): string {
    return `${this.resourceType}.${this.resourceName}.config_rule_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get target_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_id`;
  }

  get target_type(): string {
    return `${this.resourceType}.${this.resourceName}.target_type`;
  }
}
