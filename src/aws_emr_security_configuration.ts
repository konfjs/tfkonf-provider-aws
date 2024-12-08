import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrSecurityConfigurationArgs {
  configuration: string;
}

export class aws_emr_security_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEmrSecurityConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_emr_security_configuration", resourceName);
  }

  get configuration(): string {
    return `${this.resourceType}.${this.resourceName}.configuration`;
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }
}
