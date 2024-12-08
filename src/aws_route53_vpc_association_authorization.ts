import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53VpcAssociationAuthorizationArgs {
  vpc_id: string;
  zone_id: string;
}

export class aws_route53_vpc_association_authorization extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53VpcAssociationAuthorizationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_vpc_association_authorization", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
