import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxHostedPublicVirtualInterfaceAccepterArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDxHostedPublicVirtualInterfaceAccepterArgs {
  tags?: { [key: string]: string };
  virtual_interface_id: string;
  timeouts?: AwsDxHostedPublicVirtualInterfaceAccepterArgsTimeouts;
}

export class aws_dx_hosted_public_virtual_interface_accepter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDxHostedPublicVirtualInterfaceAccepterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dx_hosted_public_virtual_interface_accepter", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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
