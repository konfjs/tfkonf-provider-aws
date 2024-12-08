import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMskKafkaVersionArgs {
  preferred_versions?: string[];
}

export class data_aws_msk_kafka_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsMskKafkaVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_msk_kafka_version", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
