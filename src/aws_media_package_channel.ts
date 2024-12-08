import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMediaPackageChannelArgs {
  channel_id: string;
  description?: string;
  tags?: { [key: string]: string };
}

export class aws_media_package_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMediaPackageChannelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_media_package_channel", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get channel_id(): string {
    return `${this.resourceType}.${this.resourceName}.channel_id`;
  }

  get hls_ingest(): string {
    return `${this.resourceType}.${this.resourceName}.hls_ingest`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
