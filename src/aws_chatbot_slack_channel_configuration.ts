import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChatbotSlackChannelConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsChatbotSlackChannelConfigurationArgs {
  configuration_name: string;
  iam_role_arn: string;
  slack_channel_id: string;
  slack_team_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsChatbotSlackChannelConfigurationArgsTimeouts;
}

export class aws_chatbot_slack_channel_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChatbotSlackChannelConfigurationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chatbot_slack_channel_configuration", resourceName);
  }

  get chat_configuration_arn(): string {
    return `${this.resourceType}.${this.resourceName}.chat_configuration_arn`;
  }

  get configuration_name(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_name`;
  }

  get guardrail_policy_arns(): string {
    return `${this.resourceType}.${this.resourceName}.guardrail_policy_arns`;
  }

  get iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get logging_level(): string {
    return `${this.resourceType}.${this.resourceName}.logging_level`;
  }

  get slack_channel_id(): string {
    return `${this.resourceType}.${this.resourceName}.slack_channel_id`;
  }

  get slack_channel_name(): string {
    return `${this.resourceType}.${this.resourceName}.slack_channel_name`;
  }

  get slack_team_id(): string {
    return `${this.resourceType}.${this.resourceName}.slack_team_id`;
  }

  get slack_team_name(): string {
    return `${this.resourceType}.${this.resourceName}.slack_team_name`;
  }

  get sns_topic_arns(): string {
    return `${this.resourceType}.${this.resourceName}.sns_topic_arns`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_authorization_required(): string {
    return `${this.resourceType}.${this.resourceName}.user_authorization_required`;
  }
}
