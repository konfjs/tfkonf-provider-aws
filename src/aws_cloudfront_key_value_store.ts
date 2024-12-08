import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontKeyValueStoreArgsTimeouts {
  create?: string;
}

export interface AwsCloudfrontKeyValueStoreArgs {
  comment?: string;
  name: string;
  timeouts?: AwsCloudfrontKeyValueStoreArgsTimeouts;
}

export class aws_cloudfront_key_value_store extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudfrontKeyValueStoreArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_key_value_store", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
