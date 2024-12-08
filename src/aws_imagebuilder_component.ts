import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsImagebuilderComponentArgs {
  change_description?: string;
  description?: string;
  kms_key_id?: string;
  name: string;
  platform: string;
  skip_destroy?: boolean;
  supported_os_versions?: string[];
  tags?: { [key: string]: string };
  uri?: string;
  version: string;
}

export class aws_imagebuilder_component extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsImagebuilderComponentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_imagebuilder_component", resourceName);
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

  get encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted`;
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

  get platform(): string {
    return `${this.resourceType}.${this.resourceName}.platform`;
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
