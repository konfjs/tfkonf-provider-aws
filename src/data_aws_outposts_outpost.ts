import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOutpostsOutpostArgs {
  owner_id?: string;
}

export class data_aws_outposts_outpost extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOutpostsOutpostArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_outposts_outpost", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get availability_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_id`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get lifecycle_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.lifecycle_status`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get site_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.site_arn`;
  }

  get site_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.site_id`;
  }

  get supported_hardware_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_hardware_type`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
