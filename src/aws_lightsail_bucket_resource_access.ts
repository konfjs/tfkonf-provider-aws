import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailBucketResourceAccessArgs {
  bucket_name: string;
  resource_name: string;
}

export class aws_lightsail_bucket_resource_access extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailBucketResourceAccessArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_bucket_resource_access", resourceName);
  }

  get bucket_name(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_name(): string {
    return `${this.resourceType}.${this.resourceName}.resource_name`;
  }
}
