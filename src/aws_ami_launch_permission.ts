import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmiLaunchPermissionArgs {
  account_id?: string;
  group?: string;
  image_id: string;
  organization_arn?: string;
  organizational_unit_arn?: string;
}

export class aws_ami_launch_permission extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAmiLaunchPermissionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ami_launch_permission", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_id(): string {
    return `${this.resourceType}.${this.resourceName}.image_id`;
  }
}
