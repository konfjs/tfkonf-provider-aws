import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockagentAgentActionGroupArgsActionGroupExecutor {
  custom_control?: string;
  lambda?: string;
}

export interface AwsBedrockagentAgentActionGroupArgsApiSchemaS3 {
  s3_bucket_name?: string;
  s3_object_key?: string;
}

export interface AwsBedrockagentAgentActionGroupArgsApiSchema {
  payload?: string;
  s3?: AwsBedrockagentAgentActionGroupArgsApiSchemaS3[];
}

export interface AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctionsFunctionsParameters {
  description?: string;
  map_block_key: string;
  required?: boolean;
  type: string;
}

export interface AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctionsFunctions {
  description?: string;
  name: string;
  parameters?: AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctionsFunctionsParameters[];
}

export interface AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctions {
  functions?: AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctionsFunctions[];
}

export interface AwsBedrockagentAgentActionGroupArgsFunctionSchema {
  member_functions?: AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctions[];
}

export interface AwsBedrockagentAgentActionGroupArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsBedrockagentAgentActionGroupArgs {
  action_group_name: string;
  agent_id: string;
  agent_version: string;
  description?: string;
  parent_action_group_signature?: string;
  action_group_executor?: AwsBedrockagentAgentActionGroupArgsActionGroupExecutor[];
  api_schema?: AwsBedrockagentAgentActionGroupArgsApiSchema[];
  function_schema?: AwsBedrockagentAgentActionGroupArgsFunctionSchema[];
  timeouts?: AwsBedrockagentAgentActionGroupArgsTimeouts;
}

export class aws_bedrockagent_agent_action_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBedrockagentAgentActionGroupArgs) {
    const meta = {action_group_executor:{isBlock:true},api_schema:{isBlock:true,s3:{isBlock:true}},function_schema:{isBlock:true,member_functions:{isBlock:true,functions:{isBlock:true,parameters:{isBlock:true}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_bedrockagent_agent_action_group", resourceName);
  }

  get action_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.action_group_id`;
  }

  get action_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.action_group_name`;
  }

  get action_group_state(): string {
    return `${this.resourceType}.${this.resourceName}.action_group_state`;
  }

  get agent_id(): string {
    return `${this.resourceType}.${this.resourceName}.agent_id`;
  }

  get agent_version(): string {
    return `${this.resourceType}.${this.resourceName}.agent_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get prepare_agent(): string {
    return `${this.resourceType}.${this.resourceName}.prepare_agent`;
  }

  get skip_resource_in_use_check(): string {
    return `${this.resourceType}.${this.resourceName}.skip_resource_in_use_check`;
  }
}
