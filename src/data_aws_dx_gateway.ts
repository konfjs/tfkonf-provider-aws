import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDxGatewayArgs {
  name: string;
}

export class data_aws_dx_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDxGatewayArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dx_gateway", resourceName);
  }

  get amazon_side_asn(): string {
    return `data.${this.resourceType}.${this.resourceName}.amazon_side_asn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_account_id`;
  }
}
