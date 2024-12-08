import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectQueueArgs {
  instance_id: string;
}

export class data_aws_connect_queue extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsConnectQueueArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_queue", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get hours_of_operation_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hours_of_operation_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get max_contacts(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_contacts`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get outbound_caller_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.outbound_caller_config`;
  }

  get queue_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.queue_id`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
