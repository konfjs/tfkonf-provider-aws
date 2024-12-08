import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMediaStoreContainerArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_media_store_container extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMediaStoreContainerArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_media_store_container", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
