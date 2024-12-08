import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsChatbotSlackWorkspaceArgs {
  slack_team_name: string;
}

export class data_aws_chatbot_slack_workspace extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsChatbotSlackWorkspaceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_chatbot_slack_workspace", resourceName);
  }

  get slack_team_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.slack_team_id`;
  }

  get slack_team_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.slack_team_name`;
  }
}
