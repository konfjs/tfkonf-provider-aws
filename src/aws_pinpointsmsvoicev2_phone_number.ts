import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointsmsvoicev2PhoneNumberArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsPinpointsmsvoicev2PhoneNumberArgs {
  iso_country_code: string;
  message_type: string;
  number_capabilities: string[];
  number_type: string;
  registration_id?: string;
  tags?: { [key: string]: string };
  two_way_channel_arn?: string;
  timeouts?: AwsPinpointsmsvoicev2PhoneNumberArgsTimeouts;
}

export class aws_pinpointsmsvoicev2_phone_number extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPinpointsmsvoicev2PhoneNumberArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_pinpointsmsvoicev2_phone_number", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get deletion_protection_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.deletion_protection_enabled`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get iso_country_code(): string {
    return `${this.resourceType}.${this.resourceName}.iso_country_code`;
  }

  get message_type(): string {
    return `${this.resourceType}.${this.resourceName}.message_type`;
  }

  get monthly_leasing_price(): string {
    return `${this.resourceType}.${this.resourceName}.monthly_leasing_price`;
  }

  get number_capabilities(): string {
    return `${this.resourceType}.${this.resourceName}.number_capabilities`;
  }

  get number_type(): string {
    return `${this.resourceType}.${this.resourceName}.number_type`;
  }

  get opt_out_list_name(): string {
    return `${this.resourceType}.${this.resourceName}.opt_out_list_name`;
  }

  get phone_number(): string {
    return `${this.resourceType}.${this.resourceName}.phone_number`;
  }

  get self_managed_opt_outs_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.self_managed_opt_outs_enabled`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get two_way_channel_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.two_way_channel_enabled`;
  }
}
