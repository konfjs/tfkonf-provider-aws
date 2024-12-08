import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRouteTablesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsRouteTablesArgsTimeouts {
  read?: string;
}

export interface DataAwsRouteTablesArgs {
  vpc_id?: string;
  filter?: DataAwsRouteTablesArgsFilter[];
  timeouts?: DataAwsRouteTablesArgsTimeouts;
}

export class data_aws_route_tables extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRouteTablesArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_route_tables", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
