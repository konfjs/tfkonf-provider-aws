import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexv2modelsSlotTypeArgsCompositeSlotTypeSettingSubSlots {
  name: string;
  slot_type_id: string;
}

export interface AwsLexv2modelsSlotTypeArgsCompositeSlotTypeSetting {
  sub_slots?: AwsLexv2modelsSlotTypeArgsCompositeSlotTypeSettingSubSlots[];
}

export interface AwsLexv2modelsSlotTypeArgsExternalSourceSettingGrammarSlotTypeSettingSource {
  kms_key_arn: string;
  s3_bucket_name: string;
  s3_object_key: string;
}

export interface AwsLexv2modelsSlotTypeArgsExternalSourceSettingGrammarSlotTypeSetting {
  source?: AwsLexv2modelsSlotTypeArgsExternalSourceSettingGrammarSlotTypeSettingSource[];
}

export interface AwsLexv2modelsSlotTypeArgsExternalSourceSetting {
  grammar_slot_type_setting?: AwsLexv2modelsSlotTypeArgsExternalSourceSettingGrammarSlotTypeSetting[];
}

export interface AwsLexv2modelsSlotTypeArgsSlotTypeValuesSampleValue {
  value: string;
}

export interface AwsLexv2modelsSlotTypeArgsSlotTypeValuesSynonyms {
  value: string;
}

export interface AwsLexv2modelsSlotTypeArgsSlotTypeValues {
  sample_value?: AwsLexv2modelsSlotTypeArgsSlotTypeValuesSampleValue[];
  synonyms?: AwsLexv2modelsSlotTypeArgsSlotTypeValuesSynonyms[];
}

export interface AwsLexv2modelsSlotTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLexv2modelsSlotTypeArgsValueSelectionSettingAdvancedRecognitionSetting {
  audio_recognition_strategy?: string;
}

export interface AwsLexv2modelsSlotTypeArgsValueSelectionSettingRegexFilter {
  pattern: string;
}

export interface AwsLexv2modelsSlotTypeArgsValueSelectionSetting {
  resolution_strategy: string;
  advanced_recognition_setting?: AwsLexv2modelsSlotTypeArgsValueSelectionSettingAdvancedRecognitionSetting[];
  regex_filter?: AwsLexv2modelsSlotTypeArgsValueSelectionSettingRegexFilter[];
}

export interface AwsLexv2modelsSlotTypeArgs {
  bot_id: string;
  bot_version: string;
  description?: string;
  locale_id: string;
  name: string;
  parent_slot_type_signature?: string;
  composite_slot_type_setting?: AwsLexv2modelsSlotTypeArgsCompositeSlotTypeSetting[];
  external_source_setting?: AwsLexv2modelsSlotTypeArgsExternalSourceSetting[];
  slot_type_values?: AwsLexv2modelsSlotTypeArgsSlotTypeValues[];
  timeouts?: AwsLexv2modelsSlotTypeArgsTimeouts;
  value_selection_setting?: AwsLexv2modelsSlotTypeArgsValueSelectionSetting[];
}

export class aws_lexv2models_slot_type extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLexv2modelsSlotTypeArgs) {
    const meta = {composite_slot_type_setting:{isBlock:true,sub_slots:{isBlock:true}},external_source_setting:{isBlock:true,grammar_slot_type_setting:{isBlock:true,source:{isBlock:true}}},slot_type_values:{isBlock:true,sample_value:{isBlock:true},synonyms:{isBlock:true}},timeouts:{isBlock:true},value_selection_setting:{isBlock:true,advanced_recognition_setting:{isBlock:true},regex_filter:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_lexv2models_slot_type", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get slot_type_id(): string {
    return `${this.resourceType}.${this.resourceName}.slot_type_id`;
  }
}
