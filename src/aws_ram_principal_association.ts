import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRamPrincipalAssociationArgs {
  principal: string;
  resource_share_arn: string;
}

export class aws_ram_principal_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRamPrincipalAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ram_principal_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get principal(): string {
    return `${this.resourceType}.${this.resourceName}.principal`;
  }

  get resource_share_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_share_arn`;
  }
}
