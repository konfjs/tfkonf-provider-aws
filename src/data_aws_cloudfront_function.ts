import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontFunctionArgs {
  name: string;
  stage: string;
}

export class data_aws_cloudfront_function extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudfrontFunctionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_function", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get code(): string {
    return `data.${this.resourceType}.${this.resourceName}.code`;
  }

  get comment(): string {
    return `data.${this.resourceType}.${this.resourceName}.comment`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_value_store_associations(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_value_store_associations`;
  }

  get last_modified_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get runtime(): string {
    return `data.${this.resourceType}.${this.resourceName}.runtime`;
  }

  get stage(): string {
    return `data.${this.resourceType}.${this.resourceName}.stage`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }
}
