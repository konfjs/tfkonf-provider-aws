import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSesv2ConfigurationSetArgs {
  configuration_set_name: string;
}

export class data_aws_sesv2_configuration_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSesv2ConfigurationSetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sesv2_configuration_set", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration_set_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration_set_name`;
  }

  get delivery_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.delivery_options`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get reputation_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.reputation_options`;
  }

  get sending_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.sending_options`;
  }

  get suppression_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.suppression_options`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get tracking_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.tracking_options`;
  }

  get vdm_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.vdm_options`;
  }
}
