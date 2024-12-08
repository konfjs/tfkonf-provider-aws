import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSfnStateMachineArgs {
  name: string;
}

export class data_aws_sfn_state_machine extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSfnStateMachineArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sfn_state_machine", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get definition(): string {
    return `data.${this.resourceType}.${this.resourceName}.definition`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get revision_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.revision_id`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }
}
