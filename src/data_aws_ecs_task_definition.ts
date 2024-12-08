import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcsTaskDefinitionArgs {
  task_definition: string;
}

export class data_aws_ecs_task_definition extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEcsTaskDefinitionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecs_task_definition", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get arn_without_revision(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn_without_revision`;
  }

  get execution_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.execution_role_arn`;
  }

  get family(): string {
    return `data.${this.resourceType}.${this.resourceName}.family`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get network_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_mode`;
  }

  get revision(): string {
    return `data.${this.resourceType}.${this.resourceName}.revision`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get task_definition(): string {
    return `data.${this.resourceType}.${this.resourceName}.task_definition`;
  }

  get task_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.task_role_arn`;
  }
}
