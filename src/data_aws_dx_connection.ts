import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDxConnectionArgs {
  name: string;
}

export class data_aws_dx_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDxConnectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dx_connection", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_device(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_device`;
  }

  get bandwidth(): string {
    return `data.${this.resourceType}.${this.resourceName}.bandwidth`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_account_id`;
  }

  get partner_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.partner_name`;
  }

  get provider_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vlan_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vlan_id`;
  }
}
