import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsoadminPermissionSetArgs {
  instance_arn: string;
}

export class data_aws_ssoadmin_permission_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSsoadminPermissionSetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssoadmin_permission_set", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get relay_state(): string {
    return `data.${this.resourceType}.${this.resourceName}.relay_state`;
  }

  get session_duration(): string {
    return `data.${this.resourceType}.${this.resourceName}.session_duration`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
