import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTranscribeVocabularyFilterArgs {
  language_code: string;
  tags?: { [key: string]: string };
  vocabulary_filter_file_uri?: string;
  vocabulary_filter_name: string;
  words?: string[];
}

export class aws_transcribe_vocabulary_filter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsTranscribeVocabularyFilterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_transcribe_vocabulary_filter", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get download_uri(): string {
    return `${this.resourceType}.${this.resourceName}.download_uri`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get language_code(): string {
    return `${this.resourceType}.${this.resourceName}.language_code`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vocabulary_filter_name(): string {
    return `${this.resourceType}.${this.resourceName}.vocabulary_filter_name`;
  }
}
