import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevopsguruResourceCollectionArgsCloudformation {
  stack_names: string[];
}

export interface AwsDevopsguruResourceCollectionArgsTags {
  app_boundary_key: string;
  tag_values: string[];
}

export interface AwsDevopsguruResourceCollectionArgs {
  type: string;
  cloudformation?: AwsDevopsguruResourceCollectionArgsCloudformation[];
  tags?: AwsDevopsguruResourceCollectionArgsTags[];
}

export class aws_devopsguru_resource_collection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDevopsguruResourceCollectionArgs) {
    const meta = {cloudformation:{isBlock:true},tags:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_devopsguru_resource_collection", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
