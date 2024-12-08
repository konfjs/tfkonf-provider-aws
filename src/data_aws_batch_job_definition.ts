import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBatchJobDefinitionArgs {
  arn?: string;
  name?: string;
  revision?: number;
  status?: string;
}

export class data_aws_batch_job_definition extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBatchJobDefinitionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_batch_job_definition", resourceName);
  }

  get arn_prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn_prefix`;
  }

  get container_orchestration_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.container_orchestration_type`;
  }

  get eks_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.eks_properties`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get node_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_properties`;
  }

  get retry_strategy(): string {
    return `data.${this.resourceType}.${this.resourceName}.retry_strategy`;
  }

  get scheduling_priority(): string {
    return `data.${this.resourceType}.${this.resourceName}.scheduling_priority`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get timeout(): string {
    return `data.${this.resourceType}.${this.resourceName}.timeout`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
