import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChatbotTeamsChannelConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsChatbotTeamsChannelConfigurationArgs {
  channel_id: string;
  configuration_name: string;
  iam_role_arn: string;
  tags?: { [key: string]: string };
  team_id: string;
  tenant_id: string;
  timeouts?: AwsChatbotTeamsChannelConfigurationArgsTimeouts;
}

export class aws_chatbot_teams_channel_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChatbotTeamsChannelConfigurationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chatbot_teams_channel_configuration", resourceName);
  }

  get channel_id(): string {
    return `${this.resourceType}.${this.resourceName}.channel_id`;
  }

  get channel_name(): string {
    return `${this.resourceType}.${this.resourceName}.channel_name`;
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

  get sns_topic_arns(): string {
    return `${this.resourceType}.${this.resourceName}.sns_topic_arns`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get team_id(): string {
    return `${this.resourceType}.${this.resourceName}.team_id`;
  }

  get team_name(): string {
    return `${this.resourceType}.${this.resourceName}.team_name`;
  }

  get tenant_id(): string {
    return `${this.resourceType}.${this.resourceName}.tenant_id`;
  }

  get user_authorization_required(): string {
    return `${this.resourceType}.${this.resourceName}.user_authorization_required`;
  }
}
