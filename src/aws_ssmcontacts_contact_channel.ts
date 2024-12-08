import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmcontactsContactChannelArgsDeliveryAddress {
  simple_address: string;
}

export interface AwsSsmcontactsContactChannelArgs {
  contact_id: string;
  name: string;
  type: string;
  delivery_address: AwsSsmcontactsContactChannelArgsDeliveryAddress;
}

export class aws_ssmcontacts_contact_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmcontactsContactChannelArgs) {
    const meta = {delivery_address:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssmcontacts_contact_channel", resourceName);
  }

  get activation_status(): string {
    return `${this.resourceType}.${this.resourceName}.activation_status`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get contact_id(): string {
    return `${this.resourceType}.${this.resourceName}.contact_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
