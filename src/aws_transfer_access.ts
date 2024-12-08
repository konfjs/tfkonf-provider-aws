import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferAccessArgsHomeDirectoryMappings {
  entry: string;
  target: string;
}

export interface AwsTransferAccessArgsPosixProfile {
  gid: number;
  secondary_gids?: number[];
  uid: number;
}

export interface AwsTransferAccessArgs {
  external_id: string;
  home_directory?: string;
  home_directory_type?: string;
  policy?: string;
  role?: string;
  server_id: string;
  home_directory_mappings?: AwsTransferAccessArgsHomeDirectoryMappings[];
  posix_profile?: AwsTransferAccessArgsPosixProfile;
}

export class aws_transfer_access extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsTransferAccessArgs) {
    const meta = {home_directory_mappings:{isBlock:true},posix_profile:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_transfer_access", resourceName);
  }

  get external_id(): string {
    return `${this.resourceType}.${this.resourceName}.external_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get server_id(): string {
    return `${this.resourceType}.${this.resourceName}.server_id`;
  }
}
