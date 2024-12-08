import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxGatewayAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDxGatewayAssociationArgs {
  dx_gateway_id: string;
  proposal_id?: string;
  vpn_gateway_id?: string;
  timeouts?: AwsDxGatewayAssociationArgsTimeouts;
}

export class aws_dx_gateway_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDxGatewayAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dx_gateway_association", resourceName);
  }

  get allowed_prefixes(): string {
    return `${this.resourceType}.${this.resourceName}.allowed_prefixes`;
  }

  get associated_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.associated_gateway_id`;
  }

  get associated_gateway_owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.associated_gateway_owner_account_id`;
  }

  get associated_gateway_type(): string {
    return `${this.resourceType}.${this.resourceName}.associated_gateway_type`;
  }

  get dx_gateway_association_id(): string {
    return `${this.resourceType}.${this.resourceName}.dx_gateway_association_id`;
  }

  get dx_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.dx_gateway_id`;
  }

  get dx_gateway_owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.dx_gateway_owner_account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
