import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationS3ArgsS3Config {
  bucket_access_role_arn: string;
}

export interface AwsDatasyncLocationS3Args {
  agent_arns?: string[];
  s3_bucket_arn: string;
  subdirectory: string;
  tags?: { [key: string]: string };
  s3_config: AwsDatasyncLocationS3ArgsS3Config;
}

export class aws_datasync_location_s3 extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatasyncLocationS3Args) {
    const meta = {s3_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datasync_location_s3", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get s3_bucket_arn(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket_arn`;
  }

  get s3_storage_class(): string {
    return `${this.resourceType}.${this.resourceName}.s3_storage_class`;
  }

  get subdirectory(): string {
    return `${this.resourceType}.${this.resourceName}.subdirectory`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get uri(): string {
    return `${this.resourceType}.${this.resourceName}.uri`;
  }
}
