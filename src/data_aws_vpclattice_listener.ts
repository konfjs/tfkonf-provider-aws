import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpclatticeListenerArgs {
  listener_identifier: string;
  service_identifier: string;
}

export class data_aws_vpclattice_listener extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsVpclatticeListenerArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_vpclattice_listener", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get default_action(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_action`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_at`;
  }

  get listener_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.listener_id`;
  }

  get listener_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.listener_identifier`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocol`;
  }

  get service_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_arn`;
  }

  get service_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_id`;
  }

  get service_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_identifier`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
