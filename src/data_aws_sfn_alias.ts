import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSfnAliasArgs {
  description?: string;
  name: string;
  statemachine_arn: string;
}

export class data_aws_sfn_alias extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSfnAliasArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sfn_alias", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get routing_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.routing_configuration`;
  }

  get statemachine_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.statemachine_arn`;
  }
}
