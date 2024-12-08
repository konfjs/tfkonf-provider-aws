import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLaunchTemplateArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsLaunchTemplateArgsTimeouts {
  read?: string;
}

export interface DataAwsLaunchTemplateArgs {
  filter?: DataAwsLaunchTemplateArgsFilter[];
  timeouts?: DataAwsLaunchTemplateArgsTimeouts;
}

export class data_aws_launch_template extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLaunchTemplateArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_launch_template", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get block_device_mappings(): string {
    return `data.${this.resourceType}.${this.resourceName}.block_device_mappings`;
  }

  get capacity_reservation_specification(): string {
    return `data.${this.resourceType}.${this.resourceName}.capacity_reservation_specification`;
  }

  get cpu_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.cpu_options`;
  }

  get credit_specification(): string {
    return `data.${this.resourceType}.${this.resourceName}.credit_specification`;
  }

  get default_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_version`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get disable_api_stop(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_api_stop`;
  }

  get disable_api_termination(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_api_termination`;
  }

  get ebs_optimized(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_optimized`;
  }

  get elastic_gpu_specifications(): string {
    return `data.${this.resourceType}.${this.resourceName}.elastic_gpu_specifications`;
  }

  get elastic_inference_accelerator(): string {
    return `data.${this.resourceType}.${this.resourceName}.elastic_inference_accelerator`;
  }

  get enclave_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.enclave_options`;
  }

  get hibernation_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.hibernation_options`;
  }

  get iam_instance_profile(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_instance_profile`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_id`;
  }

  get instance_initiated_shutdown_behavior(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_initiated_shutdown_behavior`;
  }

  get instance_market_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_market_options`;
  }

  get instance_requirements(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_requirements`;
  }

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get kernel_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kernel_id`;
  }

  get key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_name`;
  }

  get latest_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.latest_version`;
  }

  get license_specification(): string {
    return `data.${this.resourceType}.${this.resourceName}.license_specification`;
  }

  get maintenance_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_options`;
  }

  get metadata_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata_options`;
  }

  get monitoring(): string {
    return `data.${this.resourceType}.${this.resourceName}.monitoring`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network_interfaces(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interfaces`;
  }

  get placement(): string {
    return `data.${this.resourceType}.${this.resourceName}.placement`;
  }

  get private_dns_name_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_dns_name_options`;
  }

  get ram_disk_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.ram_disk_id`;
  }

  get security_group_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_names`;
  }

  get tag_specifications(): string {
    return `data.${this.resourceType}.${this.resourceName}.tag_specifications`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get user_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_data`;
  }

  get vpc_security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
