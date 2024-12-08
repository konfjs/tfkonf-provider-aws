import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRdsReservedInstanceOfferingArgs {
  db_instance_class: string;
  duration: number;
  multi_az: boolean;
  offering_type: string;
  product_description: string;
}

export class data_aws_rds_reserved_instance_offering extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRdsReservedInstanceOfferingArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_rds_reserved_instance_offering", resourceName);
  }

  get currency_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.currency_code`;
  }

  get db_instance_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_instance_class`;
  }

  get duration(): string {
    return `data.${this.resourceType}.${this.resourceName}.duration`;
  }

  get fixed_price(): string {
    return `data.${this.resourceType}.${this.resourceName}.fixed_price`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get multi_az(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_az`;
  }

  get offering_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.offering_id`;
  }

  get offering_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.offering_type`;
  }

  get product_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.product_description`;
  }
}
