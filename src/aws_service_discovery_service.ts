import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServiceDiscoveryServiceArgsDnsConfigDnsRecords {
  ttl: number;
  type: string;
}

export interface AwsServiceDiscoveryServiceArgsDnsConfig {
  namespace_id: string;
  routing_policy?: string;
  dns_records: AwsServiceDiscoveryServiceArgsDnsConfigDnsRecords[];
}

export interface AwsServiceDiscoveryServiceArgsHealthCheckConfig {
  failure_threshold?: number;
  resource_path?: string;
  type?: string;
}

export interface AwsServiceDiscoveryServiceArgsHealthCheckCustomConfig {
  failure_threshold?: number;
}

export interface AwsServiceDiscoveryServiceArgs {
  description?: string;
  force_destroy?: boolean;
  name: string;
  tags?: { [key: string]: string };
  dns_config?: AwsServiceDiscoveryServiceArgsDnsConfig;
  health_check_config?: AwsServiceDiscoveryServiceArgsHealthCheckConfig;
  health_check_custom_config?: AwsServiceDiscoveryServiceArgsHealthCheckCustomConfig;
}

export class aws_service_discovery_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServiceDiscoveryServiceArgs) {
    const meta = {dns_config:{isBlock:true,dns_records:{isBlock:true}},health_check_config:{isBlock:true},health_check_custom_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_service_discovery_service", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get namespace_id(): string {
    return `${this.resourceType}.${this.resourceName}.namespace_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
