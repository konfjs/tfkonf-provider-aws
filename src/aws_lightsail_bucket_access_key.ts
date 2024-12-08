import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailBucketAccessKeyArgs {
  bucket_name: string;
}

export class aws_lightsail_bucket_access_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailBucketAccessKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_bucket_access_key", resourceName);
  }

  get access_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.access_key_id`;
  }

  get bucket_name(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_name`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get secret_access_key(): string {
    return `${this.resourceType}.${this.resourceName}.secret_access_key`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
