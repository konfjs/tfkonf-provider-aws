import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppconfigEnvironmentArgsMonitor {
  alarm_arn: string;
  alarm_role_arn?: string;
}

export interface AwsAppconfigEnvironmentArgs {
  application_id: string;
  name: string;
  tags?: { [key: string]: string };
  monitor?: AwsAppconfigEnvironmentArgsMonitor[];
}

export class aws_appconfig_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppconfigEnvironmentArgs) {
    const meta = {monitor:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appconfig_environment", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get environment_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
