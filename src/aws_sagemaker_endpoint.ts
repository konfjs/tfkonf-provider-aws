import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerEndpointArgsDeploymentConfigAutoRollbackConfigurationAlarms {
  alarm_name: string;
}

export interface AwsSagemakerEndpointArgsDeploymentConfigAutoRollbackConfiguration {
  alarms?: AwsSagemakerEndpointArgsDeploymentConfigAutoRollbackConfigurationAlarms[];
}

export interface AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize {
  type: string;
  value: number;
}

export interface AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize {
  type: string;
  value: number;
}

export interface AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration {
  type: string;
  wait_interval_in_seconds: number;
  canary_size?: AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
  linear_step_size?: AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
}

export interface AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicy {
  maximum_execution_timeout_in_seconds?: number;
  termination_wait_in_seconds?: number;
  traffic_routing_configuration: AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
}

export interface AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
  type: string;
  value: number;
}

export interface AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
  type: string;
  value: number;
}

export interface AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicy {
  maximum_execution_timeout_in_seconds?: number;
  wait_interval_in_seconds: number;
  maximum_batch_size: AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicyMaximumBatchSize;
  rollback_maximum_batch_size?: AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;
}

export interface AwsSagemakerEndpointArgsDeploymentConfig {
  auto_rollback_configuration?: AwsSagemakerEndpointArgsDeploymentConfigAutoRollbackConfiguration;
  blue_green_update_policy?: AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicy;
  rolling_update_policy?: AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicy;
}

export interface AwsSagemakerEndpointArgs {
  endpoint_config_name: string;
  tags?: { [key: string]: string };
  deployment_config?: AwsSagemakerEndpointArgsDeploymentConfig;
}

export class aws_sagemaker_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerEndpointArgs) {
    const meta = {deployment_config:{isBlock:true,auto_rollback_configuration:{isBlock:true,alarms:{isBlock:true}},blue_green_update_policy:{isBlock:true,traffic_routing_configuration:{isBlock:true,canary_size:{isBlock:true},linear_step_size:{isBlock:true}}},rolling_update_policy:{isBlock:true,maximum_batch_size:{isBlock:true},rollback_maximum_batch_size:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_endpoint", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint_config_name(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_config_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
