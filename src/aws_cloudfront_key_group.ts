import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontKeyGroupArgs {
  comment?: string;
  items: string[];
  name: string;
}

export class aws_cloudfront_key_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudfrontKeyGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_key_group", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get items(): string {
    return `${this.resourceType}.${this.resourceName}.items`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
