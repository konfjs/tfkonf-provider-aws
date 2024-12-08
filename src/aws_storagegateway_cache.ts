import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayCacheArgs {
  disk_id: string;
  gateway_arn: string;
}

export class aws_storagegateway_cache extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsStoragegatewayCacheArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_cache", resourceName);
  }

  get disk_id(): string {
    return `${this.resourceType}.${this.resourceName}.disk_id`;
  }

  get gateway_arn(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
