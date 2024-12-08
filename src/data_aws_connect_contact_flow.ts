import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectContactFlowArgs {
  instance_id: string;
  type?: string;
}

export class data_aws_connect_contact_flow extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsConnectContactFlowArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_contact_flow", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get contact_flow_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.contact_flow_id`;
  }

  get content(): string {
    return `data.${this.resourceType}.${this.resourceName}.content`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
