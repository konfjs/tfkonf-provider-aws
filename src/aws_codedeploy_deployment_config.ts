import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodedeployDeploymentConfigArgsMinimumHealthyHosts {
  type?: string;
  value?: number;
}

export interface AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigTimeBasedCanary {
  interval?: number;
  percentage?: number;
}

export interface AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigTimeBasedLinear {
  interval?: number;
  percentage?: number;
}

export interface AwsCodedeployDeploymentConfigArgsTrafficRoutingConfig {
  type?: string;
  time_based_canary?: AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigTimeBasedCanary;
  time_based_linear?: AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigTimeBasedLinear;
}

export interface AwsCodedeployDeploymentConfigArgsZonalConfigMinimumHealthyHostsPerZone {
  type?: string;
  value?: number;
}

export interface AwsCodedeployDeploymentConfigArgsZonalConfig {
  first_zone_monitor_duration_in_seconds?: number;
  monitor_duration_in_seconds?: number;
  minimum_healthy_hosts_per_zone?: AwsCodedeployDeploymentConfigArgsZonalConfigMinimumHealthyHostsPerZone;
}

export interface AwsCodedeployDeploymentConfigArgs {
  compute_platform?: string;
  deployment_config_name: string;
  minimum_healthy_hosts?: AwsCodedeployDeploymentConfigArgsMinimumHealthyHosts;
  traffic_routing_config?: AwsCodedeployDeploymentConfigArgsTrafficRoutingConfig;
  zonal_config?: AwsCodedeployDeploymentConfigArgsZonalConfig;
}

export class aws_codedeploy_deployment_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodedeployDeploymentConfigArgs) {
    const meta = {minimum_healthy_hosts:{isBlock:true},traffic_routing_config:{isBlock:true,time_based_canary:{isBlock:true},time_based_linear:{isBlock:true}},zonal_config:{isBlock:true,minimum_healthy_hosts_per_zone:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_codedeploy_deployment_config", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get deployment_config_id(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_config_id`;
  }

  get deployment_config_name(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_config_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
