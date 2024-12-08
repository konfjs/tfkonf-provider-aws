import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDaxSubnetGroupArgs {
  description?: string;
  name: string;
  subnet_ids: string[];
}

export class aws_dax_subnet_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDaxSubnetGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dax_subnet_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
