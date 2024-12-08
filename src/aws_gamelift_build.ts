import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGameliftBuildArgsStorageLocation {
  bucket: string;
  key: string;
  object_version?: string;
  role_arn: string;
}

export interface AwsGameliftBuildArgs {
  name: string;
  operating_system: string;
  tags?: { [key: string]: string };
  version?: string;
  storage_location: AwsGameliftBuildArgsStorageLocation;
}

export class aws_gamelift_build extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGameliftBuildArgs) {
    const meta = {storage_location:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_gamelift_build", resourceName);
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

  get operating_system(): string {
    return `${this.resourceType}.${this.resourceName}.operating_system`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
