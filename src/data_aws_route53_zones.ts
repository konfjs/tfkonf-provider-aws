import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53ZonesArgs {
}

export class data_aws_route53_zones extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRoute53ZonesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_zones", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
