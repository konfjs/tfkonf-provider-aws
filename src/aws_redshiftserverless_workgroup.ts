import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftserverlessWorkgroupArgsConfigParameter {
  parameter_key: string;
  parameter_value: string;
}

export interface AwsRedshiftserverlessWorkgroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRedshiftserverlessWorkgroupArgs {
  enhanced_vpc_routing?: boolean;
  max_capacity?: number;
  namespace_name: string;
  publicly_accessible?: boolean;
  tags?: { [key: string]: string };
  workgroup_name: string;
  config_parameter?: AwsRedshiftserverlessWorkgroupArgsConfigParameter[];
  timeouts?: AwsRedshiftserverlessWorkgroupArgsTimeouts;
}

export class aws_redshiftserverless_workgroup extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessWorkgroupArgs) {
    const meta = {config_parameter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_redshiftserverless_workgroup", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get base_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.base_capacity`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get namespace_name(): string {
    return `${this.resourceType}.${this.resourceName}.namespace_name`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get workgroup_id(): string {
    return `${this.resourceType}.${this.resourceName}.workgroup_id`;
  }

  get workgroup_name(): string {
    return `${this.resourceType}.${this.resourceName}.workgroup_name`;
  }
}
