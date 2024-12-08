import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDocdbOrderableDbInstanceArgs {
  engine?: string;
  license_model?: string;
  preferred_instance_classes?: string[];
}

export class data_aws_docdb_orderable_db_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDocdbOrderableDbInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_docdb_orderable_db_instance", resourceName);
  }

  get availability_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_class`;
  }

  get vpc(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc`;
  }
}
