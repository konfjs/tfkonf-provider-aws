import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectContactFlowModuleArgs {
  instance_id: string;
}

export class data_aws_connect_contact_flow_module extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsConnectContactFlowModuleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_contact_flow_module", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get contact_flow_module_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.contact_flow_module_id`;
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

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
