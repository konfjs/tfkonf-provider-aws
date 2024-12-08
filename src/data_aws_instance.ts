import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsInstanceArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsInstanceArgsTimeouts {
  read?: string;
}

export interface DataAwsInstanceArgs {
  get_password_data?: boolean;
  get_user_data?: boolean;
  instance_id?: string;
  filter?: DataAwsInstanceArgsFilter[];
  timeouts?: DataAwsInstanceArgsTimeouts;
}

export class data_aws_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsInstanceArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_instance", resourceName);
  }

  get ami(): string {
    return `data.${this.resourceType}.${this.resourceName}.ami`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get associate_public_ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.associate_public_ip_address`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get credit_specification(): string {
    return `data.${this.resourceType}.${this.resourceName}.credit_specification`;
  }

  get disable_api_stop(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_api_stop`;
  }

  get disable_api_termination(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_api_termination`;
  }

  get ebs_block_device(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_block_device`;
  }

  get ebs_optimized(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_optimized`;
  }

  get enclave_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.enclave_options`;
  }

  get ephemeral_block_device(): string {
    return `data.${this.resourceType}.${this.resourceName}.ephemeral_block_device`;
  }

  get host_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.host_id`;
  }

  get host_resource_group_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.host_resource_group_arn`;
  }

  get iam_instance_profile(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_instance_profile`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_state(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_state`;
  }

  get instance_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_tags`;
  }

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get ipv6_addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_addresses`;
  }

  get key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_name`;
  }

  get launch_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.launch_time`;
  }

  get maintenance_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_options`;
  }

  get metadata_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata_options`;
  }

  get monitoring(): string {
    return `data.${this.resourceType}.${this.resourceName}.monitoring`;
  }

  get network_interface_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get outpost_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get password_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.password_data`;
  }

  get placement_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.placement_group`;
  }

  get placement_partition_number(): string {
    return `data.${this.resourceType}.${this.resourceName}.placement_partition_number`;
  }

  get private_dns(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_dns`;
  }

  get private_dns_name_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_dns_name_options`;
  }

  get private_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_ip`;
  }

  get public_dns(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_dns`;
  }

  get public_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_ip`;
  }

  get root_block_device(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_block_device`;
  }

  get secondary_private_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.secondary_private_ips`;
  }

  get security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get source_dest_check(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_dest_check`;
  }

  get subnet_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get tenancy(): string {
    return `data.${this.resourceType}.${this.resourceName}.tenancy`;
  }

  get user_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_data`;
  }

  get user_data_base64(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_data_base64`;
  }

  get vpc_security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
