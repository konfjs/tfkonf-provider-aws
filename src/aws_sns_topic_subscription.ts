import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnsTopicSubscriptionArgs {
  confirmation_timeout_in_minutes?: number;
  delivery_policy?: string;
  endpoint: string;
  endpoint_auto_confirms?: boolean;
  filter_policy?: string;
  protocol: string;
  raw_message_delivery?: boolean;
  redrive_policy?: string;
  replay_policy?: string;
  subscription_role_arn?: string;
  topic_arn: string;
}

export class aws_sns_topic_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSnsTopicSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sns_topic_subscription", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get confirmation_was_authenticated(): string {
    return `${this.resourceType}.${this.resourceName}.confirmation_was_authenticated`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get filter_policy_scope(): string {
    return `${this.resourceType}.${this.resourceName}.filter_policy_scope`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get pending_confirmation(): string {
    return `${this.resourceType}.${this.resourceName}.pending_confirmation`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get topic_arn(): string {
    return `${this.resourceType}.${this.resourceName}.topic_arn`;
  }
}
