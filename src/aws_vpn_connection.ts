import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpnConnectionArgsTunnel1LogOptionsCloudwatchLogOptions {
  log_enabled?: boolean;
  log_group_arn?: string;
  log_output_format?: string;
}

export interface AwsVpnConnectionArgsTunnel1LogOptions {
  cloudwatch_log_options?: AwsVpnConnectionArgsTunnel1LogOptionsCloudwatchLogOptions;
}

export interface AwsVpnConnectionArgsTunnel2LogOptionsCloudwatchLogOptions {
  log_enabled?: boolean;
  log_group_arn?: string;
  log_output_format?: string;
}

export interface AwsVpnConnectionArgsTunnel2LogOptions {
  cloudwatch_log_options?: AwsVpnConnectionArgsTunnel2LogOptionsCloudwatchLogOptions;
}

export interface AwsVpnConnectionArgs {
  customer_gateway_id: string;
  tags?: { [key: string]: string };
  transit_gateway_id?: string;
  transport_transit_gateway_attachment_id?: string;
  tunnel1_dpd_timeout_action?: string;
  tunnel1_dpd_timeout_seconds?: number;
  tunnel1_enable_tunnel_lifecycle_control?: boolean;
  tunnel1_ike_versions?: string[];
  tunnel1_phase1_dh_group_numbers?: number[];
  tunnel1_phase1_encryption_algorithms?: string[];
  tunnel1_phase1_integrity_algorithms?: string[];
  tunnel1_phase1_lifetime_seconds?: number;
  tunnel1_phase2_dh_group_numbers?: number[];
  tunnel1_phase2_encryption_algorithms?: string[];
  tunnel1_phase2_integrity_algorithms?: string[];
  tunnel1_phase2_lifetime_seconds?: number;
  tunnel1_rekey_fuzz_percentage?: number;
  tunnel1_rekey_margin_time_seconds?: number;
  tunnel1_replay_window_size?: number;
  tunnel1_startup_action?: string;
  tunnel2_dpd_timeout_action?: string;
  tunnel2_dpd_timeout_seconds?: number;
  tunnel2_enable_tunnel_lifecycle_control?: boolean;
  tunnel2_ike_versions?: string[];
  tunnel2_phase1_dh_group_numbers?: number[];
  tunnel2_phase1_encryption_algorithms?: string[];
  tunnel2_phase1_integrity_algorithms?: string[];
  tunnel2_phase1_lifetime_seconds?: number;
  tunnel2_phase2_dh_group_numbers?: number[];
  tunnel2_phase2_encryption_algorithms?: string[];
  tunnel2_phase2_integrity_algorithms?: string[];
  tunnel2_phase2_lifetime_seconds?: number;
  tunnel2_rekey_fuzz_percentage?: number;
  tunnel2_rekey_margin_time_seconds?: number;
  tunnel2_replay_window_size?: number;
  tunnel2_startup_action?: string;
  type: string;
  vpn_gateway_id?: string;
  tunnel1_log_options?: AwsVpnConnectionArgsTunnel1LogOptions;
  tunnel2_log_options?: AwsVpnConnectionArgsTunnel2LogOptions;
}

export class aws_vpn_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpnConnectionArgs) {
    const meta = {tunnel1_log_options:{isBlock:true,cloudwatch_log_options:{isBlock:true}},tunnel2_log_options:{isBlock:true,cloudwatch_log_options:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_vpn_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get core_network_arn(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_arn`;
  }

  get core_network_attachment_arn(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_attachment_arn`;
  }

  get customer_gateway_configuration(): string {
    return `${this.resourceType}.${this.resourceName}.customer_gateway_configuration`;
  }

  get customer_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.customer_gateway_id`;
  }

  get enable_acceleration(): string {
    return `${this.resourceType}.${this.resourceName}.enable_acceleration`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get local_ipv4_network_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.local_ipv4_network_cidr`;
  }

  get local_ipv6_network_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.local_ipv6_network_cidr`;
  }

  get outside_ip_address_type(): string {
    return `${this.resourceType}.${this.resourceName}.outside_ip_address_type`;
  }

  get remote_ipv4_network_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.remote_ipv4_network_cidr`;
  }

  get remote_ipv6_network_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.remote_ipv6_network_cidr`;
  }

  get routes(): string {
    return `${this.resourceType}.${this.resourceName}.routes`;
  }

  get static_routes_only(): string {
    return `${this.resourceType}.${this.resourceName}.static_routes_only`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transit_gateway_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_attachment_id`;
  }

  get tunnel1_address(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel1_address`;
  }

  get tunnel1_bgp_asn(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel1_bgp_asn`;
  }

  get tunnel1_bgp_holdtime(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel1_bgp_holdtime`;
  }

  get tunnel1_cgw_inside_address(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel1_cgw_inside_address`;
  }

  get tunnel1_inside_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel1_inside_cidr`;
  }

  get tunnel1_inside_ipv6_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel1_inside_ipv6_cidr`;
  }

  get tunnel1_preshared_key(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel1_preshared_key`;
  }

  get tunnel1_vgw_inside_address(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel1_vgw_inside_address`;
  }

  get tunnel2_address(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel2_address`;
  }

  get tunnel2_bgp_asn(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel2_bgp_asn`;
  }

  get tunnel2_bgp_holdtime(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel2_bgp_holdtime`;
  }

  get tunnel2_cgw_inside_address(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel2_cgw_inside_address`;
  }

  get tunnel2_inside_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel2_inside_cidr`;
  }

  get tunnel2_inside_ipv6_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel2_inside_ipv6_cidr`;
  }

  get tunnel2_preshared_key(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel2_preshared_key`;
  }

  get tunnel2_vgw_inside_address(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel2_vgw_inside_address`;
  }

  get tunnel_inside_ip_version(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel_inside_ip_version`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get vgw_telemetry(): string {
    return `${this.resourceType}.${this.resourceName}.vgw_telemetry`;
  }
}
