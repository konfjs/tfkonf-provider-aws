import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontPublicKeyArgs {
  comment?: string;
  encoded_key: string;
}

export class aws_cloudfront_public_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudfrontPublicKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_public_key", resourceName);
  }

  get caller_reference(): string {
    return `${this.resourceType}.${this.resourceName}.caller_reference`;
  }

  get encoded_key(): string {
    return `${this.resourceType}.${this.resourceName}.encoded_key`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }
}
