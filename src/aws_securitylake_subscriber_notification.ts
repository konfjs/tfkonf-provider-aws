import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecuritylakeSubscriberNotificationArgsConfigurationHttpsNotificationConfiguration {
  authorization_api_key_name?: string;
  authorization_api_key_value?: string;
  endpoint: string;
  http_method?: string;
  target_role_arn: string;
}

export interface AwsSecuritylakeSubscriberNotificationArgsConfigurationSqsNotificationConfiguration {
}

export interface AwsSecuritylakeSubscriberNotificationArgsConfiguration {
  https_notification_configuration?: AwsSecuritylakeSubscriberNotificationArgsConfigurationHttpsNotificationConfiguration[];
  sqs_notification_configuration?: AwsSecuritylakeSubscriberNotificationArgsConfigurationSqsNotificationConfiguration[];
}

export interface AwsSecuritylakeSubscriberNotificationArgs {
  subscriber_id: string;
  configuration?: AwsSecuritylakeSubscriberNotificationArgsConfiguration[];
}

export class aws_securitylake_subscriber_notification extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecuritylakeSubscriberNotificationArgs) {
    const meta = {configuration:{isBlock:true,https_notification_configuration:{isBlock:true},sqs_notification_configuration:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_securitylake_subscriber_notification", resourceName);
  }

  get endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get subscriber_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.subscriber_endpoint`;
  }

  get subscriber_id(): string {
    return `${this.resourceType}.${this.resourceName}.subscriber_id`;
  }
}
