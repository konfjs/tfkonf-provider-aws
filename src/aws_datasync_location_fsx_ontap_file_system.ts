import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocolNfsMountOptions {
  version?: string;
}

export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocolNfs {
  mount_options: AwsDatasyncLocationFsxOntapFileSystemArgsProtocolNfsMountOptions;
}

export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocolSmbMountOptions {
  version?: string;
}

export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocolSmb {
  domain?: string;
  password: string;
  user: string;
  mount_options: AwsDatasyncLocationFsxOntapFileSystemArgsProtocolSmbMountOptions;
}

export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocol {
  nfs?: AwsDatasyncLocationFsxOntapFileSystemArgsProtocolNfs;
  smb?: AwsDatasyncLocationFsxOntapFileSystemArgsProtocolSmb;
}

export interface AwsDatasyncLocationFsxOntapFileSystemArgs {
  security_group_arns: string[];
  storage_virtual_machine_arn: string;
  tags?: { [key: string]: string };
  protocol: AwsDatasyncLocationFsxOntapFileSystemArgsProtocol;
}

export class aws_datasync_location_fsx_ontap_file_system extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatasyncLocationFsxOntapFileSystemArgs) {
    const meta = {protocol:{isBlock:true,nfs:{isBlock:true,mount_options:{isBlock:true}},smb:{isBlock:true,mount_options:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_datasync_location_fsx_ontap_file_system", resourceName);
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

  get storage_virtual_machine_arn(): string {
    return `${this.resourceType}.${this.resourceName}.storage_virtual_machine_arn`;
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
