import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTranscribeMedicalVocabularyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsTranscribeMedicalVocabularyArgs {
  language_code: string;
  tags?: { [key: string]: string };
  vocabulary_file_uri: string;
  vocabulary_name: string;
  timeouts?: AwsTranscribeMedicalVocabularyArgsTimeouts;
}

export class aws_transcribe_medical_vocabulary extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsTranscribeMedicalVocabularyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_transcribe_medical_vocabulary", resourceName);
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

  get vocabulary_file_uri(): string {
    return `${this.resourceType}.${this.resourceName}.vocabulary_file_uri`;
  }

  get vocabulary_name(): string {
    return `${this.resourceType}.${this.resourceName}.vocabulary_name`;
  }
}
