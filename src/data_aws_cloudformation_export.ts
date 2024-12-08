import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudformationExportArgs {
  name: string;
}

export class data_aws_cloudformation_export extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudformationExportArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudformation_export", resourceName);
  }

  get exporting_stack_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.exporting_stack_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get value(): string {
    return `data.${this.resourceType}.${this.resourceName}.value`;
  }
}
