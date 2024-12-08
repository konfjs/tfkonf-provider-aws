import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectContactFlowArgs {
  content_hash?: string;
  description?: string;
  filename?: string;
  instance_id: string;
  name: string;
  tags?: { [key: string]: string };
  type?: string;
}

export class aws_connect_contact_flow extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConnectContactFlowArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_connect_contact_flow", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get contact_flow_id(): string {
    return `${this.resourceType}.${this.resourceName}.contact_flow_id`;
  }

  get content(): string {
    return `${this.resourceType}.${this.resourceName}.content`;
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
