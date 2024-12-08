import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCeCostAllocationTagArgs {
  status: string;
  tag_key: string;
}

export class aws_ce_cost_allocation_tag extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCeCostAllocationTagArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ce_cost_allocation_tag", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tag_key(): string {
    return `${this.resourceType}.${this.resourceName}.tag_key`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
