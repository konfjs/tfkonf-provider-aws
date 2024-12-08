import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockProvisionedModelThroughputArgsTimeouts {
  create?: string;
}

export interface AwsBedrockProvisionedModelThroughputArgs {
  commitment_duration?: string;
  model_arn: string;
  model_units: number;
  provisioned_model_name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsBedrockProvisionedModelThroughputArgsTimeouts;
}

export class aws_bedrock_provisioned_model_throughput extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBedrockProvisionedModelThroughputArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_bedrock_provisioned_model_throughput", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get model_arn(): string {
    return `${this.resourceType}.${this.resourceName}.model_arn`;
  }

  get model_units(): string {
    return `${this.resourceType}.${this.resourceName}.model_units`;
  }

  get provisioned_model_arn(): string {
    return `${this.resourceType}.${this.resourceName}.provisioned_model_arn`;
  }

  get provisioned_model_name(): string {
    return `${this.resourceType}.${this.resourceName}.provisioned_model_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
