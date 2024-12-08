import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBedrockagentAgentVersionsArgsAgentVersionSummariesGuardrailConfiguration {
}

export interface DataAwsBedrockagentAgentVersionsArgsAgentVersionSummaries {
  guardrail_configuration?: DataAwsBedrockagentAgentVersionsArgsAgentVersionSummariesGuardrailConfiguration[];
}

export interface DataAwsBedrockagentAgentVersionsArgs {
  agent_id: string;
  agent_version_summaries?: DataAwsBedrockagentAgentVersionsArgsAgentVersionSummaries[];
}

export class data_aws_bedrockagent_agent_versions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsBedrockagentAgentVersionsArgs) {
    const meta = {agent_version_summaries:{isBlock:true,guardrail_configuration:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "aws_bedrockagent_agent_versions", resourceName);
  }

  get agent_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.agent_id`;
  }
}
