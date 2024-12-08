import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDirectoryServiceTrustArgs {
  conditional_forwarder_ip_addrs?: string[];
  directory_id: string;
  remote_domain_name: string;
  trust_direction: string;
  trust_password: string;
}

export class aws_directory_service_trust extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDirectoryServiceTrustArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_directory_service_trust", resourceName);
  }

  get created_date_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_date_time`;
  }

  get delete_associated_conditional_forwarder(): string {
    return `${this.resourceType}.${this.resourceName}.delete_associated_conditional_forwarder`;
  }

  get directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_date_time`;
  }

  get remote_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.remote_domain_name`;
  }

  get selective_auth(): string {
    return `${this.resourceType}.${this.resourceName}.selective_auth`;
  }

  get state_last_updated_date_time(): string {
    return `${this.resourceType}.${this.resourceName}.state_last_updated_date_time`;
  }

  get trust_direction(): string {
    return `${this.resourceType}.${this.resourceName}.trust_direction`;
  }

  get trust_password(): string {
    return `${this.resourceType}.${this.resourceName}.trust_password`;
  }

  get trust_state(): string {
    return `${this.resourceType}.${this.resourceName}.trust_state`;
  }

  get trust_state_reason(): string {
    return `${this.resourceType}.${this.resourceName}.trust_state_reason`;
  }

  get trust_type(): string {
    return `${this.resourceType}.${this.resourceName}.trust_type`;
  }
}
