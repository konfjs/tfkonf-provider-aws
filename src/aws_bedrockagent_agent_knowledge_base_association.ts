import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockagentAgentKnowledgeBaseAssociationArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsBedrockagentAgentKnowledgeBaseAssociationArgs {
  agent_id: string;
  description: string;
  knowledge_base_id: string;
  knowledge_base_state: string;
  timeouts?: AwsBedrockagentAgentKnowledgeBaseAssociationArgsTimeouts;
}

export class aws_bedrockagent_agent_knowledge_base_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBedrockagentAgentKnowledgeBaseAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_bedrockagent_agent_knowledge_base_association", resourceName);
  }

  get agent_id(): string {
    return `${this.resourceType}.${this.resourceName}.agent_id`;
  }

  get agent_version(): string {
    return `${this.resourceType}.${this.resourceName}.agent_version`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get knowledge_base_id(): string {
    return `${this.resourceType}.${this.resourceName}.knowledge_base_id`;
  }

  get knowledge_base_state(): string {
    return `${this.resourceType}.${this.resourceName}.knowledge_base_state`;
  }
}
