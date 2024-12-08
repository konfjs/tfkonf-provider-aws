import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAppmeshVirtualGatewayArgs {
  mesh_name: string;
  name: string;
}

export class data_aws_appmesh_virtual_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAppmeshVirtualGatewayArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_appmesh_virtual_gateway", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get mesh_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.mesh_name`;
  }

  get mesh_owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.mesh_owner`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get resource_owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_owner`;
  }

  get spec(): string {
    return `data.${this.resourceType}.${this.resourceName}.spec`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
