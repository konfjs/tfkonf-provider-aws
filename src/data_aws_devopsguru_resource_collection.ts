import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDevopsguruResourceCollectionArgsCloudformation {
}

export interface DataAwsDevopsguruResourceCollectionArgsTags {
}

export interface DataAwsDevopsguruResourceCollectionArgs {
  type: string;
  cloudformation?: DataAwsDevopsguruResourceCollectionArgsCloudformation[];
  tags?: DataAwsDevopsguruResourceCollectionArgsTags[];
}

export class data_aws_devopsguru_resource_collection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDevopsguruResourceCollectionArgs) {
    const meta = {cloudformation:{isBlock:true},tags:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_devopsguru_resource_collection", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
