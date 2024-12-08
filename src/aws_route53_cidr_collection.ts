import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53CidrCollectionArgs {
  name: string;
}

export class aws_route53_cidr_collection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53CidrCollectionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_cidr_collection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
