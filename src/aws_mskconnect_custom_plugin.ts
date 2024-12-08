import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskconnectCustomPluginArgsLocationS3 {
  bucket_arn: string;
  file_key: string;
  object_version?: string;
}

export interface AwsMskconnectCustomPluginArgsLocation {
  s3: AwsMskconnectCustomPluginArgsLocationS3;
}

export interface AwsMskconnectCustomPluginArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsMskconnectCustomPluginArgs {
  content_type: string;
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  location: AwsMskconnectCustomPluginArgsLocation;
  timeouts?: AwsMskconnectCustomPluginArgsTimeouts;
}

export class aws_mskconnect_custom_plugin extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMskconnectCustomPluginArgs) {
    const meta = {location:{isBlock:true,s3:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_mskconnect_custom_plugin", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get content_type(): string {
    return `${this.resourceType}.${this.resourceName}.content_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_revision(): string {
    return `${this.resourceType}.${this.resourceName}.latest_revision`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
