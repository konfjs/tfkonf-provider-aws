import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLaunchConfigurationArgsEbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
  no_device?: boolean;
}

export interface AwsLaunchConfigurationArgsEphemeralBlockDevice {
  device_name: string;
  no_device?: boolean;
  virtual_name?: string;
}

export interface AwsLaunchConfigurationArgsMetadataOptions {
}

export interface AwsLaunchConfigurationArgsRootBlockDevice {
  delete_on_termination?: boolean;
}

export interface AwsLaunchConfigurationArgs {
  enable_monitoring?: boolean;
  iam_instance_profile?: string;
  image_id: string;
  instance_type: string;
  placement_tenancy?: string;
  security_groups?: string[];
  spot_price?: string;
  user_data?: string;
  user_data_base64?: string;
  ebs_block_device?: AwsLaunchConfigurationArgsEbsBlockDevice[];
  ephemeral_block_device?: AwsLaunchConfigurationArgsEphemeralBlockDevice[];
  metadata_options?: AwsLaunchConfigurationArgsMetadataOptions;
  root_block_device?: AwsLaunchConfigurationArgsRootBlockDevice;
}

export class aws_launch_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLaunchConfigurationArgs) {
    const meta = {ebs_block_device:{isBlock:true},ephemeral_block_device:{isBlock:true},metadata_options:{isBlock:true},root_block_device:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_launch_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get associate_public_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.associate_public_ip_address`;
  }

  get ebs_optimized(): string {
    return `${this.resourceType}.${this.resourceName}.ebs_optimized`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_id(): string {
    return `${this.resourceType}.${this.resourceName}.image_id`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get key_name(): string {
    return `${this.resourceType}.${this.resourceName}.key_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }
}
