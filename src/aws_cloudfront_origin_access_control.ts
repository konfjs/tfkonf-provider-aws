import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontOriginAccessControlArgs {
  description?: string;
  name: string;
  origin_access_control_origin_type: string;
  signing_behavior: string;
  signing_protocol: string;
}

export class aws_cloudfront_origin_access_control extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudfrontOriginAccessControlArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_origin_access_control", resourceName);
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

  get origin_access_control_origin_type(): string {
    return `${this.resourceType}.${this.resourceName}.origin_access_control_origin_type`;
  }

  get signing_behavior(): string {
    return `${this.resourceType}.${this.resourceName}.signing_behavior`;
  }

  get signing_protocol(): string {
    return `${this.resourceType}.${this.resourceName}.signing_protocol`;
  }
}
