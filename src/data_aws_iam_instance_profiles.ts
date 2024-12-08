import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamInstanceProfilesArgs {
  role_name: string;
}

export class data_aws_iam_instance_profiles extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamInstanceProfilesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_instance_profiles", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }

  get paths(): string {
    return `data.${this.resourceType}.${this.resourceName}.paths`;
  }

  get role_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_name`;
  }
}
