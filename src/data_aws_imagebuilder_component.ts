import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderComponentArgs {
  arn: string;
}

export class data_aws_imagebuilder_component extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsImagebuilderComponentArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_component", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get change_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.change_description`;
  }

  get data(): string {
    return `data.${this.resourceType}.${this.resourceName}.data`;
  }

  get date_created(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_created`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner`;
  }

  get platform(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform`;
  }

  get supported_os_versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_os_versions`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
