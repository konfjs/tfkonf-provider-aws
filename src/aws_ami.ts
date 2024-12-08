import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmiArgsEbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
  encrypted?: boolean;
  iops?: number;
  outpost_arn?: string;
  snapshot_id?: string;
  volume_type?: string;
}

export interface AwsAmiArgsEphemeralBlockDevice {
  device_name: string;
  virtual_name: string;
}

export interface AwsAmiArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsAmiArgs {
  architecture?: string;
  boot_mode?: string;
  deprecation_time?: string;
  description?: string;
  ena_support?: boolean;
  imds_support?: string;
  kernel_id?: string;
  name: string;
  ramdisk_id?: string;
  root_device_name?: string;
  sriov_net_support?: string;
  tags?: { [key: string]: string };
  tpm_support?: string;
  virtualization_type?: string;
  ebs_block_device?: AwsAmiArgsEbsBlockDevice[];
  ephemeral_block_device?: AwsAmiArgsEphemeralBlockDevice[];
  timeouts?: AwsAmiArgsTimeouts;
}

export class aws_ami extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAmiArgs) {
    const meta = {ebs_block_device:{isBlock:true},ephemeral_block_device:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ami", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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

  get root_snapshot_id(): string {
    return `${this.resourceType}.${this.resourceName}.root_snapshot_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get usage_operation(): string {
    return `${this.resourceType}.${this.resourceName}.usage_operation`;
  }
}
