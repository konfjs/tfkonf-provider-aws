import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontOriginAccessControlArgs {
  id: string;
}

export class data_aws_cloudfront_origin_access_control extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudfrontOriginAccessControlArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_origin_access_control", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get origin_access_control_origin_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.origin_access_control_origin_type`;
  }

  get signing_behavior(): string {
    return `data.${this.resourceType}.${this.resourceName}.signing_behavior`;
  }

  get signing_protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.signing_protocol`;
  }
}
