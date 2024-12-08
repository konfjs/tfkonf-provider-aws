import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmServiceSettingArgs {
  setting_id: string;
  setting_value: string;
}

export class aws_ssm_service_setting extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsmServiceSettingArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssm_service_setting", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get setting_id(): string {
    return `${this.resourceType}.${this.resourceName}.setting_id`;
  }

  get setting_value(): string {
    return `${this.resourceType}.${this.resourceName}.setting_value`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
