import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventPermissionArgsCondition {
  key: string;
  type: string;
  value: string;
}

export interface AwsCloudwatchEventPermissionArgs {
  action?: string;
  event_bus_name?: string;
  principal: string;
  statement_id: string;
  condition?: AwsCloudwatchEventPermissionArgsCondition;
}

export class aws_cloudwatch_event_permission extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchEventPermissionArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_event_permission", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get principal(): string {
    return `${this.resourceType}.${this.resourceName}.principal`;
  }

  get statement_id(): string {
    return `${this.resourceType}.${this.resourceName}.statement_id`;
  }
}
