import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMemorydbParameterGroupArgs {
  name: string;
}

export class data_aws_memorydb_parameter_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsMemorydbParameterGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_memorydb_parameter_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get family(): string {
    return `data.${this.resourceType}.${this.resourceName}.family`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get parameter(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameter`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
