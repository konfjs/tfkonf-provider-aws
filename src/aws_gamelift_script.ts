import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGameliftScriptArgsStorageLocation {
  bucket: string;
  key: string;
  object_version?: string;
  role_arn: string;
}

export interface AwsGameliftScriptArgs {
  name: string;
  tags?: { [key: string]: string };
  version?: string;
  zip_file?: string;
  storage_location?: AwsGameliftScriptArgsStorageLocation;
}

export class aws_gamelift_script extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGameliftScriptArgs) {
    const meta = {storage_location:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_gamelift_script", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
