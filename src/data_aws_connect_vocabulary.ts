import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectVocabularyArgs {
  instance_id: string;
}

export class data_aws_connect_vocabulary extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsConnectVocabularyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_vocabulary", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get content(): string {
    return `data.${this.resourceType}.${this.resourceName}.content`;
  }

  get failure_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.failure_reason`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get language_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.language_code`;
  }

  get last_modified_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vocabulary_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vocabulary_id`;
  }
}
