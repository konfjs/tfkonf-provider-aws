import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationFsxLustreFileSystemArgs {
  fsx_filesystem_arn: string;
  security_group_arns: string[];
  tags?: { [key: string]: string };
}

export class aws_datasync_location_fsx_lustre_file_system extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatasyncLocationFsxLustreFileSystemArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_datasync_location_fsx_lustre_file_system", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get fsx_filesystem_arn(): string {
    return `${this.resourceType}.${this.resourceName}.fsx_filesystem_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get security_group_arns(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_arns`;
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
