import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsResourcegroupsGroupArgsConfigurationParameters {
  name: string;
  values: string[];
}

export interface AwsResourcegroupsGroupArgsConfiguration {
  type: string;
  parameters?: AwsResourcegroupsGroupArgsConfigurationParameters[];
}

export interface AwsResourcegroupsGroupArgsResourceQuery {
  query: string;
  type?: string;
}

export interface AwsResourcegroupsGroupArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsResourcegroupsGroupArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  configuration?: AwsResourcegroupsGroupArgsConfiguration[];
  resource_query?: AwsResourcegroupsGroupArgsResourceQuery;
  timeouts?: AwsResourcegroupsGroupArgsTimeouts;
}

export class aws_resourcegroups_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsResourcegroupsGroupArgs) {
    const meta = {configuration:{isBlock:true,parameters:{isBlock:true}},resource_query:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_resourcegroups_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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
