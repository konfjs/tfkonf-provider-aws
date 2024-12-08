import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEfsMountTargetArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEfsMountTargetArgs {
  file_system_id: string;
  subnet_id: string;
  timeouts?: AwsEfsMountTargetArgsTimeouts;
}

export class aws_efs_mount_target extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEfsMountTargetArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_efs_mount_target", resourceName);
  }

  get availability_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone_id`;
  }

  get availability_zone_name(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zone_name`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
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

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get mount_target_dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.mount_target_dns_name`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get security_groups(): string {
    return `${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }
}
