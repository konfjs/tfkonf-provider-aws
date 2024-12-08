import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmDocumentArgsAttachmentsSource {
  key: string;
  name?: string;
  values: string[];
}

export interface AwsSsmDocumentArgs {
  content: string;
  document_format?: string;
  document_type: string;
  name: string;
  permissions?: { [key: string]: string };
  tags?: { [key: string]: string };
  target_type?: string;
  version_name?: string;
  attachments_source?: AwsSsmDocumentArgsAttachmentsSource[];
}

export class aws_ssm_document extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmDocumentArgs) {
    const meta = {attachments_source:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssm_document", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get content(): string {
    return `${this.resourceType}.${this.resourceName}.content`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get default_version(): string {
    return `${this.resourceType}.${this.resourceName}.default_version`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get document_type(): string {
    return `${this.resourceType}.${this.resourceName}.document_type`;
  }

  get document_version(): string {
    return `${this.resourceType}.${this.resourceName}.document_version`;
  }

  get hash(): string {
    return `${this.resourceType}.${this.resourceName}.hash`;
  }

  get hash_type(): string {
    return `${this.resourceType}.${this.resourceName}.hash_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_version(): string {
    return `${this.resourceType}.${this.resourceName}.latest_version`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get parameter(): string {
    return `${this.resourceType}.${this.resourceName}.parameter`;
  }

  get platform_types(): string {
    return `${this.resourceType}.${this.resourceName}.platform_types`;
  }

  get schema_version(): string {
    return `${this.resourceType}.${this.resourceName}.schema_version`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
