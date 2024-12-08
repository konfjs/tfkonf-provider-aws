import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxLagArgs {
  connection_id?: string;
  connections_bandwidth: string;
  force_destroy?: boolean;
  location: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_dx_lag extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDxLagArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dx_lag", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get connections_bandwidth(): string {
    return `${this.resourceType}.${this.resourceName}.connections_bandwidth`;
  }

  get has_logical_redundancy(): string {
    return `${this.resourceType}.${this.resourceName}.has_logical_redundancy`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get jumbo_frame_capable(): string {
    return `${this.resourceType}.${this.resourceName}.jumbo_frame_capable`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account_id`;
  }

  get provider_name(): string {
    return `${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
