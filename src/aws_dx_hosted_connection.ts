import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxHostedConnectionArgs {
  bandwidth: string;
  connection_id: string;
  name: string;
  owner_account_id: string;
  vlan: number;
}

export class aws_dx_hosted_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDxHostedConnectionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dx_hosted_connection", resourceName);
  }

  get aws_device(): string {
    return `${this.resourceType}.${this.resourceName}.aws_device`;
  }

  get bandwidth(): string {
    return `${this.resourceType}.${this.resourceName}.bandwidth`;
  }

  get connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.connection_id`;
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

  get lag_id(): string {
    return `${this.resourceType}.${this.resourceName}.lag_id`;
  }

  get loa_issue_time(): string {
    return `${this.resourceType}.${this.resourceName}.loa_issue_time`;
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

  get partner_name(): string {
    return `${this.resourceType}.${this.resourceName}.partner_name`;
  }

  get provider_name(): string {
    return `${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get vlan(): string {
    return `${this.resourceType}.${this.resourceName}.vlan`;
  }
}
