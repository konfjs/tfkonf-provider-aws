import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlObjectLambdaAccessPointPolicyArgs {
  name: string;
  policy: string;
}

export class aws_s3control_object_lambda_access_point_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3controlObjectLambdaAccessPointPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3control_object_lambda_access_point_policy", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get has_public_access_policy(): string {
    return `${this.resourceType}.${this.resourceName}.has_public_access_policy`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
