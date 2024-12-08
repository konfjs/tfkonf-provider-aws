import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInstanceArgsCapacityReservationSpecificationCapacityReservationTarget {
  capacity_reservation_id?: string;
  capacity_reservation_resource_group_arn?: string;
}

export interface AwsInstanceArgsCapacityReservationSpecification {
  capacity_reservation_preference?: string;
  capacity_reservation_target?: AwsInstanceArgsCapacityReservationSpecificationCapacityReservationTarget;
}

export interface AwsInstanceArgsCpuOptions {
}

export interface AwsInstanceArgsCreditSpecification {
  cpu_credits?: string;
}

export interface AwsInstanceArgsEbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
  tags?: { [key: string]: string };
}

export interface AwsInstanceArgsEnclaveOptions {
}

export interface AwsInstanceArgsEphemeralBlockDevice {
  device_name: string;
  no_device?: boolean;
  virtual_name?: string;
}

export interface AwsInstanceArgsInstanceMarketOptionsSpotOptions {
}

export interface AwsInstanceArgsInstanceMarketOptions {
  spot_options?: AwsInstanceArgsInstanceMarketOptionsSpotOptions;
}

export interface AwsInstanceArgsLaunchTemplate {
  version?: string;
}

export interface AwsInstanceArgsMaintenanceOptions {
}

export interface AwsInstanceArgsMetadataOptions {
  http_endpoint?: string;
  http_protocol_ipv6?: string;
}

export interface AwsInstanceArgsNetworkInterface {
  delete_on_termination?: boolean;
  device_index: number;
  network_card_index?: number;
  network_interface_id: string;
}

export interface AwsInstanceArgsPrivateDnsNameOptions {
}

export interface AwsInstanceArgsRootBlockDevice {
  delete_on_termination?: boolean;
  tags?: { [key: string]: string };
}

export interface AwsInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsInstanceArgs {
  get_password_data?: boolean;
  hibernation?: boolean;
  source_dest_check?: boolean;
  tags?: { [key: string]: string };
  user_data_replace_on_change?: boolean;
  volume_tags?: { [key: string]: string };
  capacity_reservation_specification?: AwsInstanceArgsCapacityReservationSpecification;
  cpu_options?: AwsInstanceArgsCpuOptions;
  credit_specification?: AwsInstanceArgsCreditSpecification;
  ebs_block_device?: AwsInstanceArgsEbsBlockDevice[];
  enclave_options?: AwsInstanceArgsEnclaveOptions;
  ephemeral_block_device?: AwsInstanceArgsEphemeralBlockDevice[];
  instance_market_options?: AwsInstanceArgsInstanceMarketOptions;
  launch_template?: AwsInstanceArgsLaunchTemplate;
  maintenance_options?: AwsInstanceArgsMaintenanceOptions;
  metadata_options?: AwsInstanceArgsMetadataOptions;
  network_interface?: AwsInstanceArgsNetworkInterface[];
  private_dns_name_options?: AwsInstanceArgsPrivateDnsNameOptions;
  root_block_device?: AwsInstanceArgsRootBlockDevice;
  timeouts?: AwsInstanceArgsTimeouts;
}

export class aws_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsInstanceArgs) {
    const meta = {capacity_reservation_specification:{isBlock:true,capacity_reservation_target:{isBlock:true}},cpu_options:{isBlock:true},credit_specification:{isBlock:true},ebs_block_device:{isBlock:true},enclave_options:{isBlock:true},ephemeral_block_device:{isBlock:true},instance_market_options:{isBlock:true,spot_options:{isBlock:true}},launch_template:{isBlock:true},maintenance_options:{isBlock:true},metadata_options:{isBlock:true},network_interface:{isBlock:true},private_dns_name_options:{isBlock:true},root_block_device:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_instance", resourceName);
  }

  get ami(): string {
    return `${this.resourceType}.${this.resourceName}.ami`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get associate_public_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.associate_public_ip_address`;
  }

  get availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get cpu_core_count(): string {
    return `${this.resourceType}.${this.resourceName}.cpu_core_count`;
  }

  get cpu_threads_per_core(): string {
    return `${this.resourceType}.${this.resourceName}.cpu_threads_per_core`;
  }

  get disable_api_stop(): string {
    return `${this.resourceType}.${this.resourceName}.disable_api_stop`;
  }

  get disable_api_termination(): string {
    return `${this.resourceType}.${this.resourceName}.disable_api_termination`;
  }

  get ebs_optimized(): string {
    return `${this.resourceType}.${this.resourceName}.ebs_optimized`;
  }

  get host_id(): string {
    return `${this.resourceType}.${this.resourceName}.host_id`;
  }

  get host_resource_group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.host_resource_group_arn`;
  }

  get iam_instance_profile(): string {
    return `${this.resourceType}.${this.resourceName}.iam_instance_profile`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_initiated_shutdown_behavior(): string {
    return `${this.resourceType}.${this.resourceName}.instance_initiated_shutdown_behavior`;
  }

  get instance_lifecycle(): string {
    return `${this.resourceType}.${this.resourceName}.instance_lifecycle`;
  }

  get instance_state(): string {
    return `${this.resourceType}.${this.resourceName}.instance_state`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get ipv6_address_count(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_address_count`;
  }

  get ipv6_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_addresses`;
  }

  get key_name(): string {
    return `${this.resourceType}.${this.resourceName}.key_name`;
  }

  get monitoring(): string {
    return `${this.resourceType}.${this.resourceName}.monitoring`;
  }

  get outpost_arn(): string {
    return `${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get password_data(): string {
    return `${this.resourceType}.${this.resourceName}.password_data`;
  }

  get placement_group(): string {
    return `${this.resourceType}.${this.resourceName}.placement_group`;
  }

  get placement_partition_number(): string {
    return `${this.resourceType}.${this.resourceName}.placement_partition_number`;
  }

  get primary_network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.primary_network_interface_id`;
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

  get secondary_private_ips(): string {
    return `${this.resourceType}.${this.resourceName}.secondary_private_ips`;
  }

  get security_groups(): string {
    return `${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get spot_instance_request_id(): string {
    return `${this.resourceType}.${this.resourceName}.spot_instance_request_id`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tenancy(): string {
    return `${this.resourceType}.${this.resourceName}.tenancy`;
  }

  get user_data(): string {
    return `${this.resourceType}.${this.resourceName}.user_data`;
  }

  get user_data_base64(): string {
    return `${this.resourceType}.${this.resourceName}.user_data_base64`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
