import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpclatticeServiceNetworkArgs {
  service_network_identifier: string;
}

export class data_aws_vpclattice_service_network extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsVpclatticeServiceNetworkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_vpclattice_service_network", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.auth_type`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_at`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get number_of_associated_services(): string {
    return `data.${this.resourceType}.${this.resourceName}.number_of_associated_services`;
  }

  get number_of_associated_vpcs(): string {
    return `data.${this.resourceType}.${this.resourceName}.number_of_associated_vpcs`;
  }

  get service_network_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_network_identifier`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
