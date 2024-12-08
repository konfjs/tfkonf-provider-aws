import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockagentAgentAliasArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsBedrockagentAgentAliasArgs {
  agent_alias_name: string;
  agent_id: string;
  description?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsBedrockagentAgentAliasArgsTimeouts;
}

export class aws_bedrockagent_agent_alias extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBedrockagentAgentAliasArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_bedrockagent_agent_alias", resourceName);
  }

  get agent_alias_arn(): string {
    return `${this.resourceType}.${this.resourceName}.agent_alias_arn`;
  }

  get agent_alias_id(): string {
    return `${this.resourceType}.${this.resourceName}.agent_alias_id`;
  }

  get agent_alias_name(): string {
    return `${this.resourceType}.${this.resourceName}.agent_alias_name`;
  }

  get agent_id(): string {
    return `${this.resourceType}.${this.resourceName}.agent_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get routing_configuration(): string {
    return `${this.resourceType}.${this.resourceName}.routing_configuration`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
