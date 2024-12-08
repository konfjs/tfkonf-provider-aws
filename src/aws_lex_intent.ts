import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexIntentArgsConclusionStatementMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsConclusionStatement {
  response_card?: string;
  message: AwsLexIntentArgsConclusionStatementMessage[];
}

export interface AwsLexIntentArgsConfirmationPromptMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsConfirmationPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexIntentArgsConfirmationPromptMessage[];
}

export interface AwsLexIntentArgsDialogCodeHook {
  message_version: string;
  uri: string;
}

export interface AwsLexIntentArgsFollowUpPromptPromptMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsFollowUpPromptPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexIntentArgsFollowUpPromptPromptMessage[];
}

export interface AwsLexIntentArgsFollowUpPromptRejectionStatementMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsFollowUpPromptRejectionStatement {
  response_card?: string;
  message: AwsLexIntentArgsFollowUpPromptRejectionStatementMessage[];
}

export interface AwsLexIntentArgsFollowUpPrompt {
  prompt: AwsLexIntentArgsFollowUpPromptPrompt;
  rejection_statement: AwsLexIntentArgsFollowUpPromptRejectionStatement;
}

export interface AwsLexIntentArgsFulfillmentActivityCodeHook {
  message_version: string;
  uri: string;
}

export interface AwsLexIntentArgsFulfillmentActivity {
  type: string;
  code_hook?: AwsLexIntentArgsFulfillmentActivityCodeHook;
}

export interface AwsLexIntentArgsRejectionStatementMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsRejectionStatement {
  response_card?: string;
  message: AwsLexIntentArgsRejectionStatementMessage[];
}

export interface AwsLexIntentArgsSlotValueElicitationPromptMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsSlotValueElicitationPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexIntentArgsSlotValueElicitationPromptMessage[];
}

export interface AwsLexIntentArgsSlot {
  description?: string;
  name: string;
  priority?: number;
  response_card?: string;
  sample_utterances?: string[];
  slot_constraint: string;
  slot_type: string;
  slot_type_version?: string;
  value_elicitation_prompt?: AwsLexIntentArgsSlotValueElicitationPrompt;
}

export interface AwsLexIntentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLexIntentArgs {
  create_version?: boolean;
  description?: string;
  name: string;
  parent_intent_signature?: string;
  sample_utterances?: string[];
  conclusion_statement?: AwsLexIntentArgsConclusionStatement;
  confirmation_prompt?: AwsLexIntentArgsConfirmationPrompt;
  dialog_code_hook?: AwsLexIntentArgsDialogCodeHook;
  follow_up_prompt?: AwsLexIntentArgsFollowUpPrompt;
  fulfillment_activity: AwsLexIntentArgsFulfillmentActivity;
  rejection_statement?: AwsLexIntentArgsRejectionStatement;
  slot?: AwsLexIntentArgsSlot[];
  timeouts?: AwsLexIntentArgsTimeouts;
}

export class aws_lex_intent extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLexIntentArgs) {
    const meta = {conclusion_statement:{isBlock:true,message:{isBlock:true}},confirmation_prompt:{isBlock:true,message:{isBlock:true}},dialog_code_hook:{isBlock:true},follow_up_prompt:{isBlock:true,prompt:{isBlock:true,message:{isBlock:true}},rejection_statement:{isBlock:true,message:{isBlock:true}}},fulfillment_activity:{isBlock:true,code_hook:{isBlock:true}},rejection_statement:{isBlock:true,message:{isBlock:true}},slot:{isBlock:true,value_elicitation_prompt:{isBlock:true,message:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lex_intent", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get checksum(): string {
    return `${this.resourceType}.${this.resourceName}.checksum`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
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

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
