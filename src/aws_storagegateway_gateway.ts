import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayGatewayArgsMaintenanceStartTime {
  day_of_month?: string;
  day_of_week?: string;
  hour_of_day: number;
  minute_of_hour?: number;
}

export interface AwsStoragegatewayGatewayArgsSmbActiveDirectorySettings {
  domain_controllers?: string[];
  domain_name: string;
  organizational_unit?: string;
  password: string;
  timeout_in_seconds?: number;
  username: string;
}

export interface AwsStoragegatewayGatewayArgsTimeouts {
  create?: string;
}

export interface AwsStoragegatewayGatewayArgs {
  average_download_rate_limit_in_bits_per_sec?: number;
  average_upload_rate_limit_in_bits_per_sec?: number;
  cloudwatch_log_group_arn?: string;
  gateway_name: string;
  gateway_timezone: string;
  gateway_type?: string;
  gateway_vpc_endpoint?: string;
  medium_changer_type?: string;
  smb_file_share_visibility?: boolean;
  smb_guest_password?: string;
  tags?: { [key: string]: string };
  tape_drive_type?: string;
  maintenance_start_time?: AwsStoragegatewayGatewayArgsMaintenanceStartTime;
  smb_active_directory_settings?: AwsStoragegatewayGatewayArgsSmbActiveDirectorySettings;
  timeouts?: AwsStoragegatewayGatewayArgsTimeouts;
}

export class aws_storagegateway_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsStoragegatewayGatewayArgs) {
    const meta = {maintenance_start_time:{isBlock:true},smb_active_directory_settings:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_gateway", resourceName);
  }

  get activation_key(): string {
    return `${this.resourceType}.${this.resourceName}.activation_key`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get ec2_instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.ec2_instance_id`;
  }

  get endpoint_type(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_type`;
  }

  get gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_id`;
  }

  get gateway_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_ip_address`;
  }

  get gateway_name(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_name`;
  }

  get gateway_network_interface(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_network_interface`;
  }

  get gateway_timezone(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_timezone`;
  }

  get host_environment(): string {
    return `${this.resourceType}.${this.resourceName}.host_environment`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get smb_security_strategy(): string {
    return `${this.resourceType}.${this.resourceName}.smb_security_strategy`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
