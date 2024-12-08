import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsInternetGatewayArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsInternetGatewayArgsTimeouts {
  read?: string;
}

export interface DataAwsInternetGatewayArgs {
  filter?: DataAwsInternetGatewayArgsFilter[];
  timeouts?: DataAwsInternetGatewayArgsTimeouts;
}

export class data_aws_internet_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsInternetGatewayArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_internet_gateway", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get attachments(): string {
    return `data.${this.resourceType}.${this.resourceName}.attachments`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get internet_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.internet_gateway_id`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
