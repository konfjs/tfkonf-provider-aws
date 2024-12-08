import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsReservedInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRdsReservedInstanceArgs {
  instance_count?: number;
  offering_id: string;
  reservation_id?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsRdsReservedInstanceArgsTimeouts;
}

export class aws_rds_reserved_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRdsReservedInstanceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_reserved_instance", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get currency_code(): string {
    return `${this.resourceType}.${this.resourceName}.currency_code`;
  }

  get db_instance_class(): string {
    return `${this.resourceType}.${this.resourceName}.db_instance_class`;
  }

  get duration(): string {
    return `${this.resourceType}.${this.resourceName}.duration`;
  }

  get fixed_price(): string {
    return `${this.resourceType}.${this.resourceName}.fixed_price`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lease_id(): string {
    return `${this.resourceType}.${this.resourceName}.lease_id`;
  }

  get multi_az(): string {
    return `${this.resourceType}.${this.resourceName}.multi_az`;
  }

  get offering_id(): string {
    return `${this.resourceType}.${this.resourceName}.offering_id`;
  }

  get offering_type(): string {
    return `${this.resourceType}.${this.resourceName}.offering_type`;
  }

  get product_description(): string {
    return `${this.resourceType}.${this.resourceName}.product_description`;
  }

  get recurring_charges(): string {
    return `${this.resourceType}.${this.resourceName}.recurring_charges`;
  }

  get start_time(): string {
    return `${this.resourceType}.${this.resourceName}.start_time`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get usage_price(): string {
    return `${this.resourceType}.${this.resourceName}.usage_price`;
  }
}
