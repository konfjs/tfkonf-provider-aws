import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEfsFileSystemArgsLifecyclePolicy {
  transition_to_archive?: string;
  transition_to_ia?: string;
  transition_to_primary_storage_class?: string;
}

export interface AwsEfsFileSystemArgsProtection {
}

export interface AwsEfsFileSystemArgs {
  provisioned_throughput_in_mibps?: number;
  tags?: { [key: string]: string };
  throughput_mode?: string;
  lifecycle_policy?: AwsEfsFileSystemArgsLifecyclePolicy[];
  protection?: AwsEfsFileSystemArgsProtection;
}

export class aws_efs_file_system extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEfsFileSystemArgs) {
    const meta = {lifecycle_policy:{isBlock:true},protection:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_efs_file_system", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone_id`;
  }

  get availability_zone_name(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone_name`;
  }

  get creation_token(): string {
    return `${this.resourceType}.${this.resourceName}.creation_token`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get encrypted(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get number_of_mount_targets(): string {
    return `${this.resourceType}.${this.resourceName}.number_of_mount_targets`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get performance_mode(): string {
    return `${this.resourceType}.${this.resourceName}.performance_mode`;
  }

  get size_in_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.size_in_bytes`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
