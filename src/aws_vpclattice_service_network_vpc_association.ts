import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeServiceNetworkVpcAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpclatticeServiceNetworkVpcAssociationArgs {
  security_group_ids?: string[];
  service_network_identifier: string;
  tags?: { [key: string]: string };
  vpc_identifier: string;
  timeouts?: AwsVpclatticeServiceNetworkVpcAssociationArgsTimeouts;
}

export class aws_vpclattice_service_network_vpc_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpclatticeServiceNetworkVpcAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_service_network_vpc_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_by(): string {
    return `${this.resourceType}.${this.resourceName}.created_by`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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

  get vpc_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_identifier`;
  }
}
