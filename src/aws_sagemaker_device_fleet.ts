import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerDeviceFleetArgsOutputConfig {
  kms_key_id?: string;
  s3_output_location: string;
}

export interface AwsSagemakerDeviceFleetArgs {
  description?: string;
  device_fleet_name: string;
  enable_iot_role_alias?: boolean;
  role_arn: string;
  tags?: { [key: string]: string };
  output_config: AwsSagemakerDeviceFleetArgsOutputConfig;
}

export class aws_sagemaker_device_fleet extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerDeviceFleetArgs) {
    const meta = {output_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_device_fleet", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get device_fleet_name(): string {
    return `${this.resourceType}.${this.resourceName}.device_fleet_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get iot_role_alias(): string {
    return `${this.resourceType}.${this.resourceName}.iot_role_alias`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
