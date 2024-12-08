import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRouteTableArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsRouteTableArgsTimeouts {
  read?: string;
}

export interface DataAwsRouteTableArgs {
  filter?: DataAwsRouteTableArgsFilter[];
  timeouts?: DataAwsRouteTableArgsTimeouts;
}

export class data_aws_route_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRouteTableArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_route_table", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get associations(): string {
    return `data.${this.resourceType}.${this.resourceName}.associations`;
  }

  get gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.route_table_id`;
  }

  get routes(): string {
    return `data.${this.resourceType}.${this.resourceName}.routes`;
  }

  get subnet_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
