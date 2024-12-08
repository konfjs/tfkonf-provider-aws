import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlAccessGrantsInstanceResourcePolicyArgs {
  policy: string;
}

export class aws_s3control_access_grants_instance_resource_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3controlAccessGrantsInstanceResourcePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3control_access_grants_instance_resource_policy", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
