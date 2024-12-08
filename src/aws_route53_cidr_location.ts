import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53CidrLocationArgs {
  cidr_blocks: string[];
  cidr_collection_id: string;
  name: string;
}

export class aws_route53_cidr_location extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRoute53CidrLocationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_cidr_location", resourceName);
  }

  get cidr_blocks(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_blocks`;
  }

  get cidr_collection_id(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_collection_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
