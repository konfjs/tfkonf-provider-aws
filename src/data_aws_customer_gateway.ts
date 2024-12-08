import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCustomerGatewayArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsCustomerGatewayArgsTimeouts {
  read?: string;
}

export interface DataAwsCustomerGatewayArgs {
  filter?: DataAwsCustomerGatewayArgsFilter[];
  timeouts?: DataAwsCustomerGatewayArgsTimeouts;
}

export class data_aws_customer_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCustomerGatewayArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_customer_gateway", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get bgp_asn(): string {
    return `data.${this.resourceType}.${this.resourceName}.bgp_asn`;
  }

  get bgp_asn_extended(): string {
    return `data.${this.resourceType}.${this.resourceName}.bgp_asn_extended`;
  }

  get certificate_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get device_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.device_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
