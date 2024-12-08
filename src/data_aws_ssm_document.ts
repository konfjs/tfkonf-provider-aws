import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmDocumentArgs {
  document_format?: string;
  document_version?: string;
  name: string;
}

export class data_aws_ssm_document extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsmDocumentArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssm_document", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get content(): string {
    return `data.${this.resourceType}.${this.resourceName}.content`;
  }

  get document_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.document_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
