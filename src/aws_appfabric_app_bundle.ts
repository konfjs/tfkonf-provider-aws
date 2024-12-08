import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppfabricAppBundleArgs {
  customer_managed_key_arn?: string;
  tags?: { [key: string]: string };
}

export class aws_appfabric_app_bundle extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppfabricAppBundleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appfabric_app_bundle", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
