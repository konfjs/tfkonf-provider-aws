import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockagentAgentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsBedrockagentAgentArgs {
  agent_name: string;
  agent_resource_role_arn: string;
  customer_encryption_key_arn?: string;
  description?: string;
  foundation_model: string;
  guardrail_configuration?: any[];
  tags?: { [key: string]: string };
  timeouts?: AwsBedrockagentAgentArgsTimeouts;
}

export class aws_bedrockagent_agent extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBedrockagentAgentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_bedrockagent_agent", resourceName);
  }

  get agent_arn(): string {
    return `${this.resourceType}.${this.resourceName}.agent_arn`;
  }

  get agent_id(): string {
    return `${this.resourceType}.${this.resourceName}.agent_id`;
  }

  get agent_name(): string {
    return `${this.resourceType}.${this.resourceName}.agent_name`;
  }

  get agent_resource_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.agent_resource_role_arn`;
  }

  get agent_version(): string {
    return `${this.resourceType}.${this.resourceName}.agent_version`;
  }

  get foundation_model(): string {
    return `${this.resourceType}.${this.resourceName}.foundation_model`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get idle_session_ttl_in_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.idle_session_ttl_in_seconds`;
  }

  get instruction(): string {
    return `${this.resourceType}.${this.resourceName}.instruction`;
  }

  get prepare_agent(): string {
    return `${this.resourceType}.${this.resourceName}.prepare_agent`;
  }

  get prompt_override_configuration(): string {
    return `${this.resourceType}.${this.resourceName}.prompt_override_configuration`;
  }

  get skip_resource_in_use_check(): string {
    return `${this.resourceType}.${this.resourceName}.skip_resource_in_use_check`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
