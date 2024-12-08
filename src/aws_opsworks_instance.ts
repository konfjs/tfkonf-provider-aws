import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpsworksInstanceArgsEbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
}

export interface AwsOpsworksInstanceArgsEphemeralBlockDevice {
  device_name: string;
  virtual_name: string;
}

export interface AwsOpsworksInstanceArgsRootBlockDevice {
  delete_on_termination?: boolean;
}

export interface AwsOpsworksInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsOpsworksInstanceArgs {
  agent_version?: string;
  architecture?: string;
  auto_scaling_type?: string;
  delete_ebs?: boolean;
  delete_eip?: boolean;
  ebs_optimized?: boolean;
  install_updates_on_boot?: boolean;
  instance_type?: string;
  layer_ids: string[];
  stack_id: string;
  state?: string;
  ebs_block_device?: AwsOpsworksInstanceArgsEbsBlockDevice[];
  ephemeral_block_device?: AwsOpsworksInstanceArgsEphemeralBlockDevice[];
  root_block_device?: AwsOpsworksInstanceArgsRootBlockDevice[];
  timeouts?: AwsOpsworksInstanceArgsTimeouts;
}

export class aws_opsworks_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOpsworksInstanceArgs) {
    const meta = {ebs_block_device:{isBlock:true},ephemeral_block_device:{isBlock:true},root_block_device:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opsworks_instance", resourceName);
  }

  get ami_id(): string {
    return `${this.resourceType}.${this.resourceName}.ami_id`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get ec2_instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.ec2_instance_id`;
  }

  get ecs_cluster_arn(): string {
    return `${this.resourceType}.${this.resourceName}.ecs_cluster_arn`;
  }

  get elastic_ip(): string {
    return `${this.resourceType}.${this.resourceName}.elastic_ip`;
  }

  get hostname(): string {
    return `${this.resourceType}.${this.resourceName}.hostname`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get infrastructure_class(): string {
    return `${this.resourceType}.${this.resourceName}.infrastructure_class`;
  }

  get instance_profile_arn(): string {
    return `${this.resourceType}.${this.resourceName}.instance_profile_arn`;
  }

  get last_service_error_id(): string {
    return `${this.resourceType}.${this.resourceName}.last_service_error_id`;
  }

  get layer_ids(): string {
    return `${this.resourceType}.${this.resourceName}.layer_ids`;
  }

  get os(): string {
    return `${this.resourceType}.${this.resourceName}.os`;
  }

  get platform(): string {
    return `${this.resourceType}.${this.resourceName}.platform`;
  }

  get private_dns(): string {
    return `${this.resourceType}.${this.resourceName}.private_dns`;
  }

  get private_ip(): string {
    return `${this.resourceType}.${this.resourceName}.private_ip`;
  }

  get public_dns(): string {
    return `${this.resourceType}.${this.resourceName}.public_dns`;
  }

  get public_ip(): string {
    return `${this.resourceType}.${this.resourceName}.public_ip`;
  }

  get registered_by(): string {
    return `${this.resourceType}.${this.resourceName}.registered_by`;
  }

  get reported_agent_version(): string {
    return `${this.resourceType}.${this.resourceName}.reported_agent_version`;
  }

  get reported_os_family(): string {
    return `${this.resourceType}.${this.resourceName}.reported_os_family`;
  }

  get reported_os_name(): string {
    return `${this.resourceType}.${this.resourceName}.reported_os_name`;
  }

  get reported_os_version(): string {
    return `${this.resourceType}.${this.resourceName}.reported_os_version`;
  }

  get root_device_type(): string {
    return `${this.resourceType}.${this.resourceName}.root_device_type`;
  }

  get root_device_volume_id(): string {
    return `${this.resourceType}.${this.resourceName}.root_device_volume_id`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get ssh_host_dsa_key_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.ssh_host_dsa_key_fingerprint`;
  }

  get ssh_host_rsa_key_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.ssh_host_rsa_key_fingerprint`;
  }

  get ssh_key_name(): string {
    return `${this.resourceType}.${this.resourceName}.ssh_key_name`;
  }

  get stack_id(): string {
    return `${this.resourceType}.${this.resourceName}.stack_id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get tenancy(): string {
    return `${this.resourceType}.${this.resourceName}.tenancy`;
  }

  get virtualization_type(): string {
    return `${this.resourceType}.${this.resourceName}.virtualization_type`;
  }
}
