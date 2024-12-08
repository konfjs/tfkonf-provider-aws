import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftHsmConfigurationArgs {
  description: string;
  hsm_configuration_identifier: string;
  hsm_ip_address: string;
  hsm_partition_name: string;
  hsm_partition_password: string;
  hsm_server_public_certificate: string;
  tags?: { [key: string]: string };
}

export class aws_redshift_hsm_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftHsmConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_hsm_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get hsm_configuration_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_configuration_identifier`;
  }

  get hsm_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_ip_address`;
  }

  get hsm_partition_name(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_partition_name`;
  }

  get hsm_partition_password(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_partition_password`;
  }

  get hsm_server_public_certificate(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_server_public_certificate`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
