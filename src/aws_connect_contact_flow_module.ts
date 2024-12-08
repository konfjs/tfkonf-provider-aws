import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectContactFlowModuleArgs {
  content_hash?: string;
  description?: string;
  filename?: string;
  instance_id: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_connect_contact_flow_module extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConnectContactFlowModuleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_connect_contact_flow_module", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get contact_flow_module_id(): string {
    return `${this.resourceType}.${this.resourceName}.contact_flow_module_id`;
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
