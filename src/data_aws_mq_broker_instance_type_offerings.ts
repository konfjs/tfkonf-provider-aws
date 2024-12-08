import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMqBrokerInstanceTypeOfferingsArgs {
  engine_type?: string;
  host_instance_type?: string;
  storage_type?: string;
}

export class data_aws_mq_broker_instance_type_offerings extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMqBrokerInstanceTypeOfferingsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_mq_broker_instance_type_offerings", resourceName);
  }

  get broker_instance_options(): string {
    return `data.${this.resourceType}.${this.resourceName}.broker_instance_options`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
