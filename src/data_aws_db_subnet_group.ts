import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDbSubnetGroupArgs {
  name: string;
}

export class data_aws_db_subnet_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDbSubnetGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_db_subnet_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get supported_network_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_network_types`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
