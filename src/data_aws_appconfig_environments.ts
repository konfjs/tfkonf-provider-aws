import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAppconfigEnvironmentsArgs {
  application_id: string;
}

export class data_aws_appconfig_environments extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAppconfigEnvironmentsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_appconfig_environments", resourceName);
  }

  get application_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_id`;
  }

  get environment_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.environment_ids`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
