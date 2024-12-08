import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodestarnotificationsNotificationRuleArgsTarget {
  address: string;
  type?: string;
}

export interface AwsCodestarnotificationsNotificationRuleArgs {
  detail_type: string;
  event_type_ids: string[];
  name: string;
  resource: string;
  status?: string;
  tags?: { [key: string]: string };
  target?: AwsCodestarnotificationsNotificationRuleArgsTarget[];
}

export class aws_codestarnotifications_notification_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodestarnotificationsNotificationRuleArgs) {
    const meta = {target:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codestarnotifications_notification_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get detail_type(): string {
    return `${this.resourceType}.${this.resourceName}.detail_type`;
  }

  get event_type_ids(): string {
    return `${this.resourceType}.${this.resourceName}.event_type_ids`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get resource(): string {
    return `${this.resourceType}.${this.resourceName}.resource`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
