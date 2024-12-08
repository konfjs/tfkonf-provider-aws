import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOutpostsOutpostsArgs {
}

export class data_aws_outposts_outposts extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOutpostsOutpostsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_outposts_outposts", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get availability_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get site_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.site_id`;
  }
}
