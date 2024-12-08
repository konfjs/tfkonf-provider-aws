import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxConnectionArgs {
  bandwidth: string;
  location: string;
  name: string;
  request_macsec?: boolean;
  skip_destroy?: boolean;
  tags?: { [key: string]: string };
}

export class aws_dx_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDxConnectionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dx_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_device(): string {
    return `${this.resourceType}.${this.resourceName}.aws_device`;
  }

  get bandwidth(): string {
    return `${this.resourceType}.${this.resourceName}.bandwidth`;
  }

  get encryption_mode(): string {
    return `${this.resourceType}.${this.resourceName}.encryption_mode`;
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

  get macsec_capable(): string {
    return `${this.resourceType}.${this.resourceName}.macsec_capable`;
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

  get port_encryption_status(): string {
    return `${this.resourceType}.${this.resourceName}.port_encryption_status`;
  }

  get provider_name(): string {
    return `${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vlan_id(): string {
    return `${this.resourceType}.${this.resourceName}.vlan_id`;
  }
}
