import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLexBotArgs {
  name: string;
  version?: string;
}

export class data_aws_lex_bot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLexBotArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lex_bot", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get checksum(): string {
    return `data.${this.resourceType}.${this.resourceName}.checksum`;
  }

  get child_directed(): string {
    return `data.${this.resourceType}.${this.resourceName}.child_directed`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get detect_sentiment(): string {
    return `data.${this.resourceType}.${this.resourceName}.detect_sentiment`;
  }

  get enable_model_improvements(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_model_improvements`;
  }

  get failure_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.failure_reason`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get idle_session_ttl_in_seconds(): string {
    return `data.${this.resourceType}.${this.resourceName}.idle_session_ttl_in_seconds`;
  }

  get last_updated_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get locale(): string {
    return `data.${this.resourceType}.${this.resourceName}.locale`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get nlu_intent_confidence_threshold(): string {
    return `data.${this.resourceType}.${this.resourceName}.nlu_intent_confidence_threshold`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get voice_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.voice_id`;
  }
}
