import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmUploadArgs {
  content_type?: string;
  name: string;
  project_arn: string;
  type: string;
}

export class aws_devicefarm_upload extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDevicefarmUploadArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_devicefarm_upload", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get category(): string {
    return `${this.resourceType}.${this.resourceName}.category`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metadata(): string {
    return `${this.resourceType}.${this.resourceName}.metadata`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project_arn(): string {
    return `${this.resourceType}.${this.resourceName}.project_arn`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
