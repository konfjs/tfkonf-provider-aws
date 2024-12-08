import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectQueueArgsOutboundCallerConfig {
  outbound_caller_id_name?: string;
  outbound_caller_id_number_id?: string;
  outbound_flow_id?: string;
}

export interface AwsConnectQueueArgs {
  description?: string;
  hours_of_operation_id: string;
  instance_id: string;
  max_contacts?: number;
  name: string;
  quick_connect_ids?: string[];
  tags?: { [key: string]: string };
  outbound_caller_config?: AwsConnectQueueArgsOutboundCallerConfig;
}

export class aws_connect_queue extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConnectQueueArgs) {
    const meta = {outbound_caller_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_connect_queue", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get hours_of_operation_id(): string {
    return `${this.resourceType}.${this.resourceName}.hours_of_operation_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get queue_id(): string {
    return `${this.resourceType}.${this.resourceName}.queue_id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
