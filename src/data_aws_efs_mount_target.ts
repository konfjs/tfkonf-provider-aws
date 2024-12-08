import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEfsMountTargetArgs {
  access_point_id?: string;
}

export class data_aws_efs_mount_target extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEfsMountTargetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_efs_mount_target", resourceName);
  }

  get availability_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_id`;
  }

  get availability_zone_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_name`;
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get file_system_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_system_arn`;
  }

  get file_system_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get mount_target_dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.mount_target_dns_name`;
  }

  get mount_target_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.mount_target_id`;
  }

  get network_interface_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get subnet_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_id`;
  }
}
