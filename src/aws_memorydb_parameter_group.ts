import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMemorydbParameterGroupArgsParameter {
  name: string;
  value: string;
}

export interface AwsMemorydbParameterGroupArgs {
  description?: string;
  family: string;
  tags?: { [key: string]: string };
  parameter?: AwsMemorydbParameterGroupArgsParameter[];
}

export class aws_memorydb_parameter_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMemorydbParameterGroupArgs) {
    const meta = {parameter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_memorydb_parameter_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get family(): string {
    return `${this.resourceType}.${this.resourceName}.family`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}