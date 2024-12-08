import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ZoneAssociationArgs {
  vpc_id: string;
  zone_id: string;
}

export class aws_route53_zone_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53ZoneAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_zone_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owning_account(): string {
    return `${this.resourceType}.${this.resourceName}.owning_account`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get vpc_region(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_region`;
  }

  get zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.zone_id`;
  }
}
