import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxGatewayAssociationProposalArgs {
  associated_gateway_id: string;
  dx_gateway_id: string;
  dx_gateway_owner_account_id: string;
}

export class aws_dx_gateway_association_proposal extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDxGatewayAssociationProposalArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dx_gateway_association_proposal", resourceName);
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
