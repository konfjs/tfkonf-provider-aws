import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcsContainerDefinitionArgs {
  container_name: string;
  task_definition: string;
}

export class data_aws_ecs_container_definition extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEcsContainerDefinitionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecs_container_definition", resourceName);
  }

  get container_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.container_name`;
  }

  get cpu(): string {
    return `data.${this.resourceType}.${this.resourceName}.cpu`;
  }

  get disable_networking(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_networking`;
  }

  get docker_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.docker_labels`;
  }

  get environment(): string {
    return `data.${this.resourceType}.${this.resourceName}.environment`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image(): string {
    return `data.${this.resourceType}.${this.resourceName}.image`;
  }

  get image_digest(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_digest`;
  }

  get memory(): string {
    return `data.${this.resourceType}.${this.resourceName}.memory`;
  }

  get memory_reservation(): string {
    return `data.${this.resourceType}.${this.resourceName}.memory_reservation`;
  }

  get task_definition(): string {
    return `data.${this.resourceType}.${this.resourceName}.task_definition`;
  }
}
