import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodedeployDeploymentGroupArgsAlarmConfiguration {
  alarms?: string[];
  enabled?: boolean;
  ignore_poll_alarm_failure?: boolean;
}

export interface AwsCodedeployDeploymentGroupArgsAutoRollbackConfiguration {
  enabled?: boolean;
  events?: string[];
}

export interface AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigDeploymentReadyOption {
  action_on_timeout?: string;
  wait_time_in_minutes?: number;
}

export interface AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigGreenFleetProvisioningOption {
  action?: string;
}

export interface AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
  action?: string;
  termination_wait_time_in_minutes?: number;
}

export interface AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfig {
  deployment_ready_option?: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigDeploymentReadyOption;
  green_fleet_provisioning_option?: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigGreenFleetProvisioningOption;
  terminate_blue_instances_on_deployment_success?: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
}

export interface AwsCodedeployDeploymentGroupArgsDeploymentStyle {
  deployment_option?: string;
  deployment_type?: string;
}

export interface AwsCodedeployDeploymentGroupArgsEc2TagFilter {
  key?: string;
  type?: string;
  value?: string;
}

export interface AwsCodedeployDeploymentGroupArgsEc2TagSetEc2TagFilter {
  key?: string;
  type?: string;
  value?: string;
}

export interface AwsCodedeployDeploymentGroupArgsEc2TagSet {
  ec2_tag_filter?: AwsCodedeployDeploymentGroupArgsEc2TagSetEc2TagFilter[];
}

export interface AwsCodedeployDeploymentGroupArgsEcsService {
  cluster_name: string;
  service_name: string;
}

export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoElbInfo {
  name?: string;
}

export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupInfo {
  name?: string;
}

export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
  listener_arns: string[];
}

export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoTargetGroup {
  name: string;
}

export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
  listener_arns: string[];
}

export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfo {
  prod_traffic_route: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
  target_group: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
  test_traffic_route?: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
}

export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfo {
  elb_info?: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoElbInfo[];
  target_group_info?: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupInfo[];
  target_group_pair_info?: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfo;
}

export interface AwsCodedeployDeploymentGroupArgsOnPremisesInstanceTagFilter {
  key?: string;
  type?: string;
  value?: string;
}

export interface AwsCodedeployDeploymentGroupArgsTriggerConfiguration {
  trigger_events: string[];
  trigger_name: string;
  trigger_target_arn: string;
}

export interface AwsCodedeployDeploymentGroupArgs {
  app_name: string;
  autoscaling_groups?: string[];
  deployment_config_name?: string;
  deployment_group_name: string;
  outdated_instances_strategy?: string;
  service_role_arn: string;
  tags?: { [key: string]: string };
  termination_hook_enabled?: boolean;
  alarm_configuration?: AwsCodedeployDeploymentGroupArgsAlarmConfiguration;
  auto_rollback_configuration?: AwsCodedeployDeploymentGroupArgsAutoRollbackConfiguration;
  blue_green_deployment_config?: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfig;
  deployment_style?: AwsCodedeployDeploymentGroupArgsDeploymentStyle;
  ec2_tag_filter?: AwsCodedeployDeploymentGroupArgsEc2TagFilter[];
  ec2_tag_set?: AwsCodedeployDeploymentGroupArgsEc2TagSet[];
  ecs_service?: AwsCodedeployDeploymentGroupArgsEcsService;
  load_balancer_info?: AwsCodedeployDeploymentGroupArgsLoadBalancerInfo;
  on_premises_instance_tag_filter?: AwsCodedeployDeploymentGroupArgsOnPremisesInstanceTagFilter[];
  trigger_configuration?: AwsCodedeployDeploymentGroupArgsTriggerConfiguration[];
}

export class aws_codedeploy_deployment_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodedeployDeploymentGroupArgs) {
    const meta = {alarm_configuration:{isBlock:true},auto_rollback_configuration:{isBlock:true},blue_green_deployment_config:{isBlock:true,deployment_ready_option:{isBlock:true},green_fleet_provisioning_option:{isBlock:true},terminate_blue_instances_on_deployment_success:{isBlock:true}},deployment_style:{isBlock:true},ec2_tag_filter:{isBlock:true},ec2_tag_set:{isBlock:true,ec2_tag_filter:{isBlock:true}},ecs_service:{isBlock:true},load_balancer_info:{isBlock:true,elb_info:{isBlock:true},target_group_info:{isBlock:true},target_group_pair_info:{isBlock:true,prod_traffic_route:{isBlock:true},target_group:{isBlock:true},test_traffic_route:{isBlock:true}}},on_premises_instance_tag_filter:{isBlock:true},trigger_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codedeploy_deployment_group", resourceName);
  }

  get app_name(): string {
    return `${this.resourceType}.${this.resourceName}.app_name`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get compute_platform(): string {
    return `${this.resourceType}.${this.resourceName}.compute_platform`;
  }

  get deployment_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_group_id`;
  }

  get deployment_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get service_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
