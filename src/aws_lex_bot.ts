import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexBotArgsAbortStatementMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexBotArgsAbortStatement {
  response_card?: string;
  message: AwsLexBotArgsAbortStatementMessage[];
}

export interface AwsLexBotArgsClarificationPromptMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexBotArgsClarificationPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexBotArgsClarificationPromptMessage[];
}

export interface AwsLexBotArgsIntent {
  intent_name: string;
  intent_version: string;
}

export interface AwsLexBotArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLexBotArgs {
  child_directed: boolean;
  create_version?: boolean;
  description?: string;
  detect_sentiment?: boolean;
  enable_model_improvements?: boolean;
  idle_session_ttl_in_seconds?: number;
  locale?: string;
  name: string;
  nlu_intent_confidence_threshold?: number;
  process_behavior?: string;
  abort_statement: AwsLexBotArgsAbortStatement;
  clarification_prompt?: AwsLexBotArgsClarificationPrompt;
  intent: AwsLexBotArgsIntent[];
  timeouts?: AwsLexBotArgsTimeouts;
}

export class aws_lex_bot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLexBotArgs) {
    const meta = {abort_statement:{isBlock:true,message:{isBlock:true}},clarification_prompt:{isBlock:true,message:{isBlock:true}},intent:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lex_bot", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get checksum(): string {
    return `${this.resourceType}.${this.resourceName}.checksum`;
  }

  get child_directed(): string {
    return `${this.resourceType}.${this.resourceName}.child_directed`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get failure_reason(): string {
    return `${this.resourceType}.${this.resourceName}.failure_reason`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }

  get voice_id(): string {
    return `${this.resourceType}.${this.resourceName}.voice_id`;
  }
}
