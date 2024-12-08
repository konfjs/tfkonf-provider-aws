import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDefaultRouteTableArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsDefaultRouteTableArgs {
  default_route_table_id: string;
  propagating_vgws?: string[];
  tags?: { [key: string]: string };
  timeouts?: AwsDefaultRouteTableArgsTimeouts;
}

export class aws_default_route_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDefaultRouteTableArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_default_route_table", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_route_table_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get route(): string {
    return `${this.resourceType}.${this.resourceName}.route`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
