import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSfnStateMachineVersionsArgs {
  statemachine_arn: string;
}

export class data_aws_sfn_state_machine_versions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSfnStateMachineVersionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sfn_state_machine_versions", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get statemachine_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.statemachine_arn`;
  }

  get statemachine_versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.statemachine_versions`;
  }
}
