import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockGuardrailArgsContentPolicyConfigFiltersConfig {
  input_strength: string;
  output_strength: string;
  type: string;
}

export interface AwsBedrockGuardrailArgsContentPolicyConfig {
  filters_config?: AwsBedrockGuardrailArgsContentPolicyConfigFiltersConfig[];
}

export interface AwsBedrockGuardrailArgsContextualGroundingPolicyConfigFiltersConfig {
  threshold: number;
  type: string;
}

export interface AwsBedrockGuardrailArgsContextualGroundingPolicyConfig {
  filters_config?: AwsBedrockGuardrailArgsContextualGroundingPolicyConfigFiltersConfig[];
}

export interface AwsBedrockGuardrailArgsSensitiveInformationPolicyConfigPiiEntitiesConfig {
  action: string;
  type: string;
}

export interface AwsBedrockGuardrailArgsSensitiveInformationPolicyConfigRegexesConfig {
  action: string;
  name: string;
  pattern: string;
}

export interface AwsBedrockGuardrailArgsSensitiveInformationPolicyConfig {
  pii_entities_config?: AwsBedrockGuardrailArgsSensitiveInformationPolicyConfigPiiEntitiesConfig[];
  regexes_config?: AwsBedrockGuardrailArgsSensitiveInformationPolicyConfigRegexesConfig[];
}

export interface AwsBedrockGuardrailArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsBedrockGuardrailArgsTopicPolicyConfigTopicsConfig {
  definition: string;
  name: string;
  type: string;
}

export interface AwsBedrockGuardrailArgsTopicPolicyConfig {
  topics_config?: AwsBedrockGuardrailArgsTopicPolicyConfigTopicsConfig[];
}

export interface AwsBedrockGuardrailArgsWordPolicyConfigManagedWordListsConfig {
  type: string;
}

export interface AwsBedrockGuardrailArgsWordPolicyConfigWordsConfig {
  text: string;
}

export interface AwsBedrockGuardrailArgsWordPolicyConfig {
  managed_word_lists_config?: AwsBedrockGuardrailArgsWordPolicyConfigManagedWordListsConfig[];
  words_config?: AwsBedrockGuardrailArgsWordPolicyConfigWordsConfig[];
}

export interface AwsBedrockGuardrailArgs {
  blocked_input_messaging: string;
  blocked_outputs_messaging: string;
  kms_key_arn?: string;
  name: string;
  tags?: { [key: string]: string };
  content_policy_config?: AwsBedrockGuardrailArgsContentPolicyConfig[];
  contextual_grounding_policy_config?: AwsBedrockGuardrailArgsContextualGroundingPolicyConfig[];
  sensitive_information_policy_config?: AwsBedrockGuardrailArgsSensitiveInformationPolicyConfig[];
  timeouts?: AwsBedrockGuardrailArgsTimeouts;
  topic_policy_config?: AwsBedrockGuardrailArgsTopicPolicyConfig[];
  word_policy_config?: AwsBedrockGuardrailArgsWordPolicyConfig[];
}

export class aws_bedrock_guardrail extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBedrockGuardrailArgs) {
    const meta = {content_policy_config:{isBlock:true,filters_config:{isBlock:true}},contextual_grounding_policy_config:{isBlock:true,filters_config:{isBlock:true}},sensitive_information_policy_config:{isBlock:true,pii_entities_config:{isBlock:true},regexes_config:{isBlock:true}},timeouts:{isBlock:true},topic_policy_config:{isBlock:true,topics_config:{isBlock:true}},word_policy_config:{isBlock:true,managed_word_lists_config:{isBlock:true},words_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_bedrock_guardrail", resourceName);
  }

  get blocked_input_messaging(): string {
    return `${this.resourceType}.${this.resourceName}.blocked_input_messaging`;
  }

  get blocked_outputs_messaging(): string {
    return `${this.resourceType}.${this.resourceName}.blocked_outputs_messaging`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get guardrail_arn(): string {
    return `${this.resourceType}.${this.resourceName}.guardrail_arn`;
  }

  get guardrail_id(): string {
    return `${this.resourceType}.${this.resourceName}.guardrail_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
