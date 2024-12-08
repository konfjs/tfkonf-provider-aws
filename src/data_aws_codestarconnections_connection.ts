import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCodestarconnectionsConnectionArgs {
}

export class data_aws_codestarconnections_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCodestarconnectionsConnectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_codestarconnections_connection", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get connection_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_status`;
  }

  get host_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.host_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get provider_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.provider_type`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
