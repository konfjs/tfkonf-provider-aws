import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexv2modelsBotLocaleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLexv2modelsBotLocaleArgsVoiceSettings {
  voice_id: string;
}

export interface AwsLexv2modelsBotLocaleArgs {
  bot_id: string;
  bot_version: string;
  description?: string;
  locale_id: string;
  n_lu_intent_confidence_threshold: number;
  timeouts?: AwsLexv2modelsBotLocaleArgsTimeouts;
  voice_settings?: AwsLexv2modelsBotLocaleArgsVoiceSettings[];
}

export class aws_lexv2models_bot_locale extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLexv2modelsBotLocaleArgs) {
    const meta = {timeouts:{isBlock:true},voice_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lexv2models_bot_locale", resourceName);
  }

  get bot_id(): string {
    return `${this.resourceType}.${this.resourceName}.bot_id`;
  }

  get bot_version(): string {
    return `${this.resourceType}.${this.resourceName}.bot_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get locale_id(): string {
    return `${this.resourceType}.${this.resourceName}.locale_id`;
  }

  get n_lu_intent_confidence_threshold(): string {
    return `${this.resourceType}.${this.resourceName}.n_lu_intent_confidence_threshold`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
