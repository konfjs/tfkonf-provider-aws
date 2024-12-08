import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontFunctionArgs {
  code: string;
  comment?: string;
  key_value_store_associations?: string[];
  name: string;
  publish?: boolean;
  runtime: string;
}

export class aws_cloudfront_function extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudfrontFunctionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_function", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get code(): string {
    return `${this.resourceType}.${this.resourceName}.code`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get live_stage_etag(): string {
    return `${this.resourceType}.${this.resourceName}.live_stage_etag`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get runtime(): string {
    return `${this.resourceType}.${this.resourceName}.runtime`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
