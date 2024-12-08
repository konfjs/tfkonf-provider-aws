import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDbInstancesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsDbInstancesArgs {
  filter?: DataAwsDbInstancesArgsFilter[];
}

export class data_aws_db_instances extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDbInstancesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_db_instances", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_arns`;
  }

  get instance_identifiers(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_identifiers`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
