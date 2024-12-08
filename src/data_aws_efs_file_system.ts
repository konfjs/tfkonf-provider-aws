import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEfsFileSystemArgs {
}

export class data_aws_efs_file_system extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEfsFileSystemArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_efs_file_system", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get availability_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_id`;
  }

  get availability_zone_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_name`;
  }

  get creation_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_token`;
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get file_system_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get lifecycle_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.lifecycle_policy`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get performance_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.performance_mode`;
  }

  get protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.protection`;
  }

  get provisioned_throughput_in_mibps(): string {
    return `data.${this.resourceType}.${this.resourceName}.provisioned_throughput_in_mibps`;
  }

  get size_in_bytes(): string {
    return `data.${this.resourceType}.${this.resourceName}.size_in_bytes`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get throughput_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.throughput_mode`;
  }
}
