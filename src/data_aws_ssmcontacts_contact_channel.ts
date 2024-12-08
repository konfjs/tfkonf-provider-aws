import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmcontactsContactChannelArgs {
  arn: string;
}

export class data_aws_ssmcontacts_contact_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSsmcontactsContactChannelArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssmcontacts_contact_channel", resourceName);
  }

  get activation_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.activation_status`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get contact_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.contact_id`;
  }

  get delivery_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.delivery_address`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
