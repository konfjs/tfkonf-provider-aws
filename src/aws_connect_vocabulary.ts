import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectVocabularyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsConnectVocabularyArgs {
  content: string;
  instance_id: string;
  language_code: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsConnectVocabularyArgsTimeouts;
}

export class aws_connect_vocabulary extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConnectVocabularyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_connect_vocabulary", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get content(): string {
    return `${this.resourceType}.${this.resourceName}.content`;
  }

  get failure_reason(): string {
    return `${this.resourceType}.${this.resourceName}.failure_reason`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get language_code(): string {
    return `${this.resourceType}.${this.resourceName}.language_code`;
  }

  get last_modified_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vocabulary_id(): string {
    return `${this.resourceType}.${this.resourceName}.vocabulary_id`;
  }
}
