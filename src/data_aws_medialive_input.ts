import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMedialiveInputArgs {
  id: string;
}

export class data_aws_medialive_input extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsMedialiveInputArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_medialive_input", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get attached_channels(): string {
    return `data.${this.resourceType}.${this.resourceName}.attached_channels`;
  }

  get destinations(): string {
    return `data.${this.resourceType}.${this.resourceName}.destinations`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get input_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.input_class`;
  }

  get input_devices(): string {
    return `data.${this.resourceType}.${this.resourceName}.input_devices`;
  }

  get input_partner_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.input_partner_ids`;
  }

  get input_source_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.input_source_type`;
  }

  get media_connect_flows(): string {
    return `data.${this.resourceType}.${this.resourceName}.media_connect_flows`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get sources(): string {
    return `data.${this.resourceType}.${this.resourceName}.sources`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
