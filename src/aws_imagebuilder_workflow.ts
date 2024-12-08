import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsImagebuilderWorkflowArgs {
  change_description?: string;
  description?: string;
  kms_key_id?: string;
  name: string;
  tags?: { [key: string]: string };
  type: string;
  uri?: string;
  version: string;
}

export class aws_imagebuilder_workflow extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsImagebuilderWorkflowArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_imagebuilder_workflow", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data(): string {
    return `${this.resourceType}.${this.resourceName}.data`;
  }

  get date_created(): string {
    return `${this.resourceType}.${this.resourceName}.date_created`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
