import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpcEndpointServiceArgs {
  acceptance_required: boolean;
  gateway_load_balancer_arns?: string[];
  network_load_balancer_arns?: string[];
  tags?: { [key: string]: string };
  timeouts?: AwsVpcEndpointServiceArgsTimeouts;
}

export class aws_vpc_endpoint_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcEndpointServiceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_service", resourceName);
  }

  get acceptance_required(): string {
    return `${this.resourceType}.${this.resourceName}.acceptance_required`;
  }

  get allowed_principals(): string {
    return `${this.resourceType}.${this.resourceName}.allowed_principals`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zones(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get base_endpoint_dns_names(): string {
    return `${this.resourceType}.${this.resourceName}.base_endpoint_dns_names`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get manages_vpc_endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.manages_vpc_endpoints`;
  }

  get private_dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.private_dns_name`;
  }

  get private_dns_name_configuration(): string {
    return `${this.resourceType}.${this.resourceName}.private_dns_name_configuration`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }

  get service_type(): string {
    return `${this.resourceType}.${this.resourceName}.service_type`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get supported_ip_address_types(): string {
    return `${this.resourceType}.${this.resourceName}.supported_ip_address_types`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
