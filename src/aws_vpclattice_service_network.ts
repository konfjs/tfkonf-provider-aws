import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeServiceNetworkArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_vpclattice_service_network extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpclatticeServiceNetworkArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_service_network", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth_type(): string {
    return `${this.resourceType}.${this.resourceName}.auth_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
