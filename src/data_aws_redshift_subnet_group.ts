import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftSubnetGroupArgs {
  name: string;
}

export class data_aws_redshift_subnet_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRedshiftSubnetGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_redshift_subnet_group", resourceName);
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

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
