import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmiFromInstanceArgsEbsBlockDevice {
}

export interface AwsAmiFromInstanceArgsEphemeralBlockDevice {
}

export interface AwsAmiFromInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsAmiFromInstanceArgs {
  deprecation_time?: string;
  description?: string;
  name: string;
  snapshot_without_reboot?: boolean;
  source_instance_id: string;
  tags?: { [key: string]: string };
  ebs_block_device?: AwsAmiFromInstanceArgsEbsBlockDevice[];
  ephemeral_block_device?: AwsAmiFromInstanceArgsEphemeralBlockDevice[];
  timeouts?: AwsAmiFromInstanceArgsTimeouts;
}

export class aws_ami_from_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAmiFromInstanceArgs) {
    const meta = {ebs_block_device:{isBlock:true},ephemeral_block_device:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ami_from_instance", resourceName);
  }

  get architecture(): string {
    return `${this.resourceType}.${this.resourceName}.architecture`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get boot_mode(): string {
    return `${this.resourceType}.${this.resourceName}.boot_mode`;
  }

  get ena_support(): string {
    return `${this.resourceType}.${this.resourceName}.ena_support`;
  }

  get hypervisor(): string {
    return `${this.resourceType}.${this.resourceName}.hypervisor`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_location(): string {
    return `${this.resourceType}.${this.resourceName}.image_location`;
  }

  get image_owner_alias(): string {
    return `${this.resourceType}.${this.resourceName}.image_owner_alias`;
  }

  get image_type(): string {
    return `${this.resourceType}.${this.resourceName}.image_type`;
  }

  get imds_support(): string {
    return `${this.resourceType}.${this.resourceName}.imds_support`;
  }

  get kernel_id(): string {
    return `${this.resourceType}.${this.resourceName}.kernel_id`;
  }

  get manage_ebs_snapshots(): string {
    return `${this.resourceType}.${this.resourceName}.manage_ebs_snapshots`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get platform(): string {
    return `${this.resourceType}.${this.resourceName}.platform`;
  }

  get platform_details(): string {
    return `${this.resourceType}.${this.resourceName}.platform_details`;
  }

  get public(): string {
    return `${this.resourceType}.${this.resourceName}.public`;
  }

  get ramdisk_id(): string {
    return `${this.resourceType}.${this.resourceName}.ramdisk_id`;
  }

  get root_device_name(): string {
    return `${this.resourceType}.${this.resourceName}.root_device_name`;
  }

  get root_snapshot_id(): string {
    return `${this.resourceType}.${this.resourceName}.root_snapshot_id`;
  }

  get source_instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_instance_id`;
  }

  get sriov_net_support(): string {
    return `${this.resourceType}.${this.resourceName}.sriov_net_support`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tpm_support(): string {
    return `${this.resourceType}.${this.resourceName}.tpm_support`;
  }

  get usage_operation(): string {
    return `${this.resourceType}.${this.resourceName}.usage_operation`;
  }

  get virtualization_type(): string {
    return `${this.resourceType}.${this.resourceName}.virtualization_type`;
  }
}
