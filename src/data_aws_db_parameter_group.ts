import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDbParameterGroupArgs {
  name: string;
}

export class data_aws_db_parameter_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDbParameterGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_db_parameter_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get family(): string {
    return `data.${this.resourceType}.${this.resourceName}.family`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
