import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLaunchConfigurationArgs {
  name: string;
}

export class data_aws_launch_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLaunchConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_launch_configuration", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get associate_public_ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.associate_public_ip_address`;
  }

  get ebs_block_device(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_block_device`;
  }

  get ebs_optimized(): string {
    return `data.${this.resourceType}.${this.resourceName}.ebs_optimized`;
  }

  get enable_monitoring(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_monitoring`;
  }

  get ephemeral_block_device(): string {
    return `data.${this.resourceType}.${this.resourceName}.ephemeral_block_device`;
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

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_name`;
  }

  get metadata_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata_options`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get placement_tenancy(): string {
    return `data.${this.resourceType}.${this.resourceName}.placement_tenancy`;
  }

  get root_block_device(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_block_device`;
  }

  get security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get spot_price(): string {
    return `data.${this.resourceType}.${this.resourceName}.spot_price`;
  }

  get user_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_data`;
  }
}
