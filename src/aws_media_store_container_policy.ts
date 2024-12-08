import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMediaStoreContainerPolicyArgs {
  container_name: string;
  policy: string;
}

export class aws_media_store_container_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMediaStoreContainerPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_media_store_container_policy", resourceName);
  }

  get container_name(): string {
    return `${this.resourceType}.${this.resourceName}.container_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
