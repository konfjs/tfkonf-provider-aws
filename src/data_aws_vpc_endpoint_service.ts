import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcEndpointServiceArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcEndpointServiceArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcEndpointServiceArgs {
  service?: string;
  filter?: DataAwsVpcEndpointServiceArgsFilter[];
  timeouts?: DataAwsVpcEndpointServiceArgsTimeouts;
}

export class data_aws_vpc_endpoint_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpcEndpointServiceArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_endpoint_service", resourceName);
  }

  get acceptance_required(): string {
    return `data.${this.resourceType}.${this.resourceName}.acceptance_required`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get base_endpoint_dns_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.base_endpoint_dns_names`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get manages_vpc_endpoints(): string {
    return `data.${this.resourceType}.${this.resourceName}.manages_vpc_endpoints`;
  }

  get owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner`;
  }

  get private_dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_dns_name`;
  }

  get private_dns_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_dns_names`;
  }

  get service_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_id`;
  }

  get service_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_name`;
  }

  get service_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_type`;
  }

  get supported_ip_address_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_ip_address_types`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_endpoint_policy_supported(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_endpoint_policy_supported`;
  }
}
