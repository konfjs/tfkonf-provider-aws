import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsResourcegroupsResourceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsResourcegroupsResourceArgs {
  group_arn: string;
  resource_arn: string;
  timeouts?: AwsResourcegroupsResourceArgsTimeouts;
}

export class aws_resourcegroups_resource extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsResourcegroupsResourceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_resourcegroups_resource", resourceName);
  }

  get group_arn(): string {
    return `${this.resourceType}.${this.resourceName}.group_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }
}
