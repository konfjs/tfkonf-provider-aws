import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsoadminPermissionSetsArgs {
  instance_arn: string;
}

export class data_aws_ssoadmin_permission_sets extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsoadminPermissionSetsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssoadmin_permission_sets", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_arn`;
  }
}
