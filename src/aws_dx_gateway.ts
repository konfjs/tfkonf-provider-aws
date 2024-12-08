import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxGatewayArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDxGatewayArgs {
  amazon_side_asn: string;
  name: string;
  timeouts?: AwsDxGatewayArgsTimeouts;
}

export class aws_dx_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDxGatewayArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dx_gateway", resourceName);
  }

  get amazon_side_asn(): string {
    return `${this.resourceType}.${this.resourceName}.amazon_side_asn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account_id`;
  }
}
