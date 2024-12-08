import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxHostedTransitVirtualInterfaceAccepterArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDxHostedTransitVirtualInterfaceAccepterArgs {
  dx_gateway_id: string;
  tags?: { [key: string]: string };
  virtual_interface_id: string;
  timeouts?: AwsDxHostedTransitVirtualInterfaceAccepterArgsTimeouts;
}

export class aws_dx_hosted_transit_virtual_interface_accepter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDxHostedTransitVirtualInterfaceAccepterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dx_hosted_transit_virtual_interface_accepter", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get dx_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.dx_gateway_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get virtual_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.virtual_interface_id`;
  }
}
