import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPaymentcryptographyKeyArgsKeyAttributesKeyModesOfUse {
}

export interface AwsPaymentcryptographyKeyArgsKeyAttributes {
  key_algorithm: string;
  key_class: string;
  key_usage: string;
  key_modes_of_use?: AwsPaymentcryptographyKeyArgsKeyAttributesKeyModesOfUse;
}

export interface AwsPaymentcryptographyKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsPaymentcryptographyKeyArgs {
  exportable: boolean;
  tags?: { [key: string]: string };
  key_attributes?: AwsPaymentcryptographyKeyArgsKeyAttributes;
  timeouts?: AwsPaymentcryptographyKeyArgsTimeouts;
}

export class aws_paymentcryptography_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPaymentcryptographyKeyArgs) {
    const meta = {key_attributes:{isBlock:true,key_modes_of_use:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_paymentcryptography_key", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get deletion_window_in_days(): string {
    return `${this.resourceType}.${this.resourceName}.deletion_window_in_days`;
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get exportable(): string {
    return `${this.resourceType}.${this.resourceName}.exportable`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_check_value(): string {
    return `${this.resourceType}.${this.resourceName}.key_check_value`;
  }

  get key_check_value_algorithm(): string {
    return `${this.resourceType}.${this.resourceName}.key_check_value_algorithm`;
  }

  get key_origin(): string {
    return `${this.resourceType}.${this.resourceName}.key_origin`;
  }

  get key_state(): string {
    return `${this.resourceType}.${this.resourceName}.key_state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
