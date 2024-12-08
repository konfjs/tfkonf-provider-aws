import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLbArgsTimeouts {
  read?: string;
}

export interface DataAwsLbArgs {
  timeouts?: DataAwsLbArgsTimeouts;
}

export class data_aws_lb extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLbArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_lb", resourceName);
  }

  get access_logs(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_logs`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get arn_suffix(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn_suffix`;
  }

  get client_keep_alive(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_keep_alive`;
  }

  get connection_logs(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_logs`;
  }

  get customer_owned_ipv4_pool(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_owned_ipv4_pool`;
  }

  get desync_mitigation_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.desync_mitigation_mode`;
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get dns_record_client_routing_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_record_client_routing_policy`;
  }

  get drop_invalid_header_fields(): string {
    return `data.${this.resourceType}.${this.resourceName}.drop_invalid_header_fields`;
  }

  get enable_cross_zone_load_balancing(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_cross_zone_load_balancing`;
  }

  get enable_deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_deletion_protection`;
  }

  get enable_http2(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_http2`;
  }

  get enable_tls_version_and_cipher_suite_headers(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_tls_version_and_cipher_suite_headers`;
  }

  get enable_waf_fail_open(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_waf_fail_open`;
  }

  get enable_xff_client_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_xff_client_port`;
  }

  get enable_zonal_shift(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_zonal_shift`;
  }

  get enforce_security_group_inbound_rules_on_private_link_traffic(): string {
    return `data.${this.resourceType}.${this.resourceName}.enforce_security_group_inbound_rules_on_private_link_traffic`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get idle_timeout(): string {
    return `data.${this.resourceType}.${this.resourceName}.idle_timeout`;
  }

  get internal(): string {
    return `data.${this.resourceType}.${this.resourceName}.internal`;
  }

  get ip_address_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address_type`;
  }

  get load_balancer_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancer_type`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get preserve_host_header(): string {
    return `data.${this.resourceType}.${this.resourceName}.preserve_host_header`;
  }

  get security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get subnet_mapping(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_mapping`;
  }

  get subnets(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnets`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get xff_header_processing_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.xff_header_processing_mode`;
  }

  get zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone_id`;
  }
}
