import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAmiArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsAmiArgsTimeouts {
  read?: string;
}

export interface DataAwsAmiArgs {
  executable_users?: string[];
  include_deprecated?: boolean;
  most_recent?: boolean;
  name_regex?: string;
  owners?: string[];
  filter?: DataAwsAmiArgsFilter[];
  timeouts?: DataAwsAmiArgsTimeouts;
}

export class data_aws_ami extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAmiArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ami", resourceName);
  }

  get architecture(): string {
    return `data.${this.resourceType}.${this.resourceName}.architecture`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get block_device_mappings(): string {
    return `data.${this.resourceType}.${this.resourceName}.block_device_mappings`;
  }

  get boot_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.boot_mode`;
  }

  get creation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get deprecation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.deprecation_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get ena_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.ena_support`;
  }

  get hypervisor(): string {
    return `data.${this.resourceType}.${this.resourceName}.hypervisor`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_id`;
  }

  get image_location(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_location`;
  }

  get image_owner_alias(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_owner_alias`;
  }

  get image_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_type`;
  }

  get imds_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.imds_support`;
  }

  get kernel_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kernel_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get platform(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform`;
  }

  get platform_details(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform_details`;
  }

  get product_codes(): string {
    return `data.${this.resourceType}.${this.resourceName}.product_codes`;
  }

  get public(): string {
    return `data.${this.resourceType}.${this.resourceName}.public`;
  }

  get ramdisk_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.ramdisk_id`;
  }

  get root_device_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_device_name`;
  }

  get root_device_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_device_type`;
  }

  get root_snapshot_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_snapshot_id`;
  }

  get sriov_net_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.sriov_net_support`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get state_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.state_reason`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get tpm_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.tpm_support`;
  }

  get usage_operation(): string {
    return `data.${this.resourceType}.${this.resourceName}.usage_operation`;
  }

  get virtualization_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.virtualization_type`;
  }
}
