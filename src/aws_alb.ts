import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAlbArgsAccessLogs {
  bucket: string;
  enabled?: boolean;
  prefix?: string;
}

export interface AwsAlbArgsConnectionLogs {
  bucket: string;
  enabled?: boolean;
  prefix?: string;
}

export interface AwsAlbArgsSubnetMapping {
  allocation_id?: string;
  ipv6_address?: string;
  private_ipv4_address?: string;
  subnet_id: string;
}

export interface AwsAlbArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsAlbArgs {
  client_keep_alive?: number;
  customer_owned_ipv4_pool?: string;
  desync_mitigation_mode?: string;
  dns_record_client_routing_policy?: string;
  drop_invalid_header_fields?: boolean;
  enable_cross_zone_load_balancing?: boolean;
  enable_deletion_protection?: boolean;
  enable_http2?: boolean;
  enable_tls_version_and_cipher_suite_headers?: boolean;
  enable_waf_fail_open?: boolean;
  enable_xff_client_port?: boolean;
  enable_zonal_shift?: boolean;
  idle_timeout?: number;
  load_balancer_type?: string;
  preserve_host_header?: boolean;
  tags?: { [key: string]: string };
  xff_header_processing_mode?: string;
  access_logs?: AwsAlbArgsAccessLogs;
  connection_logs?: AwsAlbArgsConnectionLogs;
  subnet_mapping?: AwsAlbArgsSubnetMapping[];
  timeouts?: AwsAlbArgsTimeouts;
}

export class aws_alb extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAlbArgs) {
    const meta = {access_logs:{isBlock:true},connection_logs:{isBlock:true},subnet_mapping:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_alb", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get arn_suffix(): string {
    return `${this.resourceType}.${this.resourceName}.arn_suffix`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get enforce_security_group_inbound_rules_on_private_link_traffic(): string {
    return `${this.resourceType}.${this.resourceName}.enforce_security_group_inbound_rules_on_private_link_traffic`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get internal(): string {
    return `${this.resourceType}.${this.resourceName}.internal`;
  }

  get ip_address_type(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get security_groups(): string {
    return `${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get subnets(): string {
    return `${this.resourceType}.${this.resourceName}.subnets`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.zone_id`;
  }
}
