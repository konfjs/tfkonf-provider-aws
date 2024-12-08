import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferUserArgsHomeDirectoryMappings {
  entry: string;
  target: string;
}

export interface AwsTransferUserArgsPosixProfile {
  gid: number;
  secondary_gids?: number[];
  uid: number;
}

export interface AwsTransferUserArgsTimeouts {
  delete?: string;
}

export interface AwsTransferUserArgs {
  home_directory?: string;
  home_directory_type?: string;
  policy?: string;
  role: string;
  server_id: string;
  tags?: { [key: string]: string };
  user_name: string;
  home_directory_mappings?: AwsTransferUserArgsHomeDirectoryMappings[];
  posix_profile?: AwsTransferUserArgsPosixProfile;
  timeouts?: AwsTransferUserArgsTimeouts;
}

export class aws_transfer_user extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsTransferUserArgs) {
    const meta = {home_directory_mappings:{isBlock:true},posix_profile:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_transfer_user", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get server_id(): string {
    return `${this.resourceType}.${this.resourceName}.server_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
