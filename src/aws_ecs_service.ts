import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcsServiceArgsAlarms {
  alarm_names: string[];
  enable: boolean;
  rollback: boolean;
}

export interface AwsEcsServiceArgsCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}

export interface AwsEcsServiceArgsDeploymentCircuitBreaker {
  enable: boolean;
  rollback: boolean;
}

export interface AwsEcsServiceArgsDeploymentController {
  type?: string;
}

export interface AwsEcsServiceArgsLoadBalancer {
  container_name: string;
  container_port: number;
  elb_name?: string;
  target_group_arn?: string;
}

export interface AwsEcsServiceArgsNetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}

export interface AwsEcsServiceArgsOrderedPlacementStrategy {
  field?: string;
  type: string;
}

export interface AwsEcsServiceArgsPlacementConstraints {
  expression?: string;
  type: string;
}

export interface AwsEcsServiceArgsServiceConnectConfigurationLogConfigurationSecretOption {
  name: string;
  value_from: string;
}

export interface AwsEcsServiceArgsServiceConnectConfigurationLogConfiguration {
  log_driver: string;
  secret_option?: AwsEcsServiceArgsServiceConnectConfigurationLogConfigurationSecretOption[];
}

export interface AwsEcsServiceArgsServiceConnectConfigurationServiceClientAlias {
  dns_name?: string;
  port: number;
}

export interface AwsEcsServiceArgsServiceConnectConfigurationServiceTimeout {
  idle_timeout_seconds?: number;
  per_request_timeout_seconds?: number;
}

export interface AwsEcsServiceArgsServiceConnectConfigurationServiceTlsIssuerCertAuthority {
  aws_pca_authority_arn: string;
}

export interface AwsEcsServiceArgsServiceConnectConfigurationServiceTls {
  kms_key?: string;
  role_arn?: string;
  issuer_cert_authority: AwsEcsServiceArgsServiceConnectConfigurationServiceTlsIssuerCertAuthority;
}

export interface AwsEcsServiceArgsServiceConnectConfigurationService {
  discovery_name?: string;
  ingress_port_override?: number;
  port_name: string;
  client_alias?: AwsEcsServiceArgsServiceConnectConfigurationServiceClientAlias;
  timeout?: AwsEcsServiceArgsServiceConnectConfigurationServiceTimeout;
  tls?: AwsEcsServiceArgsServiceConnectConfigurationServiceTls;
}

export interface AwsEcsServiceArgsServiceConnectConfiguration {
  enabled: boolean;
  namespace?: string;
  log_configuration?: AwsEcsServiceArgsServiceConnectConfigurationLogConfiguration;
  service?: AwsEcsServiceArgsServiceConnectConfigurationService[];
}

export interface AwsEcsServiceArgsServiceRegistries {
  container_name?: string;
  container_port?: number;
  port?: number;
  registry_arn: string;
}

export interface AwsEcsServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEcsServiceArgsVolumeConfigurationManagedEbsVolumeTagSpecifications {
  propagate_tags?: string;
  resource_type: string;
  tags?: { [key: string]: string };
}

export interface AwsEcsServiceArgsVolumeConfigurationManagedEbsVolume {
  encrypted?: boolean;
  file_system_type?: string;
  iops?: number;
  kms_key_id?: string;
  role_arn: string;
  size_in_gb?: number;
  snapshot_id?: string;
  throughput?: number;
  volume_type?: string;
  tag_specifications?: AwsEcsServiceArgsVolumeConfigurationManagedEbsVolumeTagSpecifications[];
}

export interface AwsEcsServiceArgsVolumeConfiguration {
  name: string;
  managed_ebs_volume: AwsEcsServiceArgsVolumeConfigurationManagedEbsVolume;
}

export interface AwsEcsServiceArgsVpcLatticeConfigurations {
  port_name: string;
  role_arn: string;
  target_group_arn: string;
}

export interface AwsEcsServiceArgs {
  availability_zone_rebalancing?: string;
  deployment_maximum_percent?: number;
  deployment_minimum_healthy_percent?: number;
  desired_count?: number;
  enable_ecs_managed_tags?: boolean;
  enable_execute_command?: boolean;
  force_delete?: boolean;
  force_new_deployment?: boolean;
  health_check_grace_period_seconds?: number;
  name: string;
  propagate_tags?: string;
  scheduling_strategy?: string;
  tags?: { [key: string]: string };
  task_definition?: string;
  wait_for_steady_state?: boolean;
  alarms?: AwsEcsServiceArgsAlarms;
  capacity_provider_strategy?: AwsEcsServiceArgsCapacityProviderStrategy[];
  deployment_circuit_breaker?: AwsEcsServiceArgsDeploymentCircuitBreaker;
  deployment_controller?: AwsEcsServiceArgsDeploymentController;
  load_balancer?: AwsEcsServiceArgsLoadBalancer[];
  network_configuration?: AwsEcsServiceArgsNetworkConfiguration;
  ordered_placement_strategy?: AwsEcsServiceArgsOrderedPlacementStrategy[];
  placement_constraints?: AwsEcsServiceArgsPlacementConstraints[];
  service_connect_configuration?: AwsEcsServiceArgsServiceConnectConfiguration;
  service_registries?: AwsEcsServiceArgsServiceRegistries;
  timeouts?: AwsEcsServiceArgsTimeouts;
  volume_configuration?: AwsEcsServiceArgsVolumeConfiguration;
  vpc_lattice_configurations?: AwsEcsServiceArgsVpcLatticeConfigurations[];
}

export class aws_ecs_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcsServiceArgs) {
    const meta = {alarms:{isBlock:true},capacity_provider_strategy:{isBlock:true},deployment_circuit_breaker:{isBlock:true},deployment_controller:{isBlock:true},load_balancer:{isBlock:true},network_configuration:{isBlock:true},ordered_placement_strategy:{isBlock:true},placement_constraints:{isBlock:true},service_connect_configuration:{isBlock:true,log_configuration:{isBlock:true,secret_option:{isBlock:true}},service:{isBlock:true,client_alias:{isBlock:true},timeout:{isBlock:true},tls:{isBlock:true,issuer_cert_authority:{isBlock:true}}}},service_registries:{isBlock:true},timeouts:{isBlock:true},volume_configuration:{isBlock:true,managed_ebs_volume:{isBlock:true,tag_specifications:{isBlock:true}}},vpc_lattice_configurations:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ecs_service", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get iam_role(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get launch_type(): string {
    return `${this.resourceType}.${this.resourceName}.launch_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get platform_version(): string {
    return `${this.resourceType}.${this.resourceName}.platform_version`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get triggers(): string {
    return `${this.resourceType}.${this.resourceName}.triggers`;
  }
}
