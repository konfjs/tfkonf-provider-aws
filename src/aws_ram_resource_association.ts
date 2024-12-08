import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRamResourceAssociationArgs {
  resource_arn: string;
  resource_share_arn: string;
}

export class aws_ram_resource_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRamResourceAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ram_resource_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get resource_share_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_share_arn`;
  }
}
