import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectHoursOfOperationArgs {
  instance_id: string;
}

export class data_aws_connect_hours_of_operation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsConnectHoursOfOperationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_hours_of_operation", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get config(): string {
    return `data.${this.resourceType}.${this.resourceName}.config`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get hours_of_operation_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hours_of_operation_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get time_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.time_zone`;
  }
}
