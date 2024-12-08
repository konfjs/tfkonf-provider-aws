import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEipAssociationArgs {
  allow_reassociation?: boolean;
}

export class aws_eip_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEipAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_eip_association", resourceName);
  }

  get allocation_id(): string {
    return `${this.resourceType}.${this.resourceName}.allocation_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get private_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.private_ip_address`;
  }

  get public_ip(): string {
    return `${this.resourceType}.${this.resourceName}.public_ip`;
  }
}
