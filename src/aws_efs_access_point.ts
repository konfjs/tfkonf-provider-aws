import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEfsAccessPointArgsPosixUser {
  gid: number;
  secondary_gids?: number[];
  uid: number;
}

export interface AwsEfsAccessPointArgsRootDirectoryCreationInfo {
  owner_gid: number;
  owner_uid: number;
  permissions: string;
}

export interface AwsEfsAccessPointArgsRootDirectory {
  creation_info?: AwsEfsAccessPointArgsRootDirectoryCreationInfo;
}

export interface AwsEfsAccessPointArgs {
  file_system_id: string;
  tags?: { [key: string]: string };
  posix_user?: AwsEfsAccessPointArgsPosixUser;
  root_directory?: AwsEfsAccessPointArgsRootDirectory;
}

export class aws_efs_access_point extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEfsAccessPointArgs) {
    const meta = {posix_user:{isBlock:true},root_directory:{isBlock:true,creation_info:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_efs_access_point", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get file_system_arn(): string {
    return `${this.resourceType}.${this.resourceName}.file_system_arn`;
  }

  get file_system_id(): string {
    return `${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
