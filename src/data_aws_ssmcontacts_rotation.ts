import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmcontactsRotationArgs {
  arn: string;
}

export class data_aws_ssmcontacts_rotation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsmcontactsRotationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssmcontacts_rotation", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get contact_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.contact_ids`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get recurrence(): string {
    return `data.${this.resourceType}.${this.resourceName}.recurrence`;
  }

  get start_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.start_time`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get time_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.time_zone_id`;
  }
}
