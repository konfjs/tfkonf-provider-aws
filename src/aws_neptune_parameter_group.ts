import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNeptuneParameterGroupArgsParameter {
  apply_method?: string;
  name: string;
  value: string;
}

export interface AwsNeptuneParameterGroupArgs {
  description?: string;
  family: string;
  tags?: { [key: string]: string };
  parameter?: AwsNeptuneParameterGroupArgsParameter[];
}

export class aws_neptune_parameter_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNeptuneParameterGroupArgs) {
    const meta = {parameter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_neptune_parameter_group", resourceName);
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
