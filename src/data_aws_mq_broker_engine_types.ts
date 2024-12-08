import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMqBrokerEngineTypesArgs {
  engine_type?: string;
}

export class data_aws_mq_broker_engine_types extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMqBrokerEngineTypesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_mq_broker_engine_types", resourceName);
  }

  get broker_engine_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.broker_engine_types`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
