import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeServiceNetworkServiceAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpclatticeServiceNetworkServiceAssociationArgs {
  service_identifier: string;
  service_network_identifier: string;
  tags?: { [key: string]: string };
  timeouts?: AwsVpclatticeServiceNetworkServiceAssociationArgsTimeouts;
}

export class aws_vpclattice_service_network_service_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpclatticeServiceNetworkServiceAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_service_network_service_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_by(): string {
    return `${this.resourceType}.${this.resourceName}.created_by`;
  }

  get custom_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.custom_domain_name`;
  }

  get dns_entry(): string {
    return `${this.resourceType}.${this.resourceName}.dns_entry`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get service_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.service_identifier`;
  }

  get service_network_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.service_network_identifier`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
