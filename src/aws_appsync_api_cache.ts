import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncApiCacheArgs {
  api_caching_behavior: string;
  api_id: string;
  at_rest_encryption_enabled?: boolean;
  transit_encryption_enabled?: boolean;
  ttl: number;
  type: string;
}

export class aws_appsync_api_cache extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppsyncApiCacheArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appsync_api_cache", resourceName);
  }

  get api_caching_behavior(): string {
    return `${this.resourceType}.${this.resourceName}.api_caching_behavior`;
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ttl(): string {
    return `${this.resourceType}.${this.resourceName}.ttl`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
