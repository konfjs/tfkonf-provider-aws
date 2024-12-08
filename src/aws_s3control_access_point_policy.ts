import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlAccessPointPolicyArgs {
  access_point_arn: string;
  policy: string;
}

export class aws_s3control_access_point_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3controlAccessPointPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3control_access_point_policy", resourceName);
  }

  get access_point_arn(): string {
    return `${this.resourceType}.${this.resourceName}.access_point_arn`;
  }

  get has_public_access_policy(): string {
    return `${this.resourceType}.${this.resourceName}.has_public_access_policy`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
