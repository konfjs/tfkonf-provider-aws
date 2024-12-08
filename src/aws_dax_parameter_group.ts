import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDaxParameterGroupArgsParameters {
  name: string;
  value: string;
}

export interface AwsDaxParameterGroupArgs {
  description?: string;
  name: string;
  parameters?: AwsDaxParameterGroupArgsParameters[];
}

export class aws_dax_parameter_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDaxParameterGroupArgs) {
    const meta = {parameters:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dax_parameter_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
