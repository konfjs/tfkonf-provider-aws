import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlobalacceleratorAcceleratorArgsAttributes {
  flow_logs_enabled?: boolean;
  flow_logs_s3_bucket?: string;
  flow_logs_s3_prefix?: string;
}

export interface AwsGlobalacceleratorAcceleratorArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsGlobalacceleratorAcceleratorArgs {
  enabled?: boolean;
  ip_address_type?: string;
  ip_addresses?: string[];
  name: string;
  tags?: { [key: string]: string };
  attributes?: AwsGlobalacceleratorAcceleratorArgsAttributes;
  timeouts?: AwsGlobalacceleratorAcceleratorArgsTimeouts;
}

export class aws_globalaccelerator_accelerator extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorAcceleratorArgs) {
    const meta = {attributes:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_globalaccelerator_accelerator", resourceName);
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get dual_stack_dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dual_stack_dns_name`;
  }

  get hosted_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_sets(): string {
    return `${this.resourceType}.${this.resourceName}.ip_sets`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
